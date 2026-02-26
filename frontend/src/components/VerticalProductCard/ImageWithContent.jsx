"use client"
import React from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/navigation';
import AnimatedButton from '../Button/Button';


export const ImageWithContent = ({
  image,
  subtitle,
  title,
  description,
  reverseRow = false,
  itemsCenter,
  bgColor,
  buttonProps,
}) => {

    const router = useRouter()
  return (
    <div className="w-full px-4 py-15 lg:py-20">
      <div className={`mx-auto ${bgColor || ""} grid grid-cols-1 gap-5 lg:grid-cols-2 items-center ${reverseRow ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className={`relative ${reverseRow ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative">
            <img 
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
        
          </div>
        </div>

        {/* Content Section */}
        <div className={` ${reverseRow ? 'lg:order-1' : 'lg:order-2'} flex justify-center ${itemsCenter? "items-center" : ""} flex flex-col gap-5 `}>
          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm tracking-widest uppercase text-gray-600">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <Typography.Title 
            level={1} 
            className="font-serif  whitespace-pre-line"
            style={{fontWeight:"600", fontSize:"3rem"}}
          >
            {title}
          </Typography.Title>

          {/* Description */}
          <p className="text-gray-700  text-base text-sm">
            {description}
          </p>

          {buttonProps && (
            <div className='mb-10'>
              <AnimatedButton
                {...buttonProps}
              />
           </div> 
          )}
        </div>
      </div>
    </div>
  );
};









// demo
{/* <ImageWithContent 
  image="/images/skincare.jpg"
  subtitle="Our Skincare"
  title="Personalised treatments that evolve with you & your skin"
  description="Everyone's skin is different..."
  buttonText="READ MORE"
  buttonBg="#D4A574"
  buttonTextColor="text-white"
  link="/skincare"
  reverseRow={false}
/> */}