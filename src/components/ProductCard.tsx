"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/data/products";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [direction, setDirection] = useState(0);

  const hasMultiple = product.images.length > 1;
  const isFirstLoad = currentImg === 0 && !loaded;

  const prev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(-1);
      setCurrentImg((i) => (i - 1 + product.images.length) % product.images.length);
    },
    [product.images.length]
  );

  const next = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(1);
      setCurrentImg((i) => (i + 1) % product.images.length);
    },
    [product.images.length]
  );

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

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
      className="group cursor-pointer flex flex-col h-full mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Preload other images on hover */}
      {hovered &&
        product.images.map(
          (img, i) =>
            i !== currentImg ? (
              <link key={i} rel="prefetch" href={img} />
            ) : null
        )}

      <div className="product-image-wrapper mb-3 overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 text-[10px] font-medium tracking-widest uppercase z-10 bg-white/80 px-2 py-1">
            {product.badge}
          </span>
        )}

        {/* Loading skeleton - only on first load */}
        {isFirstLoad && !imageError && (
          <div className="absolute inset-0 z-[1] bg-[#f5f5f5] animate-pulse" />
        )}

        {!imageError ? (
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentImg}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={product.images[currentImg]}
                alt={`${product.name} ${currentImg + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                loading={index < 8 ? "eager" : "lazy"}
                priority={index < 8}
                onLoad={() => setLoaded(true)}
                onError={() => setImageError(true)}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-xs tracking-widest font-medium">PIXEL FROG</span>
          </div>
        )}

        {/* Hover arrows */}
        {hovered && hasMultiple && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === currentImg ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1 px-1 mt-auto">
        <h3 className="text-[13px] font-medium text-black leading-tight">
          {product.name}
        </h3>
        {product.price !== undefined && product.price > 0 && (
          <p className="text-[13px] font-normal text-black mt-0.5">
            ${product.price.toLocaleString()}
          </p>
        )}
        <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wide">
          1 Color
        </p>
      </div>
    </motion.article>
  );
}
