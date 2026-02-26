import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function clamp(n, len) {
  return ((n % len) + len) % len;
}

export default function ProductBigPictureWithCarousel({ products = [], title = "Featured Products", padding = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = (dir) => setActiveIndex((prev) => clamp(prev + dir, products.length));

  if (!products.length) return null;

  const active = products[activeIndex];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 min-h-[540px] overflow-hidden bg-[#faf7f5] ${padding}`}>

      {/* Left — big image (hidden on mobile) */}
      <Link href={active.href} className="hidden md:block relative overflow-hidden">
        <Image
          src={active.bigImage}
          alt={active.bigAlt || active.alt}
          fill
          sizes="50vw"
          priority
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>

      {/* Right — carousel panel */}
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 bg-[#fdf0ee]">

        <h2 className="text-2xl md:text-3xl font-serif text-[#2d2420] text-center">{title}</h2>

        {/* Carousel row */}
        <div className="flex items-center gap-4 w-full max-w-sm">

          {/* Prev */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous"
            className="flex-shrink-0 w-10 cursor-pointer h-10 rounded-full border border-[#d8c8c4] bg-white flex items-center justify-center text-[#5a3e3a] hover:bg-[#fff5f3] hover:border-[#b89490] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Card */}
          <Link href={active.href} className="flex-1 relative bg-white rounded-xl overflow-hidden shadow-md block">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={active.carouselImage}
                alt={active.alt}
                fill
                sizes="25vw"
                className="object-contain p-6 transition-transform duration-500 hover:scale-105"
              />
              {active.badge && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 border border-[#e0d5d2] flex items-center justify-center text-[10px] font-semibold text-[#2d2420] uppercase text-center leading-tight">
                    {active.badge}
                  </span>
                </div>
              )}
            </div>
          </Link>

          {/* Next */}
          <button
            onClick={() => navigate(1)}
            aria-label="Next"
            className="flex-shrink-0 w-10 h-10 rounded-full cursor-pointer border border-[#d8c8c4] bg-white flex items-center justify-center text-[#5a3e3a] hover:bg-[#fff5f3] hover:border-[#b89490] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

        </div>

        {/* Product info */}
        <div className="text-center">
          <p className="text-sm font-medium text-[#2d2420]">{active.name}</p>
          <p className="text-sm text-[#7a5c58] mt-1">{active.price}</p>
        </div>

        {/* Dots */}
        {products.length > 1 && (
          <div className="flex gap-2">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to product ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-[#8a5d58] scale-125" : "bg-[#d4c0bc]"}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}