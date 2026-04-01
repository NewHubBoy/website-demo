"use client";

import { motion } from "framer-motion";

const footerLinks = {
  "客户服务": [
    "联系我们",
    "常见问题",
    "配送与退换",
    "订单查询",
    "尺码指南",
    "礼品卡",
    "门店查询",
  ],
  "关于 PIXEL FROG": [
    "品牌故事",
    "可持续发展",
    "加入我们",
    "公司信息",
    "媒体报道",
  ],
  "法律信息": [
    "服务条款",
    "隐私政策",
    "Cookie 政策",
    "无障碍声明",
  ],
  "关注我们": ["Instagram", "Facebook", "Twitter", "Pinterest", "YouTube"],
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white border-t border-[var(--border)] mt-auto"
    >
      <div className="px-6 md:px-10 py-16">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6">
                {category}
              </h4>
              <ul className="space-y-0">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div
              className="text-2xl tracking-[0.35em] uppercase font-light"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Pixel Frog
            </div>

            {/* Country / Language */}
            <div className="flex items-center gap-6 text-xs text-muted">
              <button className="hover:text-foreground transition-colors tracking-wide">
                中国
              </button>
              <span>|</span>
              <button className="hover:text-foreground transition-colors tracking-wide">
                中文
              </button>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted tracking-wide">
              © 2025 PIXEL FROG. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
