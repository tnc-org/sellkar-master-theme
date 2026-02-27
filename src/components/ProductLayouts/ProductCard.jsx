"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { addToWishlist } from "@/redux/wishlistSlice"; // Add this import
import { CartIcon, HeartIcon, SearchIcon } from "@/lib/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Shadcn/Tooltip/tooltip";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // Add this handler
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <>
      <div className="cursor-pointer relative overflow-hidden p-1 flex flex-col items-center text-center group">
        <div className="w-full aspect-square overflow-hidden relative">
          <img
            onClick={() => router.push(`/productOverview/${product.id}`)}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />

          <TooltipProvider>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out flex gap-3">
              {/* Quick View Button - Opens Modal on Same Page */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => setIsQuickViewOpen(true)}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                  >
                    <SearchIcon />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Quick View</p>
                </TooltipContent>
              </Tooltip>

              {/* Add to Cart Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleAddToCart}
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                  >
                    <CartIcon className="w-6 h-6 transition-colors duration-300" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
              
              {/* Add to Wishlist Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleAddToWishlist} // Connect the handler here
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                  >
                    <HeartIcon className="w-6 h-6 transition-colors duration-300" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Wishlist</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        <h3 className="mt-4 text-sm sm:text-base font-semibold text-black truncate">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2 justify-center">
          <span className="text-red-500 font-bold text-sm sm:text-base">${product.price}</span>
          {product.comparePrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.comparePrice}.00
            </span>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewProductOverviewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}