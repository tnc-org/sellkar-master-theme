import React from 'react';
import { Truck, CreditCard, RotateCcw } from 'lucide-react';

export default function ShippingFeatures() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'You will love at great low prices'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Pay with Multiple Credit Cards'
    },
    {
      icon: RotateCcw,
      title: '14 Day Returns',
      description: 'Within 30 days for an exchange.'
    }
  ];

  return (
    <div className="w-full bg-white py-15 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}