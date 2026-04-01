"use client";

import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-[#b8b0a8]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&h=1080&fit=crop&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <h1
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Women&apos;s Ready-to-Wear
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/80 text-sm md:text-base font-light max-w-xl leading-relaxed tracking-wide"
          >
            The women&apos;s ready-to-wear collection designed by the House
            mixes silk dresses, tweed ensembles and embellished looks.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
