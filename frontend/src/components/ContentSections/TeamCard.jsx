"use client"
import React, { useState } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';


const TeamCard = ({ 
  image, 
  name, 
  role, 
  socials = {} 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full sm:w-80 md:w-96 lg:w-[420px] bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-100 object-cover"
        />
        
        {/* Social Links Overlay */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <SocialIcons socials={socials} />
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard