// "use client"

// import React, { useState } from 'react';
// import AnimatedButton from '@/components/Button/Button';
// import ProductGridView from '@/components/ProductLayouts/ProductGridView';
// import ProductList from '@/components/ProductLayouts/ProductList';
// import ShopFilter from '@/components/ShopFilter/ShopFilter';
// import ActiveFilters from '@/components/ActiveFilters/ActiveFilters';
// import MobileFilterDrawer from '@/components/MobileFilterDrawer/MobileFilterDrawer';
// import { SlidersHorizontal } from 'lucide-react';
// import GridLayoutSelector from '@/components/GridLayoutSelector/GridLayoutSelector';
// import { GetProductsByTheme } from '../GetProductsByTheme/GetProductsByTheme';
// import { useTheme } from '@/provider/theme-provider';

// const ShopLayout = () => {
//   const [showGrid, setshowGrid] = useState(false);
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
//   const [gridColumns, setGridColumns] = useState(3);
//   const { themeId, theme } = useTheme();
//   const products = GetProductsByTheme(themeId) 
//   const [filters, setFilters] = useState({
//     priceRange: [0, 1000],
//     colors: [],
//     tags: [],
//     brands: []
//   });

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   const handleClearAll = () => {
//     const defaultFilters = {
//       priceRange: [0, 1000],
//       colors: [],
//       tags: [],
//       brands: []
//     };
//     setFilters(defaultFilters);
//   };

//   const handleRemoveFilter = (type, value) => {
//     if (type === 'price') {
//       setFilters({ ...filters, priceRange: [0, 1000] });
//     } else if (type === 'color') {
//       setFilters({ ...filters, colors: filters.colors.filter(c => c !== value) });
//     } else if (type === 'tag') {
//       setFilters({ ...filters, tags: filters.tags.filter(t => t !== value) });
//     } else if (type === 'brand') {
//       setFilters({ ...filters, brands: filters.brands.filter(b => b !== value) });
//     }
//   };

//   // Filter products based on active filters
//   const filteredProducts = products.filter(product => {
//     const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
//     const colorMatch = filters.colors.length === 0 || filters.colors.includes(product.color);
//     const tagMatch = filters.tags.length === 0 || filters.tags.includes(product.tag);
//     const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);

//     return priceMatch && colorMatch && tagMatch && brandMatch;
//   });

//   return (
//     <div>
    

//       <div className='flex flex-col md:flex-row gap-4 md:gap-6 px-4 sm:px-6 py-6 md:py-10'>
//         {/* Desktop Sidebar */}
//         <div className='hidden md:block w-full md:w-1/4 md:min-w-[200px]'>
//           <ShopFilter onFilterChange={handleFilterChange} activeFilters={filters} />
//         </div>

//         {/* Mobile Filter Drawer */}
//         <MobileFilterDrawer isOpen={isMobileFilterOpen} onClose={() => setIsMobileFilterOpen(false)}>
//           <ShopFilter
//             onFilterChange={handleFilterChange}
//             activeFilters={filters}
//             onClose={() => setIsMobileFilterOpen(false)}
//           />
//         </MobileFilterDrawer>

//         {/* Product Area */}
//         <div className='flex-1 w-full'>
//           {/* Mobile Filter Button */}
//           <button
//             onClick={() => setIsMobileFilterOpen(true)}
//             className="md:hidden mb-4 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
//           >
//             <SlidersHorizontal size={20} />
//             <span>Filters</span>
//           </button>

//           {/* Active Filters */}
//           <ActiveFilters
//             filters={filters}
//             onClearAll={handleClearAll}
//             onRemoveFilter={handleRemoveFilter}
//           />

//           {/* Controls - Toggle Grid/List and Grid Layout Selector */}
//           {filteredProducts.length > 0 && (
//             <div className="flex items-center justify-between mt-5 mb-5">
//               <AnimatedButton
//                 text={showGrid ? "Show List" : "Show Grid"}
//                 padding="px-6 sm:px-10"
//                 bgColor="bg-black"
//                 onClick={() => setshowGrid(!showGrid)}
//                 textColor="text-white"
//               />
              
//               {/* Only show grid layout selector when in grid view - HIDDEN ON MOBILE */}
//               {showGrid && (
//                 <div className="hidden md:block">
//                   <GridLayoutSelector
//                     gridColumns={gridColumns}
//                     onGridChange={setGridColumns}
//                   />
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Products */}
//           {filteredProducts.length > 0 ? (
//             showGrid ? (
//               <ProductGridView 
//                 products={filteredProducts} 
//                 gridColumns={gridColumns} 
//                 paginationType="pagination" 
//               />
//             ) : (
//               <ProductList products={filteredProducts} paginationType="pagination" />
//             )
//           ) : (
//             <div className="text-center py-10 sm:py-20 text-gray-500 px-4">
//               <p className="font-semibold mb-2">No products found.</p>
//               <button
//                 onClick={handleClearAll}
//                 className="text-red-600 underline hover:text-red-700"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ShopLayout;











