'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Slider } from 'antd';



const ShopFilter = ({ onFilterChange, onClose }) => {
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [colors, setColors] = useState([]);
  const [tags, setTags] = useState([]);
  const [brands, setBrands] = useState([]);

  const colorOptions = ["Black", "White", "Gray", "Blue", "Gold"];
  const tagOptions = ["Luxury", "Casual", "Classic", "Modern"];
  const brandOptions = ["Classic Chrono", "Minimal", "Luxury", "Premium", "Smart"];

  const updateFilters = (newData = {}) => {
    onFilterChange({
      priceRange,
      colors,
      tags,
      brands,
      ...newData,
    });
  };

  return (
    <div className="space-y-6">
      {onClose && (
        <div className="flex justify-between md:hidden">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button onClick={onClose}><X size={20} /></button>
        </div>
      )}

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <Slider

          value={priceRange}
          range
          min={1}
          max={1000}
          onChange={(newRange) => {
            setPriceRange(newRange);
            updateFilters({ priceRange: newRange });
          }}
          styles={{
            track: { backgroundColor: 'black' },
            tracks: { backgroundColor: 'black' },
            
          }}

        />

        <div className="flex justify-between text-sm font-bold mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-2">Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {colorOptions.map((c) => (
            <button
              key={c}
              onClick={() => {
                const updated = colors.includes(c) ? colors.filter(x => x !== c) : [...colors, c];
                setColors(updated);
                updateFilters({ colors: updated });
              }}
              className={`px-3 py-1 rounded-full text-sm border ${colors.includes(c) ? 'bg-black text-white' : 'bg-gray-100'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-2">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          {tagOptions.map((t) => (
            <button
              key={t}
              onClick={() => {
                const updated = tags.includes(t) ? tags.filter(x => x !== t) : [...tags, t];
                setTags(updated);
                updateFilters({ tags: updated });
              }}
              className={`px-3 py-1 rounded-full text-sm ${tags.includes(t) ? 'bg-black text-white' : 'bg-gray-100'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <div className="flex flex-col gap-1">
          {brandOptions.map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={brands.includes(b)}
                onChange={() => {
                  const updated = brands.includes(b) ? brands.filter(x => x !== b) : [...brands, b];
                  setBrands(updated);
                  updateFilters({ brands: updated });
                }}
              />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
