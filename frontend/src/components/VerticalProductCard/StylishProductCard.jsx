"use client"
import React from 'react';
import AnimatedButton from '../Button/Button';
import { useRouter } from 'next/navigation';

const StylishProductCard = ({
    brandName,
    title,
    description,
    buttonProps,
    categories,
    link,
}) => {
    const router = useRouter()
    return (
        <div className="bg-gray-50 min-h-screen flex  items-center">
            <div className=" mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-1 space-y-6">
                        <h1 className="text-5xl font-light tracking-wide">
                            {brandName}
                        </h1>

                        <h2 className="text-3xl font-light leading-tight tracking-wide">
                            {title}
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {description}
                        </p>

                     <div>
                        <AnimatedButton 
                        onClick={()=> router.push(link)}
                        {...buttonProps}
                        />
                     </div>
                    </div>

                    {/* Right Images */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="relative aspect-[4/4] overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={category.image}
                                    alt={category.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                        <span className="text-2xl font-light tracking-wide">
                                            {category.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StylishProductCard;
