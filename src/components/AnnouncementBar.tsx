"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { announcements } from "@/data/products";

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  const goTo = (direction: "prev" | "next") => {
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % announcements.length
        : (currentIndex - 1 + announcements.length) % announcements.length;

    if (textRef.current) {
      anime({
        targets: textRef.current,
        opacity: [1, 0],
        translateX: direction === "next" ? [0, -20] : [0, 20],
        duration: 250,
        easing: "easeInQuad",
        complete: () => {
          setCurrentIndex(nextIndex);
          if (textRef.current) {
            anime({
              targets: textRef.current,
              opacity: [0, 1],
              translateX: [direction === "next" ? 20 : -20, 0],
              duration: 350,
              easing: "easeOutQuad",
            });
          }
        },
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => goTo("next"), 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="announcement-bar">
      <button
        className="announcement-arrow left"
        onClick={() => goTo("prev")}
        aria-label="Previous announcement"
      >
        <ChevronLeft size={14} />
      </button>
      <span
        ref={textRef}
        className="inline-block tracking-wider text-xs font-light"
      >
        {announcements[currentIndex]}
      </span>
      <button
        className="announcement-arrow right"
        onClick={() => goTo("next")}
        aria-label="Next announcement"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
