"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="px-0">
      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "#e8e8e8",
        }}
      >
        {products.map((product, index) => {
          // Create mixed layout: some items span 2 columns for editorial feel
          const isLarge = product.isLarge;

          return (
            <div
              key={product.id}
              className="bg-[var(--background)]"
              style={
                isLarge
                  ? { gridColumn: "span 2", gridRow: "span 2" }
                  : undefined
              }
            >
              <ProductCard product={product} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
