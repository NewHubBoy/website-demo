"use client";

import { SlidersHorizontal, ArrowDownUp } from "lucide-react";
import { products } from "@/data/products";

interface SortBarProps {
  onOpenFilters: () => void;
}

export default function SortBar({ onOpenFilters }: SortBarProps) {
  return (
    <div className="sticky top-[104px] z-20 bg-white border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-6 md:px-10 h-[44px]">
        {/* Sort */}
        <button className="sort-dropdown">
          <ArrowDownUp size={14} strokeWidth={1.5} />
          <span>Sort By: Recommended</span>
        </button>

        {/* Count */}
        <span className="text-xs text-muted tracking-wide hidden md:block">
          {products.length} Items
        </span>

        {/* Filters */}
        <button
          className="flex items-center gap-1.5 text-xs tracking-wide hover:opacity-60 transition-opacity"
          onClick={onOpenFilters}
        >
          <SlidersHorizontal size={14} strokeWidth={1.5} />
          <span className="font-medium">Filters</span>
        </button>
      </div>
    </div>
  );
}
