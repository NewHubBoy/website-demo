"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp, Check } from "lucide-react";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const filterSections = [
  {
    title: "Categories",
    options: [
      "All Ready-to-Wear",
      "Knitwear",
      "Tops & Shirts",
      "T-Shirts & Sweatshirts",
      "Dresses & Jumpsuits",
      "Pants & Shorts",
      "Denim",
      "Skirts",
      "Swimwear",
      "Coats & Jackets",
      "Outerwear",
      "Leather",
    ],
  },
  {
    title: "Colors",
    options: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Beige",
      "Brown",
      "Grey",
      "Navy",
      "Burgundy",
      "Pink",
      "Multi",
    ],
  },
  {
    title: "Sizes",
    options: [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "36",
      "38",
      "40",
      "42",
      "44",
      "46",
    ],
  },
  {
    title: "Price",
    options: [
      "Under $1,000",
      "$1,000 - $2,000",
      "$2,000 - $3,000",
      "$3,000 - $5,000",
      "Over $5,000",
    ],
  },
  {
    title: "Material",
    options: [
      "Silk",
      "Wool",
      "Cotton",
      "Cashmere",
      "Leather",
      "Denim",
      "Linen",
      "Velvet",
    ],
  },
];

export default function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Categories",
  ]);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const toggleFilter = (section: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [section]: updated };
    });
  };

  const totalSelected = Object.values(selectedFilters).flat().length;

  const clearAll = () => setSelectedFilters({});

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="filter-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
              <h2 className="text-xs tracking-[0.15em] uppercase font-medium">
                Filters
              </h2>
              <div className="flex items-center gap-4">
                {totalSelected > 0 && (
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
              {filterSections.map((section) => {
                const isExpanded = expandedSections.includes(section.title);
                const sectionSelected = selectedFilters[section.title] || [];

                return (
                  <div key={section.title} className="filter-section">
                    <button
                      className="filter-section-header"
                      onClick={() => toggleSection(section.title)}
                    >
                      <span>
                        {section.title}
                        {sectionSelected.length > 0 && (
                          <span className="text-muted ml-2">
                            ({sectionSelected.length})
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
                            {section.options.map((option) => {
                              const isSelected =
                                sectionSelected.includes(option);
                              return (
                                <label
                                  key={option}
                                  className="filter-option"
                                  onClick={() =>
                                    toggleFilter(section.title, option)
                                  }
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
                                  <span>{option}</span>
                                </label>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="p-6 border-t border-[var(--border)]">
              <button
                onClick={onClose}
                className="w-full py-3.5 bg-black text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-colors"
              >
                Show {totalSelected > 0 ? "Filtered" : "396"} Items
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
