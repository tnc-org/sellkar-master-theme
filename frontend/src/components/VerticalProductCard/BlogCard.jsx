import React, { useState } from 'react';
import AnimatedButton from '../Button/Button';

// BlogCard.jsx
export function BlogCard({ image, date, title, description, buttonProps }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        {/* Date */}
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
          {date}
        </p>

        {/* Title */}
        <h3 className="text-gray-900 text-xl font-semibold mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Button */}
        <AnimatedButton {...buttonProps} />
       
      </div>
    </div>
  );
}

