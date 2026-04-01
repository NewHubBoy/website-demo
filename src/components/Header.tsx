"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (logoRef.current) {
      const letters = logoRef.current.querySelectorAll(".logo-letter");
      anime({
        targets: letters,
        opacity: [0, 1],
        translateY: [12, 0],
        delay: anime.stagger(80, { start: 200 }),
        easing: "easeOutExpo",
        duration: 1000,
      });
    }
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-white"
          }`}
      >
        <div className="relative flex items-center justify-between px-6 md:px-10 h-[60px]">
          {/* Left: Contact */}
          <div className="flex-1 flex items-center">
            <button className="hidden md:flex items-center gap-1.5 text-xs tracking-wide hover:opacity-60 transition-opacity">
              <span className="text-sm">+</span>
              <span className="font-medium">Contact Us</span>
            </button>
          </div>

          {/* Center: Logo */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center leading-none" 
            ref={logoRef}
          >
            <div className="logo-text cursor-pointer select-none">
              {"MAISON".split("").map((letter, i) => (
                <span
                  key={i}
                  className="logo-letter inline-block opacity-0"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Icons */}
          <div className="flex-1 flex items-center justify-end gap-5">
            <button
              className="hover:opacity-60 transition-opacity"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button
              className="hidden md:block hover:opacity-60 transition-opacity"
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            <button
              className="hover:opacity-60 transition-opacity"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <Menu size={20} strokeWidth={1.5} />
              <span className="hidden md:inline text-xs font-medium tracking-wide">
                MENU
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex items-center justify-between px-6 md:px-10 h-[60px]">
              <div className="flex-1" />
              <div className="logo-text">MAISON</div>
              <div className="flex-1 flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="hover:opacity-60 transition-opacity"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center gap-6 pt-16"
            >
              {[
                "Women",
                "Men",
                "Children",
                "Jewelry & Watches",
                "Beauty",
                "Décor",
                "Stories",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl font-light tracking-widest hover:opacity-60 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
