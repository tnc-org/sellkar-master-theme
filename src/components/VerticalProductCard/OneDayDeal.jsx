// DealOfTheWeek.jsx
"use client";
import { useState, useEffect } from "react";
import AnimatedButton from "../Button/Button";

export function OneDayDeal({ 
    subtitle,
    title,
    price,
    comparePrice,
    description,
    countdownDate, // Pass as Date object or timestamp
    buttonProps,
    productImage,
    backgroundImage
}) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(countdownDate) - new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    mins: Math.floor((difference / 1000 / 60) % 60),
                    secs: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [countdownDate]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            
            {/* Content Container */}
            <div className="relative px-4 py-12 sm:py-16 md:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* Product Image Section */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10 md:p-12 w-full max-w-md">
                                <img
                                    src={productImage}
                                    alt={title}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="text-center lg:text-left">
                            {/* Subtitle */}
                            {subtitle && (
                                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-700 mb-3">
                                    {subtitle}
                                </p>
                            )}

                            {/* Title */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                                {title}
                            </h2>

                            {/* Price */}
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
                                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
                                    ${price}
                                </span>
                                {comparePrice && (
                                    <span className="text-lg sm:text-xl text-gray-500 line-through">
                                        ${comparePrice}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            {description && (
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                                    {description}
                                </p>
                            )}

                            {/* Countdown Timer */}
                            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                                <TimeUnit value={timeLeft.days} label="DAYS" />
                                <TimeUnit value={timeLeft.hours} label="HOURS" />
                                <TimeUnit value={timeLeft.mins} label="MINS" />
                                <TimeUnit value={timeLeft.secs} label="SECS" />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center lg:justify-start">
                                <AnimatedButton {...buttonProps} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// TimeUnit Component
function TimeUnit({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-yellow-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 tracking-wide">
                {label}
            </span>
        </div>
    );
}

// Example data structure (DealOfTheWeekData.js)
export const DealOfTheWeekData = {
    subtitle: "DEALS OF THE WEEK",
    title: "Gin Lane Greenport Cotton",
    price: 330.00,
    comparePrice: 400.00,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a.",
    countdownDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    buttonProps: {
        text: "SHOP NOW",
        bgColor: "bg-black",
        padding: "px-10 py-4",
        textColor: "text-white",
    },
    productImage: "/path/to/product-image.jpg",
    backgroundImage: "/path/to/background-pattern.jpg"
};

