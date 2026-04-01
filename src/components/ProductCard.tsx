"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageError, setImageError] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  // Generate a unique gradient based on product ID for fallback
  const gradients = [
    "linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 50%, #6b6b6b 100%)",
    "linear-gradient(135deg, #8b4513 0%, #a0522d 50%, #cd853f 100%)",
    "linear-gradient(135deg, #191970 0%, #000080 50%, #4169e1 100%)",
    "linear-gradient(135deg, #800020 0%, #722f37 50%, #c41e3a 100%)",
    "linear-gradient(135deg, #2f4f4f 0%, #708090 50%, #778899 100%)",
    "linear-gradient(135deg, #f5f5dc 0%, #ffe4c4 50%, #d2b48c 100%)",
    "linear-gradient(135deg, #1c1c1c 0%, #363636 50%, #555555 100%)",
    "linear-gradient(135deg, #4b0082 0%, #6a0dad 50%, #9370db 100%)",
  ];
  const fallbackGradient = gradients[product.id % gradients.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
        ease: "easeOut",
      }}
      className="group cursor-pointer"
    >
      <div className="product-image-wrapper">
        {/* Badge */}
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        {/* Product Image */}
        {!imageError ? (
          <Image
            src={product.images[currentImage]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: fallbackGradient }}
          >
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-light">
              MAISON
            </span>
          </div>
        )}

        {/* Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              className="product-nav-arrow left"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              className="product-nav-arrow right"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-2">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentImage ? "bg-black/70" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-3 pb-6 px-1">
        <h3 className="text-xs font-normal leading-snug tracking-wide">
          {product.name}
        </h3>
        <p className="text-xs text-muted mt-1 font-light">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </motion.article>
  );
}
