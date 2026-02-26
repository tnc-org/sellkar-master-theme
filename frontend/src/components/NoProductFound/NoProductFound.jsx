import React from 'react';

const NoProductFound = ({ onRemoveFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Box Icon */}
      <div className="relative mb-6">
        {/* Question mark */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-gray-300 text-4xl font-bold">
          ?
        </div>
        
        {/* Box */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 80 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300"
        >
          
          <path 
            d="M40 20 L60 30 L40 40 L20 30 Z" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          
          <path 
            d="M20 30 L20 55 L40 65" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          
          <path 
            d="M60 30 L60 55 L40 65" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          
          <path 
            d="M40 40 L40 65" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

     
      <h2 className="text-2xl font-semibold text-gray-900 mb-3">
        No products found
      </h2>
      
      
      <p className="text-gray-600 text-sm">
        Use fewer filters or{' '}
        <button 
          onClick={onRemoveFilters}
          className="underline hover:text-gray-900 transition-colors"
        >
          remove all
        </button>
      </p>
    </div>
  );
};

export default NoProductFound;