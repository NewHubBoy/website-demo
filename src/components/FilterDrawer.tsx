"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp, Check } from "lucide-react";
import { categories } from "@/data/products";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export default function FilterDrawer({
  isOpen,
  onClose,
  selectedCategories,
  onCategoryChange,
}: FilterDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleCategory = (category: string) => {
    onCategoryChange(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  const clearAll = () => onCategoryChange([]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="filter-overlay"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="filter-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
              <h2 className="text-xs tracking-[0.15em] uppercase font-medium">
                Filters
              </h2>
              <div className="flex items-center gap-4">
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="text-xs text-muted underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="hover:opacity-60 transition-opacity"
                  aria-label="Close filters"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Sections */}
            <div className="flex-1 overflow-y-auto">
              <div className="filter-section">
                <button
                  className="filter-section-header"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <span>
                    Categories
                    {selectedCategories.length > 0 && (
                      <span className="text-muted ml-2">
                        ({selectedCategories.length})
                      </span>
                    )}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={16} strokeWidth={1.5} />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="filter-section-content">
                        {categories.map((category) => {
                          const isSelected = selectedCategories.includes(category);
                          return (
                            <label
                              key={category}
                              className="filter-option"
                              onClick={() => toggleCategory(category)}
                            >
                              <span
                                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? "bg-black border-black"
                                    : "border-gray-300"
                                }`}
                              >
                                {isSelected && (
                                  <Check
                                    size={10}
                                    strokeWidth={2}
                                    className="text-white"
                                  />
                                )}
                              </span>
                              <span>{category}</span>
                            </label>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-[var(--border)]">
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-black text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-colors"
              >
                Show {selectedCategories.length > 0 ? "Filtered" : "All"} Items
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
