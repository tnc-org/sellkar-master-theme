

"use client";

import { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Description" },
    { key: "shipping", label: "Shipping & Return" },
    { key: "reviews", label: "Customer reviews" },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                relative pb-4 text-base font-normal
                transition-all duration-300
                ${
                  activeTab === tab.key
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }
              `}
            >
              {tab.label}
              <span
                className={`
                  absolute bottom-0 left-0 h-0.5 bg-black 
                  transition-all duration-300
                  ${activeTab === tab.key ? "w-full" : "w-0"}
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-10">
        {activeTab === "description" && (
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm">
                Dignissim lacus, venenatis sed est sit ultrices. Adipiscing sapien eget elit amet elit
                ornare dis lectus sit. Magna tellus, consequat faucibus duis tristique odio ☺. At
                lobortis eget lacus, porta faucibus pellentesque interdum imperdiet. Risus cursus purus
                lectus pharetra Adipiscing tempus aliquam dolor.
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-4">Outstanding Features</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lorem ipsum dolor sit. Adipiscing tempus aliquam dolor dolor sit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lorem ipsum dolor sit. Adipiscing tempus aliquam dolor dolor sit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lorem ipsum dolor sit. Adipiscing tempus aliquam dolor dolor sit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Lorem ipsum dolor sit. Adipiscing tempus aliquam dolor dolor sit</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                Elit vestibulum odio sit massa vitae consectetur ☺. In sit quis aliquam vel. Dignissim
                lacus, venenatis sed est sit ultrices. Adipiscing sapien eget elit amet elit ornare dis lectus
                sit. Magna tellus, consequat faucibus duis tristique odio. Adipiscing tempus aliquam dolor
                dolor sit. Eleifend aliquam, tellus etiam consectetur sit auctor id adipiscing vehicula vitae.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative aspect-[4/3] bg-gray-100">
              <img
                src="/ThemePictures/watch3.jpeg"
                alt="Product lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="max-w-3xl space-y-6 text-sm text-gray-600">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">Shipping Information</h3>
              <div className="space-y-3">
                <p>
                  <strong className="text-black">Standard Delivery:</strong> 7-14 business days
                </p>
                <p>
                  <strong className="text-black">Express Shipping:</strong> 3-5 business days (additional charge applies)
                </p>
                <p>
                  <strong className="text-black">Free Shipping:</strong> Available on orders over $100.00
                </p>
                <p>
                  We ship to most countries worldwide. Shipping costs are calculated at checkout based on your location and order weight.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">Returns Policy</h3>
              <div className="space-y-3">
                <p>
                  We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within <strong className="text-black">30 days</strong> of delivery for a full refund.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Items must be in original condition with tags attached</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Original packaging should be included when possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Return shipping is free for defective or damaged items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Refunds will be processed within 5-7 business days of receiving your return</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="max-w-3xl">
            <p className="text-gray-600 text-sm">
              No customer reviews yet. Be the first to review this product!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}