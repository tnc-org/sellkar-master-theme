import React from 'react';
import { Plane, DollarSign, Lock, Truck, Shield, Headphones } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="mb-4 flex-shrink-0">
        <Icon className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-gray-800" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-sm md:text-base lg:text-lg font-bold mb-2 md:mb-3 uppercase tracking-wide">
        {title}
      </h3>
      
      <p className="text-xs md:text-sm leading-relaxed text-gray-600 max-w-xs">
        {description}
      </p>
    </div>
  );
};

export const Features = ({ features = [] }) => {
  return (
    <div className="w-full bg-white py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 ${features.length > 3 ? "lg:grid-cols-4" : "" } gap-6 md:gap-8 lg:gap-10`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

