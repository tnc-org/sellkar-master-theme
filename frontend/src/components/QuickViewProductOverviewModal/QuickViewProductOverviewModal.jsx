"use client";

import { useState, useEffect } from "react";
import ProductInfo from "../SingleProduct/ProductInfo";
import TermsCheckbox from "../TermsCheckbox/TermsCheckbox";

export function QuickViewProductOverviewModal({ product, isOpen, onClose }) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isClient, setIsClient] = useState(false);

  // ✅ Fix hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e) => {
    if (!isClient) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (!isOpen || !isClient) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl w-[75%] h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-black hover:text-white transition"
        >
          ✕
        </button>

        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12">

            {/* IMAGE WITH ZOOM */}
            <div
              className="w-full aspect-square overflow-hidden rounded-lg border bg-white cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowZoom(true)}
              onMouseLeave={() => setShowZoom(false)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: showZoom ? "scale(2.2)" : "scale(1)",
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />
            </div>

            {/* PRODUCT INFO */}
            <div className="flex flex-col">
              <ProductInfo product={product} agreedToTerms={agreedToTerms} />

              <div className="mt-6 pt-4 border-t">
                <TermsCheckbox
                  agreed={agreedToTerms}
                  onAgreeChange={setAgreedToTerms}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
