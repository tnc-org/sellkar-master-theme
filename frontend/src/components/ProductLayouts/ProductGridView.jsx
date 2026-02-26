"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductPagination from "../Shadcn/Pagination/ProductPagination";

export default function ProductGridView({ products, gridColumns = 3, paginationType = "pagination" }) {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Show 8 products (2 rows of 4 in default 3-col layout)

  // Slice products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  // Dynamic grid classes based on gridColumns prop
  const getGridClass = () => {
    switch(gridColumns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
      case 5: return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <>
      <div className="w-full py-10">
        <div className={`grid ${getGridClass()} gap-6`}>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination - ALWAYS SHOW */}
        <div className="mt-8">
          <ProductPagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
}