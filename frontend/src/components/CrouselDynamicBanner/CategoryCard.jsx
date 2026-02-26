"use client";

import React from 'react';

const CategoryCard = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 group"
    >
      <div 
        className={`w-28 h-28 md:w-32 md:h-32 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 overflow-hidden ${
          isActive ? ' ring-white ring-opacity-60 shadow-xl ' : ''
        }`}
        style={{
          backgroundColor: '#f5f5f5'
        }}
      >
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 cursor-pointer"
        />
      </div>
      <span className={`text-white font-medium text-center transition-all duration-300 max-w-[120px] md:max-w-[140px] ${
        isActive ? 'text-base md:text-lg font-semibold' : 'text-sm md:text-base'
      }`}>
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;