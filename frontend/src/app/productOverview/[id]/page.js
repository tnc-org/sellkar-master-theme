// import { GetProductsByTheme } from "@/components/GetProductsByTheme/GetProductsByTheme";
// import SingleProductLayout from "@/components/SingleProduct/SingleProductLayout";
// // import { useTheme } from "@/provider/theme-provider";

// export default async function SingleProductPage({ params }) {
//   // Await params in Next.js 15+
//   const resolvedParams = await params;
//   const productId = parseInt(resolvedParams?.id, 10);
//   const themeId = parseInt(resolvedParams?.themeId, 10);
 
  
//     const products = GetProductsByTheme(themeId)

//   if (isNaN(productId)) {
//     return <div className="min-h-screen flex items-center justify-center">Invalid product</div>;
//   }

//   const product = products.find((item) => item.id === productId);

//   if (!product) {
//     return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
//   }

//   return (
//     <div className="min-h-screen mx-auto">
//       <SingleProductLayout product={product} />
//     </div>
//   );
// }











"use client"
import { GetProductsByTheme } from "@/components/GetProductsByTheme/GetProductsByTheme";
import SingleProductLayout from "@/components/SingleProduct/SingleProductLayout";
import { useTheme } from "@/provider/theme-provider";
import { use } from "react";

export default function SingleProductPage({ params }) {
  const { themeId } = useTheme();
  
  // Unwrap the params Promise
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams?.id, 10);
  
  const products = GetProductsByTheme(themeId);

  if (isNaN(productId)) {
    return <div className="min-h-screen flex items-center justify-center">Invalid product</div>;
  }

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen mx-auto">
      <SingleProductLayout product={product} />
    </div>
  );
}