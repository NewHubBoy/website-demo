"use client";

import { SlidersHorizontal, LayoutGrid, Grid3X3 } from "lucide-react";

interface SubNavProps {
  onOpenFilters: () => void;
  gridColumns: number;
  setGridColumns: (cols: number) => void;
}

export default function SubNav({
  onOpenFilters,
  gridColumns,
  setGridColumns,
}: SubNavProps) {
  return (
    <div className="sticky top-[64px] z-30 bg-white border-b border-[var(--border)] transition-all">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 gap-4">
        
        {/* Left: Filter & Sort */}
        <div className="flex-1 flex justify-start w-full md:w-auto">
          <button
            onClick={onOpenFilters}
            className="tool-btn text-sm font-medium tracking-wide uppercase"
          >
            <SlidersHorizontal size={16} strokeWidth={1.5} />
            Filter & sort
          </button>
        </div>

        {/* Center: Main Categories */}
        <div className="flex-1 flex justify-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="nav-link border-b-2 border-black pb-1">
            CLOTHING
          </a>
          <a href="#" className="nav-link pb-1 text-gray-500">
            ACCESSORIES
          </a>
        </div>

        {/* Right: Grid Controls */}
        <div className="flex-1 hidden md:flex justify-end gap-1">
          {/* 2 columns */}
          <button
            title="2 columns"
            onClick={() => setGridColumns(2)}
            className={`grid-icon-btn ${gridColumns === 2 ? "active" : ""}`}
          >
            <div className="w-[14px] h-[14px] flex gap-[2px]">
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
            </div>
          </button>

          {/* 3 columns */}
          <button
            title="3 columns"
            onClick={() => setGridColumns(3)}
            className={`grid-icon-btn ${gridColumns === 3 ? "active" : ""}`}
          >
            <div className="w-[16px] h-[16px] flex gap-[2px]">
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
            </div>
          </button>

          {/* 4 columns */}
          <button
            title="4 columns"
            onClick={() => setGridColumns(4)}
            className={`grid-icon-btn ${gridColumns === 4 ? "active" : ""}`}
          >
            <div className="w-[18px] h-[18px] flex gap-[2px]">
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
              <div className="flex-1 bg-current" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
