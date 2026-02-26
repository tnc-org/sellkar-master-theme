
"use client"

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import AnimatedButton from '../Button/Button';



// Newsletter Component
const EmailSubscription3 = ({title, subtitle, image, buttonText}) => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert(`Subscribed with email: ${email}`);
            setEmail("");
        }
    };

    return (
        <div
            className="relative  w-full  sm:h-[420px] md:h-[400px] bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage: `url(${image})`
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                {/* Left Side - Icon and Text */}
                <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 border-4 border-white rounded-lg flex items-center justify-center">
                            <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                        </div>
                    </div>

                    {/* Divider - Hidden on mobile */}
                    <div className="hidden lg:block w-px h-24 bg-white/50"></div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-wide">
                            {title}
                        </h2>
                        <p className="text-white/90 text-base lg:text-lg">
                            {/* It only takes a second to be the first to findout<br className="hidden lg:block" />
                            about our latest news */}
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Right Side - Email Input and Button */}
                <div className="w-full lg:w-auto lg:ml-auto">
                    <div className="flex flex-col sm:flex-row w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 lg:w-[400px] px-5 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/50 rounded-none"
                        />
                        <AnimatedButton
                            text={buttonText}
                            bgColor="bg-black"
                            textColor="text-white"
                            height="h-12"
                            padding="px-8"
                            onClick={handleSubscribe}

                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscription3;