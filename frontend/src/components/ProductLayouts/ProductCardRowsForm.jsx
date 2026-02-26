"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { addToWishlist } from "@/redux/wishlistSlice";
import { ShoppingBag, Search, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import ProductPagination from "../Shadcn/Pagination/ProductPagination";
import AnimatedButton from "../Button/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Shadcn/Tooltip/tooltip";
import { QuickViewProductOverviewModal } from "../QuickViewProductOverviewModal/QuickViewProductOverviewModal";

export default function ProductCardRowsForm({ 
  products, 
  paginationType = "pagination", // "pagination" | "showMore"
  showProductTabs = false,
  productTabsData = [],
  padding,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState(productTabsData[0]?.key || "");
  
  const [visibleCount, setVisibleCount] = useState(paginationType === "showMore" ? 8 : 0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 2 rows × 4 products per row

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const showMore = () => {
    setVisibleCount(prev => prev + itemsPerPage);
  };

  const showLess = () => {
    setVisibleCount(itemsPerPage);
  };

  // Filter products based on active tab
  const getFilteredProducts = () => {
    if (!showProductTabs || productTabsData.length === 0) {
      return products;
    }
    
    const activeTabData = productTabsData.find(tab => tab.key === activeTab);
    if (activeTabData && activeTabData.filter) {
      return products.filter(activeTabData.filter);
    }
    
    return products;
  };

  const filteredProducts = getFilteredProducts();

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = paginationType === "pagination"
    ? filteredProducts.slice(startIndex, endIndex)
    : filteredProducts.slice(0, visibleCount);

  // Reset pagination when tab changes
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentPage(1);
    setVisibleCount(itemsPerPage);
  };

  return (
    <>
      <div className={`w-full px-4 ${padding || "py-5"}`}>
        {/* Product Tabs */}
        {showProductTabs && productTabsData.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-col space-y-3 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
              {productTabsData.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`
                    relative group 
                    transition-all
                    text-xs sm:text-sm md:text-base 
                    font-medium
                    break-words whitespace-normal 
                    w-full sm:w-auto
                    bg-gray-200 sm:bg-transparent
                    px-5 py-3
                    
                    ${activeTab === tab.key
                      ? "bg-gray-300 text-black font-semibold"
                      : "text-gray-700"
                    }
                  `}
                >
                  {tab.label}
                  <span
                    className={`
                      hidden sm:block
                      absolute bottom-0 left-1/2 h-0.5 bg-black 
                      transition-all duration-300 transform -translate-x-1/2
                      ${activeTab === tab.key ? "w-full" : "w-0"}
                      group-hover:w-full
                    `}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* GRID VIEW - 4 products per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="cursor-pointer relative overflow-hidden p-1 flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-square overflow-hidden relative">
                {product.comparePrice && (
                  <div className="absolute top-0 left-0 z-10 overflow-hidden w-20 h-20">
                    <div className="bg-red-500 text-white text-xs font-bold px-6 py-1 transform -rotate-45 -translate-x-5 translate-y-3 shadow-md text-center">
                      Sale
                    </div>
                  </div>
                )}
                
                <img
                  onClick={() => router.push(`/productOverview/${product.id}`)}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />

                <TooltipProvider>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out flex gap-3">
                    {/* Quick View Button */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsQuickViewOpen(true);
                          }}
                          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                        >
                          <Search className="w-5 h-5" />
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
                          onClick={() => handleAddToCart(product)}
                          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                        >
                          <ShoppingBag className="w-6 h-6 transition-colors duration-300" />
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
                          onClick={() => handleAddToWishlist(product)}
                          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:bg-black hover:text-white hover:shadow-xl active:scale-95"
                        >
                          <Heart className="w-6 h-6 transition-colors duration-300" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to Wishlist</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

              <h3 
                onClick={() => router.push(`/productOverview/${product.id}`)}
                className="mt-4 text-sm sm:text-base font-semibold text-black truncate w-full hover:text-gray-600 transition-colors"
              >
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-2 justify-center">
                <span className="text-red-500 font-bold text-sm sm:text-base">
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

        {/* Show More/Show Less Buttons */}
        {paginationType === "showMore" && (
          <div className="flex justify-center gap-4 mt-8">
            {visibleCount < filteredProducts.length && (
              <AnimatedButton
                onClick={showMore}
                text="SHOW MORE PRODUCTS"
                border="border border-black"
                padding="px-6"
                rounded="rounded-md"
                hoverBgColor="bg-black"
                hoverTextColor="text-white"
              />
            )}
            
            {visibleCount > itemsPerPage && (
              <AnimatedButton
                onClick={showLess}
                text="SHOW LESS"
                border="border border-black"
                padding="px-6"
                rounded="rounded-md"
                hoverBgColor="bg-black"
                hoverTextColor="text-white"
              />
            )}
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

      {/* Quick View Modal */}
      <QuickViewProductOverviewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}