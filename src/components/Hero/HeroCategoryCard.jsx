"use client"
import React from 'react';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';

// CategoryCard.jsx
export function HeroCategoryCard({ 
  title, 
  image, 
  buttonProps 
}) {
const router = useRouter()
  
  return (
    <div className="relative w-full h-[670px] cursor-pointer overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full group-hover:scale-110 transform-transition duration-700 ease-out cursor-pointer object-cover"
      />
      
      
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10 lg:p-12">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl  mb-6 md:mb-8">
          {title}
        </h2>
        
        <AnimatedButton {...buttonProps} />
        
      </div>
    </div>
  );
}