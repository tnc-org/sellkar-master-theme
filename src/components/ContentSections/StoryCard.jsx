import React from 'react';

// StoryCard.jsx
export function StoryCard({ 
  title, 
  description, 
  images = [] 
}) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
          {/* Left - Title & Description */}
          <div className="flex flex-col justify-start text-left">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl  text-gray-900 mb-4 lg:mb-6">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right - Images in Row */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {images.map((image, index) => (
              <div key={index} className="w-full aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col">
          {/* Title & Description */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Images in Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {images.map((image, index) => (
              <div key={index} className="w-full aspect-video overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// Demo
// function Demo() {
//   const storyData = {
//     title: "Story.",
//     description: "With over 1,800 stores ranging from local community pharmacies to large destination health and beauty stores, our purpose is to support our customers and patients through every stage of their lives.",
//     images: [
//       "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
//       "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop",
//       "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop"
//     ]
//   };

  