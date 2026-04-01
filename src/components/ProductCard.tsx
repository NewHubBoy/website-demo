"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  // COS style hover image: If there are multiple images, display the second one on hover
  const mainImage = product.images[0];
  const hoverImage = product.images.length > 1 ? product.images[1] : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.05,
        ease: "easeOut",
      }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <div className="product-image-wrapper mb-3">
        {/* Run-way or Collection Badge could go here, COS keeps it minimal */}
        {product.badge && (
          <span className="absolute top-2 left-2 text-[10px] font-medium tracking-widest uppercase z-10 bg-white/80 px-2 py-1">
            {product.badge}
          </span>
        )}

        {!imageError ? (
          <>
            <Image
              src={mainImage}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover"
              onError={() => setImageError(true)}
            />
            {hoverImage && (
              <Image
                src={hoverImage}
                alt={`${product.name} Alternate View`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="hover-img object-cover"
              />
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-xs tracking-widest font-medium">COS</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 px-1 mt-auto">
        <h3 className="text-[13px] font-medium text-black leading-tight">
          {product.name}
        </h3>
        {product.price !== undefined && (
          <p className="text-[13px] font-normal text-black mt-0.5">
            ${product.price.toLocaleString()}
          </p>
        )}
        {/* Optional colors text often found on COS */}
        <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wide">
          1 Color
        </p>
      </div>
    </motion.article>
  );
}

