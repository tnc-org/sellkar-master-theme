"use client";

import { useState } from "react";

export default function EmailSubscription1({ title, subtitle, image, buttonText }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="w-full py-10 md:py-12 px-4">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Side */}
          <div className="space-y-6 w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-normal">
              {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                required
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-semibold tracking-wider hover:opacity-70 transition-opacity"
              >
                {buttonText}
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              // src="/ThemePictures/sofa1.png"
              src={image}
              alt="Modern sofa"
              className="w-full max-w-3xl object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
