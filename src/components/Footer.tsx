"use client";

import { motion } from "framer-motion";

const footerLinks = {
  "Customer Service": [
    "Contact Us",
    "FAQs",
    "Shipping & Returns",
    "Order Tracking",
    "Size Guide",
    "Gift Cards",
    "Store Locator",
  ],
  "About MAISON": [
    "Our Story",
    "Sustainability",
    "Careers",
    "Corporate Information",
    "Press",
  ],
  Legal: [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
  ],
  "Follow Us": ["Instagram", "Facebook", "Twitter", "Pinterest", "YouTube"],
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
              MAISON
            </div>

            {/* Country / Language */}
            <div className="flex items-center gap-6 text-xs text-muted">
              <button className="hover:text-foreground transition-colors tracking-wide">
                United States
              </button>
              <span>|</span>
              <button className="hover:text-foreground transition-colors tracking-wide">
                English
              </button>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted tracking-wide">
              © 2025 MAISON. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
