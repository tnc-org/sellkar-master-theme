import React, { useEffect, useRef } from 'react';

const FollowsUsSection1 = ({images = []}) => {
  const scrollRef = useRef(null);
  
 
  
  const allImages = [...images, ...images, ...images];
  
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    let currentIndex = 0;
    let isResetting = false;
    
    const getImageWidth = () => {
      const containerWidth = container.offsetWidth;
      const gap = 16;
      return (containerWidth - (3 * gap)) / 4;
    };
    
    const moveToNext = () => {
      if (isResetting) return;
      
      currentIndex++;
      const imageWidth = getImageWidth();
      const scrollAmount = currentIndex * (imageWidth + 16);
      
      // Reset when we've scrolled through the first set
      if (currentIndex >= images.length) {
        isResetting = true;
        
        // Instantly jump to the equivalent position in the second set
        container.style.scrollBehavior = 'auto';
        currentIndex = 0;
        container.scrollLeft = 0;
        
        // After a brief moment, continue smooth scrolling
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
          isResetting = false;
        }, 50);
      } else {
        container.scrollLeft = scrollAmount;
      }
    };
    
    const interval = setInterval(moveToNext, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full   bg-white">
      <div className="w-full">
        <div 
          ref={scrollRef} 
          className="overflow-x-hidden scrollbar-hide"
          style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              scroll-behavior: smooth;
            }
          `}</style>
          <div className="flex gap-4">
            {allImages.map((img, index) => (
              <div 
                key={index}
                className="relative bg-gray-100 flex-shrink-0 overflow-hidden"
                style={{
                  width: 'calc((100% - 3rem) / 4)',
                  aspectRatio: '4/3'
                }}
              >
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowsUsSection1;