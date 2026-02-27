"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SmallProductCard = ({ image, title, quantity, link, arrowIcon: ArrowIcon = ChevronRight }) => {
  const router = useRouter()
  return (
    <div
      className="relative rounded-full overflow-hidden cursor-pointer h-28 w-full"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />


      {/* Content */}
      <div className="relative pl-24 h-full flex items-center justify-center px-8">
        {/* Text Section in Center */}
        <div className="text-white z-10 text-center">
          <h3 style={{ fontFamily: "math" }} className="text-xl  whitespace-pre-line mb-1">{title}</h3>
          <p className="text-sm opacity-90">{quantity} products</p>
        </div>

        {/* Arrow Icon on Absolute Right */}
        <div onClick={()=> router.push(link)} className="absolute right-6 z-10 ">
          <div className="group w-9 h-9 rounded-full bg-white bg-opacity-30 flex items-center justify-center hover:bg-black transition duration-300 ease-out">
            <ArrowIcon  className="w-5 h-5 text-black transition duration-300 group-hover:text-white" />
          </div>

        </div>
      </div>
    </div>
  );
};