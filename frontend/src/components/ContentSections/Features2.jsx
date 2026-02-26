import React from 'react';


export default function Features2({data = []}) {
  
  return (
    <div className="w-full bg-white py-13">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {data.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-4"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gray-800" strokeWidth={2} />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900 tracking-wide">
                  {feature.title}
                </span>
                <span className="text-xs text-gray-600 tracking-wide">
                  {feature.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}