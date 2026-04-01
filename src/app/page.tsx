"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SubNav from "@/components/SubNav";
import ProductGrid from "@/components/ProductGrid";
import FilterDrawer from "@/components/FilterDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [gridColumns, setGridColumns] = useState(4);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SubNav
        onOpenFilters={() => setFiltersOpen(true)}
        gridColumns={gridColumns}
        setGridColumns={setGridColumns}
      />
      <main className="flex-1 w-full mx-auto pb-24">
        <div className="pt-2 px-6 md:px-10 flex">
          <ProductGrid columns={gridColumns} selectedCategories={selectedCategories} />
        </div>
      </main>
      {/* <Footer /> */}
      <FilterDrawer
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
      />
    </div>
  );
}
