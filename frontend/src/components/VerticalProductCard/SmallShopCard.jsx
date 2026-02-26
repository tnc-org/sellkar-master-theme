"use client"
import React from 'react';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';

export function SmallShopCard({ 
  title = "Product Title",
  subtitle = "Category",
  image = "",
  buttonProps,
  link,
}) {
const router = useRouter()
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex items-center gap-6">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {subtitle}
        </p>
        <div>
       <AnimatedButton onClick={()=> router.push(link)} {...buttonProps}/>
        </div>
      </div>
    </div>
  );
}