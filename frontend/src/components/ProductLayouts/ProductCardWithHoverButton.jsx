"use client";
import React from "react";
import Link from "next/link";
import AnimatedButton from "../Button/Button";

function TrendingCard({ image, alt, category, buttonProps }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer w-full h-[420px]">
      {/* Background image with zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={alt}
      />

   

      {/* Button — slides up and fades in on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-inter opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <Link href={buttonProps.href || "/products"} tabIndex={-1}>
          <AnimatedButton {...buttonProps} />
        </Link>
      </div>
    </div>
  );
}

export default function ProductCardWithHoverButton({data = [], padding = ""}) {
  return (
    <section className={`w-full ${padding}`}>
           {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((card) => (
          <TrendingCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}