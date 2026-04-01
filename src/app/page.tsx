"use client";

import { useState } from "react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import CategoryNav from "@/components/CategoryNav";
import HeroBanner from "@/components/HeroBanner";
import SortBar from "@/components/SortBar";
import ProductGrid from "@/components/ProductGrid";
import FilterDrawer from "@/components/FilterDrawer";
import Footer from "@/components/Footer";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnnouncementBar />
      <CategoryNav />
      <HeroBanner />
      <SortBar onOpenFilters={() => setFiltersOpen(true)} />
      <ProductGrid />
      <Footer />
      <FilterDrawer
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
      />
    </div>
  );
}
