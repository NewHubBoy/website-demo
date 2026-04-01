"use client";

import { useState, useEffect, useRef } from "react";
import { categories } from "@/data/products";

export default function CategoryNav() {
  const [sticky, setSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState("READY-TO-WEAR");
  const navRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-61px 0px 0px 0px" }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      <nav
        ref={navRef}
        className={`transition-all duration-300 bg-white z-30 ${
          sticky
            ? "fixed top-[60px] left-0 right-0 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : ""
        }`}
      >
        <div className="flex items-center gap-6 px-6 md:px-10 h-[44px] overflow-x-auto scrollbar-none">
          <span className="text-xs text-muted mr-2 shrink-0 hidden md:block">
            Women
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-link shrink-0 ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>
      {/* Spacer when nav is sticky */}
      {sticky && <div className="h-[44px]" />}
    </>
  );
}
