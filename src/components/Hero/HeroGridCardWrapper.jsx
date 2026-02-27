import React, { useState } from 'react';
import HeroGridCard from './HeroGridCard';


export function HeroGridCardWrapper({ 
  defaultBgImage, 
  cards = [] 
}) {
  const [currentBgImage, setCurrentBgImage] = useState(defaultBgImage);

  const handleCardHover = (bgImage) => {
    setCurrentBgImage(bgImage);
  };

  const handleCardLeave = () => {
    setCurrentBgImage(defaultBgImage);
  };

  return (
    <div className="relative w-full my-10 min-h-screen overflow-hidden">
      {/* Background Image with Transition */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${currentBgImage})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Grid Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {cards.map((card, index) => (
              <HeroGridCard
                key={index}
                title={card.title}
                itemCount={card.itemCount}
                bgColor={card.bgColor}
                buttonProps={card.buttonProps}
                onHover={() => handleCardHover(card.hoverBgImage)}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



  

