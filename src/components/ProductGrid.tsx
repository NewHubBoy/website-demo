"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

interface ProductGridProps {
  columns?: number;
}

export default function ProductGrid({ columns = 4 }: ProductGridProps) {
  // To handle hydration perfectly, we might just default to the passed columns.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full">
      <div
        className="product-grid w-full transition-all duration-300"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "2px", // COS uses very tight or 0 gap sometimes, let's use 2px or small padding
        }}
      >
        {products.map((product, index) => (
          <div key={product.id} className="bg-white overflow-hidden p-1">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
