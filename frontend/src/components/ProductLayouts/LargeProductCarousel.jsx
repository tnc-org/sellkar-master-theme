"use client"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '../Button/Button';



export const LargeProductCarousel = ({ items = [], padding="" }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const router = useRouter();
   

    const displayItems = items;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % displayItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
    };

    // Render a single product card
    const ProductCard = ({ item }) => (
        <div className="group">
            <div className="aspect-[4/5] overflow-hidden  mb-4">
                <img
                    onClick={()=> router.push(item.link)}
                    src={item.image}
                    alt={item.title || 'Product'}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="text-center">
                {item.title && (
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                )}
                {item.quantity && (
                    <p className="text-sm text-gray-600 mb-3">{item.quantity}</p>
                )}
                {item.buttonProps && (
                    <AnimatedButton
                     onClick={()=> router.push(item.link)} 
                     {...item.buttonProps}
                     />
                        
                    
                )}
            </div>
        </div>
    );

    return (
        <div className={`relative w-full mx-auto px-4  ${padding || "py-8"}`}>
            {/* Navigation Buttons */}
            {displayItems.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors md:left-4"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/3 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors md:right-4"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Carousel Container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {displayItems.map((item, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="w-full flex-shrink-0"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <ProductCard item={item} />
                                
                                {displayItems[slideIndex + 1] && (
                                    <div className="hidden md:block">
                                        <ProductCard item={displayItems[slideIndex + 1]} />
                                    </div>
                                )}

                                {displayItems[slideIndex + 2] && (
                                    <div className="hidden lg:block">
                                        <ProductCard item={displayItems[slideIndex + 2]} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Indicator */}
            {displayItems.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                    {displayItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex
                                    ? 'bg-black w-2'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LargeProductCarousel;