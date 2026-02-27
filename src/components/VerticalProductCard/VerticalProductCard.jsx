import React from 'react';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';

const VerticalProductCard = ({ image, title, reverse = false }) => {
      const router = useRouter()
  return (
    <div className="w-full bg-white">
      {/* Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title + Button Row */}
      <div
        className={`flex items-center pt-4
        ${reverse ? "flex-row-reverse justify-between" : "justify-between"}`}
      >
        <h3 className="text-2xl text-gray-900">
          {title}
        </h3>

        <AnimatedButton 
        onClick={()=> router.push('/shop')}
          text="SHOP NOW"
          bgColor="bg-white"
          textColor="text-black"
          onlyBottomBorder
        />
      </div>
    </div>
  );
};

export default VerticalProductCard;
