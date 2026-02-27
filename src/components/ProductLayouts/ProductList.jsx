"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { ShoppingBag, Search, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";
import ProductPagination from "../Shadcn/Pagination/ProductPagination";
import AnimatedButton from "../Button/Button";
import { addToWishlist } from "@/redux/wishlistSlice";

export default function ProductList({ products, paginationType = "pagination" }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [visibleCount, setVisibleCount] = useState(paginationType === "showMore" ? 8 : 0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const showMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = paginationType === "pagination"
    ? products.slice(startIndex, endIndex)
    : products.slice(0, visibleCount);

    const handleAddToWishlist = (product)=>{
      dispatch(addToWishlist(product))
    }

  return (
    <>
      <div className="w-full">
        {/* LIST VIEW - One product per row */}
        <div className="flex flex-col gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row gap-6 group bg-white border-b border-gray-200 pb-6">
              {/* Product Image */}
              <div className="w-full md:w-72 h-72 flex-shrink-0 overflow-hidden relative bg-gray-100">
                {product.comparePrice && (
                  <div className="absolute top-0 left-0 z-10 overflow-hidden w-24 h-24">
                    <div className="bg-red-500 text-white text-xs font-bold px-8 py-1 transform -rotate-45 -translate-x-6 translate-y-4 shadow-md text-center">
                      Sale
                    </div>
                  </div>
                )}
                <img
                  onClick={() => router.push(`/productOverview/${product.id}`)}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-start flex-1">
                <h3
                  onClick={() => router.push(`/productOverview/${product.id}`)}
                  className="text-2xl font-normal text-black mb-2 cursor-pointer hover:text-gray-600 transition-colors"
                >
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-500 text-xl font-semibold">${product.price}</span>
                  {product.comparePrice && (
                    <span className="text-gray-400 line-through text-lg">${product.comparePrice}</span>
                  )}
                </div>

                {/* Product Description (if available) */}
                {product.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsQuickViewOpen(true);
                    }}
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Quick view"
                  >
                    <Search className="w-5 h-5" />
                  </button>

                  <button
                  onClick={()=> handleAddToWishlist(product)}
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {paginationType === "showMore" && visibleCount < products.length && (
          <div className="flex justify-center mt-8">
            <AnimatedButton
              onClick={showMore}
              text="SHOW MORE PRODUCTS"
              border="border border-black"
              padding="px-6"
              rounded="rounded-md"
              hoverBgColor="bg-black"
              hoverTextColor="text-white"
            />
          </div>
        )}

        {/* Pagination */}
        {paginationType === "pagination" && (
          <div className="mt-8">
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

      <QuickViewProductOverviewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}