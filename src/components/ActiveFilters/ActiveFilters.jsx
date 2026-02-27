import React from 'react';
import { X } from 'lucide-react';

const ActiveFilters = ({ filters, onClearAll, onRemoveFilter }) => {
  const isPriceChanged = filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000;
  
  const hasFilters = 
    filters.colors.length > 0 || 
    filters.tags.length > 0 || 
    filters.brands.length > 0 ||
    isPriceChanged;

  if (!hasFilters) return null;

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">Active Filters</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-red-500 hover:text-red-700 font-medium"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {isPriceChanged && (
          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border border-gray-200">
            <span>Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
            <button
              onClick={() => onRemoveFilter('price')}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          </div>
        )}
        {filters.colors.map((color) => (
          <div
            key={color}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
          >
            <span>{color}</span>
            <button
              onClick={() => onRemoveFilter('color', color)}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {filters.tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
          >
            <span>{tag}</span>
            <button
              onClick={() => onRemoveFilter('tag', tag)}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {filters.brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
          >
            <span>{brand}</span>
            <button
              onClick={() => onRemoveFilter('brand', brand)}
              className="ml-1 text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;