"use client"
import { Grid3x3 } from 'lucide-react';
import React, { useState } from 'react';

const GridLayoutSelector = ({ gridColumns, onGridChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const gridOptions = [2, 3, 4, 5];

  return (
    <div 
      className="relative inline-flex items-center gap-3"
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
    >
      {/* Numbers appear on LEFT when hovering */}
      <div className={`flex gap-2 transition-all duration-300 ${
        showOptions ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
      }`}>
        {gridOptions.map((num) => (
          <button
            key={num}
            onClick={() => onGridChange(num)}
            className={`w-11 h-11 rounded-full border-1 flex items-center justify-center  transition-all duration-200 ${
              gridColumns === num
                ? 'border-black bg-black text-white scale-110 shadow-md'
                : 'border-gray-250 bg-white text-black  hover:bg-black hover:text-white '
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Grid Icon */}
      <button
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Grid layout options"
      >
        <Grid3x3 size={30} className="text-gray-700" />
      </button>
    </div>
  );
};

export default GridLayoutSelector;