'use client';

import React from 'react';

export default function BrandMarquee({ brands = [], text = "TRUSTED BRAND", speed = 30 }) {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
      
      <div className="w-full overflow-hidden py-8">
        <div className="relative flex">
          <div 
            className="flex items-center gap-12"
            style={{
              animation: `marquee ${speed}s linear infinite`,
              display: 'flex'
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <React.Fragment key={index}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-13 w-auto object-contain grayscale sepia hue-rotate-190 saturate-200 brightness-95"
                />
              
                <span className="text-xs font-semibold tracking-widest text-gray-400 whitespace-nowrap">
                  {text}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}