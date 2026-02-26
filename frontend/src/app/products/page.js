// "use client"

// import AnimatedButton from '@/components/Button/Button';
// import CarouselBanner from '@/components/CrouselDynamicBanner/CarouselBanner';
// import NewsletterEmailSection2 from '@/components/EmailSubscription/NewsLetterEmailSection2';
// import ProductGrid from '@/components/ProductLayouts/ProductGridView';
// import ProductList from '@/components/ProductLayouts/ProductList';
// import { products } from '@/components/ProductsCard/ProductsData';
// import React, { useState } from 'react';


// const Products = () => {

//   const handleCategoryChange = (category) => {
//     console.log('Selected category:', category);
//   };

//   return (

    

//     <div>
//       <CarouselBanner
//         title="Products"
//         backgroundImage="/ThemePictures/shopcarousel.png"
//         onCategoryChange={handleCategoryChange}
//         showCategory={true} 
//       />

      

//       <div className='px-3 py-10'>
//         <ProductGrid products={products} paginationType="pagination" />
//       </div>

//       <div className='py-20'>
//         <NewsletterEmailSection2 />
//       </div>

//     </div>



//   );
// };

// export default Products;












"use client";

import { ProductsSectionMap } from "@/lib/MapsSection/ProductsSectionMap";
import { useTheme } from "@/provider/theme-provider";



export default function ProductsPage() {
  const {theme, themeId} = useTheme();
  const productsSections = theme.products || [];

  return (
    <>
      {productsSections.map((item, index) => {
        const VariantMap = ProductsSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}