/**
 * 上传图片到 S3 并生成商品数据
 *
 * 用法: node scripts/upload-images.mjs
 *
 * 目录结构:
 *   像素蛙AI换装品类案例库/
 *     针织外套/              ← category
 *       短款毛衣外套内景_Output/  ← name (一个 item)
 *         B1.png                 ← images[0]
 *         B2.png                 ← images[1]
 *         ...
 */

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// ── S3 配置 ──────────────────────────────────────────────
const S3_ENDPOINT = "https://s3.ap-southeast-1.onidel.cloud";
const S3_REGION = "ap-southeast-1";
const S3_ACCESS_KEY = "YS3LT6THJ8RLOOM5ZX8A";
const S3_SECRET_KEY = "aLqWfILqLCdScyMxFJRlzfVxJfMgLgwIwQWy2Ytl";
const S3_BUCKET = "images";
const CNAME_DOMAIN = "images.marcusd.me";

// ── 源目录 ───────────────────────────────────────────────
const SOURCE_DIR = "/Volumes/DockCase/像素蛙AI换装品类案例库";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

const s3 = new S3Client({
  region: S3_REGION,
  credentials: {
    accessKeyId: S3_ACCESS_KEY,
    secretAccessKey: S3_SECRET_KEY,
  },
  endpoint: S3_ENDPOINT,
});

function getContentType(ext) {
  const map = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
  };
  return map[ext] || "application/octet-stream";
}

/**
 * 生成 S3 key: fashion/{category}/{subfolder}/{filename}
 */
function buildS3Key(category, subfolder, filename) {
  const safeCat = category.replace(/[^\w\u4e00-\u9fff-]/g, "_");
  const safeSub = subfolder.replace(/[^\w\u4e00-\u9fff-]/g, "_");
  return `fashion001/${safeCat}/${safeSub}/${filename}`;
}

async function uploadFile(filePath, s3Key, contentType) {
  const body = fs.readFileSync(filePath);
  const cmd = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: s3Key,
    Body: body,
    ContentType: contentType,
    CacheControl: "max-age=31536000",
  });
  await s3.send(cmd);
  return `https://${CNAME_DOMAIN}/${s3Key}`;
}

/**
 * 收集所有图片，按 category/subfolder 分组
 */
function collectImages(baseDir) {
  const items = [];

  // 遍历 category 文件夹
  const categories = fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(d => d.isDirectory());

  for (const catDir of categories) {
    const category = catDir.name;
    const catPath = path.join(baseDir, category);

    // 遍历 subfolder
    const subDirs = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(d => d.isDirectory());

    // 如果没有子文件夹，直接看 category 下有没有图片
    if (subDirs.length === 0) {
      const files = fs.readdirSync(catPath)
        .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()));
      if (files.length > 0) {
        items.push({ category, name: category, files: files.map(f => path.join(catPath, f)) });
      }
      continue;
    }

    for (const subDir of subDirs) {
      const subName = subDir.name;
      const subPath = path.join(catPath, subName);

      const files = fs.readdirSync(subPath)
        .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
        .sort()
        .map(f => path.join(subPath, f));

      if (files.length > 0) {
        items.push({ category, name: subName, files });
      }
    }
  }

  return items;
}

async function main() {
  console.log("扫描图片目录...");
  const items = collectImages(SOURCE_DIR);
  console.log(`找到 ${items.length} 个分组，共 ${items.reduce((s, i) => s + i.files.length, 0)} 张图片\n`);

  const results = [];
  let id = 1;
  let uploaded = 0;

  for (const item of items) {
    const images = [];

    for (const filePath of item.files) {
      const ext = path.extname(filePath).toLowerCase();
      const filename = path.basename(filePath);
      const s3Key = buildS3Key(item.category, item.name, filename);
      const contentType = getContentType(ext);

      try {
        const url = await uploadFile(filePath, s3Key, contentType);
        images.push(url);
        uploaded++;
        process.stdout.write(`\r已上传: ${uploaded} 张`);
      } catch (err) {
        console.error(`\n上传失败: ${filePath} → ${err.message}`);
      }
    }

    if (images.length > 0) {
      results.push({
        id: id++,
        name: item.name.replace(/_Output$/, ""),
        price: 0,
        category: item.category.replace(/\(0\)$/, ""),
        badge: "",
        images,
      });
    }
  }

  console.log(`\n\n上传完成！共 ${uploaded} 张图片\n`);

  // 输出结果
  const output = JSON.stringify(results, null, 2);
  const outputPath = path.join(import.meta.dirname, "upload-result.json");
  fs.writeFileSync(outputPath, output, "utf-8");
  console.log(`结果已保存到: ${outputPath}\n`);
  console.log(output);
}

main().catch(err => {
  console.error("脚本执行失败:", err);
  process.exit(1);
});
