// ReviewsCardWrapper.jsx
"use client";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ReviewCardWrapper({ reviews = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    if (!reviews || reviews.length === 0) {
        return null;
    }

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10">
           
            {/* Review Card with Navigation */}
            <div className="relative flex items-center justify-center gap-4 max-w-5xl mx-auto">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                    aria-label="Previous review"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>

                {/* Review Card */}
                <div className="flex-1 transition-opacity duration-500">
                    <ReviewCard {...reviews[currentIndex]} />
                </div>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                    aria-label="Next review"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
            </div>

            {/* Indicators */}
            {reviews.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-gray-800 w-2"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}