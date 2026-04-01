import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), ".cache", "images");
const REMOTE_BASE = "https://images.marcusd.me";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params;
  const filePath = segments.join("/");
  const cachePath = path.join(CACHE_DIR, filePath);

  // 1. 命中磁盘缓存
  if (fs.existsSync(cachePath)) {
    const stat = fs.statSync(cachePath);
    const ext = path.extname(filePath).toLowerCase();
    const mime =
      { ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif" }[ext] || "application/octet-stream";

    const buffer = fs.readFileSync(cachePath);
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": mime,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Length": String(buffer.length),
      },
    });
  }

  // 2. 从远端拉取
  const remoteUrl = `${REMOTE_BASE}/${filePath}`;
  const res = await fetch(remoteUrl);
  if (!res.ok) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // 3. 写入磁盘缓存
  const dir = path.dirname(cachePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(cachePath, buffer);

  const contentType = res.headers.get("content-type") || "image/webp";
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Length": String(buffer.length),
    },
  });
}
