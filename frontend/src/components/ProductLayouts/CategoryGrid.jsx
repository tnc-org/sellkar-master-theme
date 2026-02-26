import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../Button/Button";

export default function CategoryGrid({ data = [], padding = "" }) {
  return (
    <section className={`w-full ${padding}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((card) => (
          <CategoryCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

function CategoryCard({ card }) {
  return (
    <Link
      href={card.href ?? "#"}
      className="relative w-full overflow-hidden group/card block"
      style={{ aspectRatio: "3 / 2" }}  
    >
      {/* Fallback bg color while image loads */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: card.bgColor }}
      />

      {/* Next.js Image with fill for lazy loading */}
      <Image
        src={card.bgImage}
        alt={card.buttonProps?.text ?? "category"}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-in-out group-hover/card:scale-105"
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

      {/* Button — isolated from card's named group, animates only on its own hover */}
      <div className="absolute bottom-5 md:bottom-10 left-0 right-0 flex justify-center">
        <AnimatedButton {...card.buttonProps} />
      </div>
    </Link>
  );
}