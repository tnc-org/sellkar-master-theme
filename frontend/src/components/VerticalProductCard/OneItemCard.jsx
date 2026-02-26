import React, { useState, useEffect } from 'react';
import AnimatedButton from '../Button/Button';

// Individual OneItemCard Component
export const OneItemCard = ({
  image,
  subtitle,        
  title,
  description,     
  currentPrice,
  originalPrice,
  countdown,
  buttonProps,
  bgColor,
  flexDirection
}) => {
  const [timeLeft, setTimeLeft] = useState(countdown);

  useEffect(() => {
    if (!countdown) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;

        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const isReversed = flexDirection === 'row-reverse';

  return (
    <section className={`${bgColor || 'bg-[#F5F3EE]'}`}>
      <div
        className={`flex flex-col ${
          isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center w-full px-4 py-10 gap-10`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-[520px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex items-center flex-col gap-4 text-center">
          
          {/* Subtitle */}
          {subtitle && (
            <span className="text-sm font-medium text-gray-500 uppercase">
              {subtitle}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-semibold text-gray-900">
            {title}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold text-[#FDB713]">
              ${currentPrice}
            </span>
            {originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-400 max-w-md">
              {description}
            </p>
          )}

          {/* Countdown */}
          {countdown && timeLeft && (
            <div className="flex gap-4 mt-4">
              <TimeUnit value={timeLeft.days} label="DAYS" />
              <TimeUnit value={timeLeft.hours} label="HOURS" />
              <TimeUnit value={timeLeft.mins} label="MINS" />
              <TimeUnit value={timeLeft.secs} label="SECS" />
            </div>
          )}

          {/* Button */}
          {buttonProps && (
            <div className="mt-4">
              <AnimatedButton {...buttonProps} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Time unit
const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-[#FDB713] flex items-center justify-center">
      <span className="text-lg font-semibold text-white">{value}</span>
    </div>
    <span className="text-xs font-semibold mt-2 text-gray-700">{label}</span>
  </div>
);
