"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        {/* 合作方 */}
        <div className="mb-16">
          <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-8">
            合作伙伴
          </h4>
          <div className="flex items-center gap-12">
            <Link
              href="https://umi.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover:opacity-60 transition-opacity"
            >
              {/* U米摄影 Logo */}
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="6" fill="currentColor" />
                  <circle cx="16" cy="8" r="2" fill="currentColor" />
                  <circle cx="16" cy="24" r="2" fill="currentColor" />
                  <circle cx="8" cy="16" r="2" fill="currentColor" />
                  <circle cx="24" cy="16" r="2" fill="currentColor" />
                </svg>
                <span className="text-sm font-medium tracking-wide">U米摄影</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6">
              客户服务
            </h4>
            <ul className="space-y-0">
              {["联系我们", "常见问题", "配送与退换", "订单查询", "尺码指南"].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6">
              关于 PIXEL FROG
            </h4>
            <ul className="space-y-0">
              {["品牌故事", "可持续发展", "加入我们", "公司信息", "媒体报道"].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6">
              法律信息
            </h4>
            <ul className="space-y-0">
              {["服务条款", "隐私政策", "Cookie 政策", "无障碍声明"].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase font-medium mb-6">
              关注我们
            </h4>
            <ul className="space-y-0">
              {["Instagram", "Facebook", "Twitter", "Pinterest", "YouTube"].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl tracking-[0.35em] uppercase font-light">
              Pixel Frog
            </div>

            <p className="text-xs text-muted tracking-wide">
              © 2026 PIXEL FROG. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
