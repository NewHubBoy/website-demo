"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, User, Search, Heart, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-[0_1px_4px_rgba(0,0,0,0.05)]" : "bg-white"
          }`}
      >
        <div className="relative flex items-center justify-between px-6 md:px-10 h-[64px]">
          {/* Left: main categories */}
          <div className="flex-1 hidden md:flex items-center gap-6">
            {/* <a href="#" className="nav-link font-medium">女装</a> */}
            {/* <a href="#" className="nav-link">男装</a> */}
          </div>

          {/* Left: Mobile Menu Trigger */}
          <div className="flex-1 flex md:hidden items-center">
            <button
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <Menu size={22} strokeWidth={1.2} />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <a href="#" className="logo-text text-[1.6rem] tracking-tight">Pixel Frog</a>
          </div>

          {/* Right: Icons & Region */}
          <div className="flex-1 flex items-center justify-end gap-5">
            <button className="hover:opacity-60 transition-opacity" aria-label="Search">
              <Search size={20} strokeWidth={1.2} />
            </button>
            <button className="hidden md:block hover:opacity-60 transition-opacity" aria-label="Account">
              <User size={20} strokeWidth={1.2} />
            </button>
            <button className="hidden md:block hover:opacity-60 transition-opacity" aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.2} />
            </button>
            <button className="hover:opacity-60 transition-opacity mr-2" aria-label="Shopping bag">
              <ShoppingBag size={20} strokeWidth={1.2} />
            </button>
            <div className="hidden lg:block text-xs font-semibold tracking-wide cursor-pointer hover:opacity-60">
              US/EN
            </div>
          </div>
        </div>
      </header>

      {/* Basic Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-[64px] border-b border-[var(--border)]">
            <div className="flex-1" />
            <div className="logo-text text-[1.6rem]">Pixel Frog</div>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>
          </div>
          <nav className="flex flex-col p-6 gap-6 overflow-y-auto">
            {/* <a href="#" className="text-xl font-medium tracking-wide">女装</a>
            <a href="#" className="text-xl font-medium tracking-wide">男装</a> */}
            <div className="h-px bg-[var(--border)] my-4" />
            <a href="#" className="text-sm">账户</a>
            <a href="#" className="text-sm">收藏夹</a>
            <a href="#" className="text-sm">设置 (中国/中文)</a>
          </nav>
        </div>
      )}
    </>
  );
}
