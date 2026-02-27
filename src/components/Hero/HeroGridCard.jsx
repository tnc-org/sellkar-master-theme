import AnimatedButton from '@/components/Button/Button';
import React, { useState } from 'react';

// ProductCard.jsx
export default function HeroGridCard({ title, itemCount, bgColor, onHover, onLeave, buttonProps }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <div
      className="relative h-64 border border-white/30 overflow-hidden cursor-pointer transition-all duration-500 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? bgColor : 'transparent'
      }}
    >
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-500">
        <div className={`transition-all duration-500 ${isHovered ? '-translate-y-8' : ''}`}>
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm">
            {itemCount} Items
          </p>
        </div>

        {/* Button - Only shown on hover */}
        <div className={`mt-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <AnimatedButton {...buttonProps} />
          
        </div>
      </div>
    </div>
  );
}

