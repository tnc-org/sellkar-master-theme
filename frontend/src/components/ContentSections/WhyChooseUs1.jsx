import React from 'react';
import { Award, Percent, User, Truck, Star } from 'lucide-react';

export const WhyChooseUs1 = ({ title, subtitle, image }) => {
  const features = [
    {
      icon: Award,
      title: "100% Authentic Products",
      description: "We only offer guaranteed genuine cosmetics from verified distributors."
    },
    {
      icon: Percent,
      title: "Weekly Special Offers",
      description: "Enjoy exclusive discounts and gifts updated every week."
    },
    {
      icon: User,
      title: "Personalized Skincare Advice",
      description: "Get expert recommendations tailored to your skin type and concerns."
    },
    {
      icon: Truck,
      title: "Fast Nationwide Delivery",
      description: "Quick and reliable shipping to your doorstep, no matter where you are."
    },
    {
      icon: Star,
      title: "Wide Range of Trusted Brands",
      description: "From global favorites to niche gems — all in one place for your skincare needs."
    }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative  overflow-hidden shadow-xl">
              <img 
                src={image} 
                alt={title}
                className="w-full h-auto object-cover duration-500 transform-transition ease-out cursor-pointer hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

