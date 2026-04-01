"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface ProductGridProps {
  columns?: number;
  selectedCategories?: string[];
}

export default function ProductGrid({ columns = 4, selectedCategories = [] }: ProductGridProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProducts = selectedCategories.length > 0
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  return (
    <section className="w-full">
      <div
        className="product-grid w-full transition-all duration-300"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "0", // COS uses very tight or 0 gap sometimes, let's use 2px or small padding
        }}
      >
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="bg-white overflow-hidden p-1">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
