import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ReviewsCarousel({ 
  reviews = [],
  showBackground = true,
  backgroundColor = "",
  color = "white", // "white" or "black"
  
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Set all colors based on the color prop
  const isBlackTheme = color === "black";
  const textColor = isBlackTheme ? "#000000" : "#ffffff";
  const arrowBgColor = isBlackTheme ? "bg-black/20 hover:bg-black/30" : "bg-white/20 hover:bg-white/30";
  const arrowIconColor = isBlackTheme ? "text-black" : "text-white";
  const borderColor = isBlackTheme ? "border-black/30" : "border-white/30";
  const dotActiveColor = isBlackTheme ? "bg-black" : "bg-white";
  const dotInactiveColor = isBlackTheme ? "bg-black/50 hover:bg-black/70" : "bg-white/50 hover:bg-white/70";

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!reviews || reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
      {/* Background - Image or Solid Color */}
      {showBackground && currentReview.backgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${currentReview.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{ backgroundColor }}
        />
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 ${arrowBgColor} backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110`}
        aria-label="Previous review"
      >
        <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${arrowIconColor}`} />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 ${arrowBgColor} backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110`}
        aria-label="Next review"
      >
        <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 ${arrowIconColor}`} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 text-center">
        {/* Title */}
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 transition-all duration-500"
          style={{ color: textColor }}
        >
          {currentReview.title}
        </h2>

        {/* Customer Profile Picture */}
        {currentReview.customerProfilePicture && (
          <div className="mb-6 sm:mb-8 transition-all duration-500 transform hover:scale-105">
            <img
              src={currentReview.customerProfilePicture}
              alt={currentReview.customerName}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-4 ${borderColor} shadow-lg`}
            />
          </div>
        )}

        {/* Review Text */}
        <p 
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-6 sm:mb-8 transition-all duration-500"
          style={{ color: textColor, opacity: 0.9 }}
        >
          {currentReview.review}
        </p>

        {/* Customer Name */}
        <p 
          className="text-sm sm:text-base md:text-lg tracking-widest uppercase transition-all duration-500"
          style={{ color: textColor }}
        >
          {currentReview.customerName}
        </p>

       {/* Dots Navigation */}
                 <div className="flex gap-2 mt-8 sm:mt-10">
                     {reviews.map((_, index) => (
                         <button
                             key={index}
                             onClick={() => goToSlide(index)}
                             className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                                 index === currentIndex
                                     ? dotActiveColor
                                     : dotInactiveColor
                            }`}
                             aria-label={`Go to review ${index + 1}`}
                         />
                   ))}
                </div>
      </div>
    </div>
  );
}