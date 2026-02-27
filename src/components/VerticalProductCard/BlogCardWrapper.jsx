import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogCard } from './BlogCard';
// BlogCarousel.jsx
export function BlogCardWrapper({ blogs = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate how many cards to show based on screen size
  const cardsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  if (!blogs || blogs.length === 0) {
    return null;
  }

  // Get visible cards (3 cards for desktop view)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % blogs.length;
      cards.push(blogs[index]);
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 disabled:opacity-50"
            aria-label="Previous blog"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 transition-opacity duration-500">
            {visibleCards.map((blog, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="animate-fadeIn"
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-12 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 disabled:opacity-50"
            aria-label="Next blog"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 "
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to blog ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
