"use client";
import AnimatedButton from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Hero_Carousel({
    slides = [],
    autoPlay = true,
    interval = 100000,
    showIndicators = true
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const router = useRouter();

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    useEffect(() => {
        if (!autoPlay) return;

        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, interval);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, autoPlay, interval, nextSlide]);

    return (
        <div className="relative w-full h-screen overflow-hidden mb-8">
            {/* Slides */}
            <div className="w-full h-full relative">
                {slides.map((slide, i) => {
                    const isVideo = slide.mediaType === "video";
                    const isCurrent = i === currentIndex;

                    return (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                        >
                            {isVideo ? (
                                <div className="w-full h-full">
                                    <video
                                        src={slide.media}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <img
                                    src={slide.media || slide.image}
                                    alt={slide.title || "Hero slide"}
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Text Overlay */}
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8
                                    ${slide.position === "left" ? "sm:items-start sm:justify-center sm:pl-12 md:pl-16 lg:pl-20" : ""}
                                    ${slide.position === "right" ? "sm:items-end sm:justify-center sm:pr-12 md:pr-16 lg:pr-20" : ""}
                                    ${slide.position === "center" ? "items-center justify-center" : ""}
                                `}
                            >
                                <div className={`max-w-lg flex flex-col gap-4 sm:gap-5 md:gap-6 items-start
                                    ${slide.position === "center" ? "!items-center text-center" : "text-left"}
                                `}>
                                    <p className={`tracking-widest text-xs sm:text-sm md:text-base lg:text-base ${slide.subtitleColor || slide.textColor || "text-white"}`}>
                                        {slide.subtitle}
                                    </p>
                                    <h2 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl ${slide.titleColor || slide.textColor || "text-white"}`}>
                                        {slide.title}
                                    </h2>
                                    {slide.description && (
                                        <p className={`text-sm sm:text-base md:text-lg lg:text-lg ${slide.descriptionColor || slide.textColor || "text-white"}`}>
                                            {slide.description}
                                        </p>
                                    )}
                                    {slide.button && (
                                        <AnimatedButton
                                            onClick={() => router.push(slide.link)}
                                            text={slide.button}
                                            bgColor={slide.buttonBg || "bg-black"}
                                            textColor={slide.buttonText || "text-white"}
                                            padding="px-4 md:px-10 mt-3 md:mt-4"
                                        />
                                    )}

                                    {slide.buttonProps && (
                                         <AnimatedButton {...slide.buttonProps}/>  
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Indicators */}
            {showIndicators && slides.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                i === currentIndex ? "bg-black" : "bg-gray-400"
                            }`}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Navigation Buttons */}
            {slides.length > 1 && (
                <>
                    <button
                        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20 hover:scale-110 transition-transform"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        &#10094;
                    </button>
                    <button
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20 hover:scale-110 transition-transform"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
}