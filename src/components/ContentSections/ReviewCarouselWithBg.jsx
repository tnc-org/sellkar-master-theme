import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ReviewsCarouselWithBg({
  reviews = [],
  showBackground = true,
  backgroundColor = "",
  color = "white", // "white" or "black"
  sectionBgImage = "", // background image for the whole section
  fontFamily = "sans-serif", // font family for the whole component
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isBlackTheme = color === "black";
  const textColor = isBlackTheme ? "#000000" : "#ffffff";
  const arrowBgColor = isBlackTheme
    ? "bg-black/20 hover:bg-black/30"
    : "bg-white/20 hover:bg-white/30";
  const arrowIconColor = isBlackTheme ? "text-black" : "text-white";
  const borderColor = isBlackTheme ? "border-black/30" : "border-white/30";
  const dotActiveColor = isBlackTheme ? "bg-black" : "bg-white";
  const dotInactiveColor = isBlackTheme
    ? "bg-black/50 hover:bg-black/70"
    : "bg-white/50 hover:bg-white/70";

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goToSlide = (index) => setCurrentIndex(index);

  if (!reviews || reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  return (
    // ── Outer section: full-width bg image ──────────────────────────────────
    <div
      className="relative w-full overflow-hidden"
      style={{
        fontFamily,
        ...(sectionBgImage
          ? {
              backgroundImage: `url(${sectionBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : { backgroundColor: backgroundColor || "transparent" }),
      }}
    >
      {/* ── Per-slide inner background (image or solid color) ─────────────── */}
      {showBackground && currentReview.backgroundImage ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentReview.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <div className="absolute inset-0" />
      )}

      {/* ── Navigation Arrows ─────────────────────────────────────────────── */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full ${arrowBgColor} transition-all duration-200 border ${borderColor}`}
        aria-label="Previous review"
      >
        <ChevronLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${arrowIconColor}`} />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full ${arrowBgColor} transition-all duration-200 border ${borderColor}`}
        aria-label="Next review"
      >
        <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${arrowIconColor}`} />
      </button>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center px-12 sm:px-16 py-10 sm:py-16 text-center min-h-screen">

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-semibold mb-6 tracking-wide uppercase"
          style={{ color: textColor }}
        >
          {currentReview.title}
        </h3>

        {/* Customer Profile Picture — no border */}
        {currentReview.customerProfilePicture && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-5">
            <img
              src={currentReview.customerProfilePicture}
              alt={currentReview.customerName}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Review Text */}
        <p
          className="text-sm sm:text-base leading-relaxed max-w-xl mb-5 italic"
          style={{ color: textColor }}
        >
          "{currentReview.review}"
        </p>

        {/* Customer Name */}
        <p
          className="text-xs sm:text-sm font-bold tracking-widest"
          style={{ color: textColor }}
        >
          {currentReview.customerName}
        </p>

        {/* Dots Navigation */}
        <div className="flex gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? dotActiveColor : dotInactiveColor
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}