"use client"
import React, { useState, useMemo } from 'react';
import AnimatedButton from '@/components/Button/Button';
import ProductGridView from '@/components/ProductLayouts/ProductGridView';
import ProductList from '@/components/ProductLayouts/ProductList';
import ShopFilter from '@/components/ShopFilter/ShopFilter';
import ActiveFilters from '@/components/ActiveFilters/ActiveFilters';
import MobileFilterDrawer from '@/components/MobileFilterDrawer/MobileFilterDrawer';
import { SlidersHorizontal } from 'lucide-react';
import GridLayoutSelector from '@/components/GridLayoutSelector/GridLayoutSelector';
import { GetProductsByTheme } from '../GetProductsByTheme/GetProductsByTheme';
import { useTheme } from '@/provider/theme-provider';

const ShopLayout = () => {
  const [showGrid, setshowGrid] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [gridColumns, setGridColumns] = useState(3);

  const { themeId, theme } = useTheme();
  const products = GetProductsByTheme(themeId);

  // Dynamically calculate min/max price from actual product data
  const minPrice = useMemo(() =>
    products.length > 0 ? Math.min(...products.map(p => p.price)) : 0,
    [products]
  );

  const maxPrice = useMemo(() =>
    products.length > 0 ? Math.max(...products.map(p => p.price)) : 10000,
    [products]
  );

  const [filters, setFilters] = useState({
    priceRange: [minPrice, maxPrice],
    colors: [],
    tags: [],
    brands: []
  });

  // Update filters when products/theme changes (themeId switch)
  React.useEffect(() => {
    setFilters({
      priceRange: [minPrice, maxPrice],
      colors: [],
      tags: [],
      brands: []
    });
  }, [themeId, minPrice, maxPrice]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearAll = () => {
    setFilters({
      priceRange: [minPrice, maxPrice],
      colors: [],
      tags: [],
      brands: []
    });
  };

  const handleRemoveFilter = (type, value) => {
    if (type === 'price') {
      setFilters({ ...filters, priceRange: [minPrice, maxPrice] });
    } else if (type === 'color') {
      setFilters({ ...filters, colors: filters.colors.filter(c => c !== value) });
    } else if (type === 'tag') {
      setFilters({ ...filters, tags: filters.tags.filter(t => t !== value) });
    } else if (type === 'brand') {
      setFilters({ ...filters, brands: filters.brands.filter(b => b !== value) });
    }
  };

  // Filter products based on active filters
  const filteredProducts = products.filter(product => {
    const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const colorMatch = filters.colors.length === 0 || filters.colors.includes(product.color);
    const tagMatch = filters.tags.length === 0 || filters.tags.includes(product.tag);
    const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
    return priceMatch && colorMatch && tagMatch && brandMatch;
  });

  return (
    <div className="flex gap-6 px-4 md:px-8 py-6">

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 shrink-0">
        <ShopFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      >
        <ShopFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onClose={() => setIsMobileFilterOpen(false)}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </MobileFilterDrawer>

      {/* Product Area */}
      <div className="flex-1">

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="md:hidden mb-4 w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        {/* Active Filters */}
        <ActiveFilters
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAll}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        {/* Controls - Toggle Grid/List and Grid Layout Selector */}
        {filteredProducts.length > 0 && (
          <div className="flex items-center justify-between mb-4">
            <AnimatedButton
              onClick={() => setshowGrid(!showGrid)}
              textColor="text-white"
            />

            {/* Only show grid layout selector when in grid view - HIDDEN ON MOBILE */}
            {showGrid && (
              <div className="hidden md:block">
                <GridLayoutSelector
                  gridColumns={gridColumns}
                  setGridColumns={setGridColumns}
                />
              </div>
            )}
          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 ? (
          showGrid ? (
            <ProductGridView products={filteredProducts} gridColumns={gridColumns} />
          ) : (
            <ProductList products={filteredProducts} />
          )
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-gray-500 text-lg mb-4">No products found.</p>
            <button
              onClick={handleClearAll}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ShopLayout;