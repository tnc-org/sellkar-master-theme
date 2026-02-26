"use client"

import React, { useState } from 'react';
import AnimatedButton from '../Button/Button';


const EmailSubscription4 = ({title, subtitle, buttonText}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      
    }
  };

  return (
    <div className="w-full my-20 bg-white ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font mb-4">{title}</h2>
        <p className="text-black-600  mb-8">
          {subtitle}
        </p>
        
        <div className="relative">
          <div className="flex items-center border-b border-black">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="flex-1 py-3 px-0 text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
            <AnimatedButton
              text={buttonText}
              bgColor="transparent"
              textColor="black"
              height="h-auto"
              padding="py-2"
              onlyBottomBorder={false}
              onClick={handleSubmit}
              className="text-sm font-medium"
              border="border-0"
              hoverBgColor="black"
              hoverTextColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription4;