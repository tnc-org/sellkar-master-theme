"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Subtitles } from "lucide-react";
import AnimatedButton from "../Button/Button";

export default function PictureCarousel({ images, title, subTitle, buttonProps }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full relative py-10 px-4">

      <div className="text-center mb-12">
          

          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl  mb-4">
            {title}
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            {subTitle}
          </p>

          <div>
            <AnimatedButton {...buttonProps} />
          </div>
        </div>

      
      <div className="relative">
        {images.length > 1 &&
  <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 m-5 hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        }
        

        
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full aspect-[16/9] md:aspect-[21/9]"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

{images.length > 1 &&(
 <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 m-5 hover:bg-gray-100 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
)}
        
       
      </div>

     {images.length > 1 &&(
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-black w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
     )}
      
    </div>
  );
}