import React from 'react';
import { Package } from 'lucide-react';
import AnimatedButton from '../Button/Button';

export default function EmptyCart() {
    const handleContinueShopping = () => {
        window.location.href = '/shop';
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
            {/* Icon */}
            <div className="mb-6">
                <Package className="w-20 h-20 text-gray-300" strokeWidth={1.5} />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Your cart is empty
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 max-w-sm">
                You may check out all the available products and buy some in the shop.
            </p>

            {/* Button */}
            <AnimatedButton
                text='CONTINUE SHOPPING'
                padding='px-12'
                bgColor='bg-black'
                textColor='text-white'
                onClick={handleContinueShopping}
            />
           
        </div>
    );
}


