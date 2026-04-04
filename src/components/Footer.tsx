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
          <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-medium mb-8">
            合作伙伴
          </h4>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 hover:opacity-60 transition-opacity"
          >
            {/* <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="9" fill="currentColor" />
              <circle cx="24" cy="12" r="3" fill="currentColor" />
              <circle cx="24" cy="36" r="3" fill="currentColor" />
              <circle cx="12" cy="24" r="3" fill="currentColor" />
              <circle cx="36" cy="24" r="3" fill="currentColor" />
            </svg> */}
            {/* <div>
              <span className="text-2xl font-medium tracking-[0.1em]">U米摄影</span>
              <p className="text-xs text-gray-400 mt-1 tracking-wide">
                TEL: 134 5637 0115
              </p>
            </div> */}
          </Link>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl tracking-[0.35em] uppercase font-light">
            Pixel Frog
          </div>
          <p className="text-xs text-muted tracking-wide">
            © 2026 PIXEL FROG. 保留所有权利。
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
