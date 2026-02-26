"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { CartIcon, HeartIcon, SearchIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";
import { Tooltip, TooltipContent, TooltipTrigger } from "../Shadcn/Tooltip/tooltip";
import { addToWishlist } from "@/redux/wishlistSlice";


export default function ProductCarousel({ products = [], title = "", padding="" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(3); // Start with desktop value
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Set isClient flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle responsive products per slide
  useEffect(() => {
    if (!isClient) return;
    
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerSlide(3);
      } else if (window.innerWidth >= 768) {
        setProductsPerSlide(2);
      } else {
        setProductsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  const totalSlides = Math.ceil(products.length / productsPerSlide);

  const getProductsForSlide = (slideIndex) => {
    const start = slideIndex * productsPerSlide;
    const end = start + productsPerSlide;
    return products.slice(start, end);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className={`w-full ${padding}`}>
        <h2 className="text-3xl font-semibold text-center mb-12">{title}</h2>

        <div className="relative px-4 md:px-8">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full flex flex-wrap justify-center gap-6 px-12"
                >
                  {getProductsForSlide(slideIndex).map((product) => (
                    <div
                      key={product.id}
                      className="relative overflow-hidden flex flex-col items-center text-center group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      {product.comparePrice && (
                        <div className="absolute top-3 -right-7 z-10">
                          <div className="bg-red-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 shadow-md">
                            Sale
                          </div>
                        </div>
                      )}

                      <div className="w-full aspect-square overflow-hidden relative bg-gray-50">
                        <img
                          onClick={() => router.push(`/productOverview/${product.id}`)}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center cursor-pointer"
                        />

                        <div className="flex gap-4 absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <Tooltip>
                            <TooltipTrigger>
                              <div
                                onClick={() => {
                                  setSelectedProduct(product);
                                  setIsQuickViewOpen(true);
                                }}
                                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                              >
                                <SearchIcon />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Quick View</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger>
                              <div
                                onClick={() => handleAddToCart(product)}
                                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                              >
                                <CartIcon className="w-6 h-6 transition-colors duration-300" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Add to Cart</TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger>
                              <div
                                onClick={() => handleAddToWishlist(product)}
                                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                              >
                                <HeartIcon className="w-6 h-6 transition-colors duration-300" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>Add to Wishlist</TooltipContent>
                          </Tooltip>
                        </div>
                      </div>

                      <h3 className="mt-4 text-sm sm:text-base font-semibold text-black truncate w-full">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 justify-center">
                        <span className="text-red-500 text-sm sm:text-base">
                          ${product.price}
                        </span>
                        {product.comparePrice && (
                          <span className="text-gray-400 line-through text-sm">
                            ${product.comparePrice}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-black w-2"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <QuickViewProductOverviewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}