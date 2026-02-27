"use client"

import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import AnimatedButton from '../Button/Button';

const EmailSubscription2 = ({
  title = "Never miss our updates about new arrivals and special offers",
  subtitle = "Get the latest news & updates",
  buttonText = "SUBSCRIBE",
  placeholder = "Enter your email...",
  
}) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      if (onSubscribe) {
        onSubscribe(email);
      } else {
        alert(`Subscribed with email: ${email}`);
      }
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-4 leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base mb-8">
          {subtitle}
        </p>

        {/* Email Input and Subscribe Button */}
        <div className="max-w-xl mx-auto space-y-4">
          <input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 text-gray-800 placeholder-gray-400 text-sm"
          />
 

          <AnimatedButton 
          text={buttonText}
          padding='px-15'
          bgColor='bg-black'
          onClick={handleSubscribe}
          textColor='text-white'
          className='w-full'
          rounded='rounded-md'
          />
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default EmailSubscription2;