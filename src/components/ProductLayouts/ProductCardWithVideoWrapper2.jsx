import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCardWithVideo } from './ProductCardWithVideo';
import { ProductCardWithVideo2 } from './ProductCardWithVideo2';


export const ProductCardWithVideoWrapper2 = ({ products = [] }) => {
  const [centerIndex, setCenterIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? container.offsetWidth : container.offsetWidth / 3;
    const newIndex = direction === 'left' 
      ? Math.max(0, centerIndex - 1)
      : Math.min(products.length - 1, centerIndex + 1);

    setCenterIndex(newIndex);
    container.scrollTo({
      left: cardWidth * newIndex,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? container.offsetWidth : container.offsetWidth / 3;
      const scrollPos = container.scrollLeft;
      const newIndex = Math.round(scrollPos / cardWidth);
      
      // Only update if index actually changed
      setCenterIndex(prev => {
        if (prev !== newIndex) {
          return newIndex;
        }
        return prev;
      });
    };

    // Add debounce to prevent too many updates
    let scrollTimeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    container.addEventListener('scroll', debouncedScroll);
    return () => {
      container.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Set initial center card on mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // On desktop, start with middle card (index 1), on mobile start with first card (index 0)
    const initialIndex = isMobile ? 0 : 1;
    setCenterIndex(initialIndex);
    
    // Scroll to show the center card initially on desktop
    if (!isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * initialIndex,
        behavior: 'auto'
      });
    }
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      {/* Navigation Buttons - Hidden on mobile */}
      <button
        onClick={() => scroll('left')}
        disabled={centerIndex === 0}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        disabled={centerIndex === products.length - 1}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <ProductCardWithVideo2
            key={index}
            thumbnail={product.thumbnail}
            video={product.video}
            title={product.title}
            price={product.price}
            comparePrice={product.comparePrice}
            isCenter={index === centerIndex}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCenterIndex(index);
              const container = scrollContainerRef.current;
              if (container) {
                const isMobile = window.innerWidth < 768;
                const cardWidth = isMobile ? container.offsetWidth : container.offsetWidth / 3;
                container.scrollTo({
                  left: cardWidth * index,
                  behavior: 'smooth'
                });
              }
            }}
            className={`h-2 rounded-full transition-all ${
              index === centerIndex ? 'bg-black w-2' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

