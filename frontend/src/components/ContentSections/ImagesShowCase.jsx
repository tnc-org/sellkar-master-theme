"use client"
import React from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';

export const ImagesShowCase = ({ 
  title = "",
  data = [],
  
}) => {
  const router = useRouter();

  const handleImageClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="w-full py-12 lg:py-16">
      {/* Title Section */}
      {title && (
        <div className="text-center mb-8 lg:mb-12">
          <Typography.Title 
            level={2} 
            className="!mb-2 font-serif"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400 }}
          >
            {title}
          </Typography.Title>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group cursor-pointer ${
              data.length === 3 && index === 2 ? 'md:col-span-1 lg:col-span-1' : ''
            }`}
            onClick={() => handleImageClick(item.link)}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.alt || `Showcase ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
            </div>

            {/* Optional Caption */}
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};