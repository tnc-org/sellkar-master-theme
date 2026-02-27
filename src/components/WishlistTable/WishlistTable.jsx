"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/redux/wishlistSlice";
import { addToCart } from "@/redux/cartSlice";
import AnimatedButton from "../Button/Button";

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="bg-white min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto ">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-10 font-bold text-center text-black">
          Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View - Hidden on Mobile */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="grid  grid-cols-12 gap-2 lg:gap-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
                  <div className="col-span-4 lg:col-span-5">PRODUCT</div>
                  <div className="col-span-2">PRICE</div>
                  <div className="col-span-2">STOCK STATUS</div>
                  <div className="col-span-4 lg:col-span-3"></div>
                </div>
              </div>

              {/* Wishlist Items */}
              <div className="space-y-6">
                {wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-2 lg:gap-4 items-center py-6 border-b border-gray-100  transition-colors"
                  >
                    {/* Product Image and Name */}
                    <div className="col-span-4 lg:col-span-5 flex items-center gap-2 lg:gap-4">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-sm lg:text-base font-medium text-black line-clamp-2">
                        {item.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="col-span-2">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
                        <span className="text-red-600 font-semibold text-sm lg:text-base">
                          ${item.price}
                        </span>
                        {item.comparePrice && (
                          <span className="text-gray-400 line-through text-xs lg:text-sm">
                            ${item.comparePrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Stock Status */}
                    <div className="col-span-2">
                      <span className="text-gray-600 text-xs lg:text-sm">In stock</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="col-span-4 lg:col-span-3 flex flex-col lg:flex-row gap-2 justify-end">
                      <AnimatedButton
                        text="Add To Cart"
                        onClick={() => handleAddToCart(item)}
                        bgColor="bg-white"
                        textColor="text-black"
                        padding="px-3 py-2 lg:px-6 whitespace-nowrap text-xs lg:text-sm"
                        rounded="rounded-lg"
                        border="border border-black border-2"
                        hoverBgColor="bg-black"
                        hoverTextColor="text-white"
                      />
                      <AnimatedButton
                        text="Remove"
                        onClick={() => handleRemove(item.id)}
                        bgColor="bg-black"
                        textColor="text-white"
                        padding="px-3 py-2 lg:px-6 whitespace-nowrap text-xs lg:text-sm"
                        rounded="rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile List View - Hidden on Desktop */}
            <div className="md:hidden space-y-4">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  {/* Product Info */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-black mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-red-600 font-bold text-lg">
                          ${item.price}
                        </span>
                        {item.comparePrice && (
                          <span className="text-gray-400 line-through text-sm">
                            ${item.comparePrice}
                          </span>
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">In stock</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <AnimatedButton
                        text="Add To Cart"
                        onClick={() => handleAddToCart(item)}
                        bgColor="bg-white"
                        textColor="text-black"
                        padding="px-3 py-2 whitespace-nowrap text-sm"
                        rounded="rounded-lg"
                        border="border border-black border-2"
                        hoverBgColor="bg-black"
                        hoverTextColor="text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <AnimatedButton
                        text="Remove"
                        onClick={() => handleRemove(item.id)}
                        bgColor="bg-black"
                        textColor="text-white"
                        padding="px-3 py-2 whitespace-nowrap text-sm"
                        rounded="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}