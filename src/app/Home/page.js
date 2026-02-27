// "use client"
// import HeroCarousel from "@/components/BootStrap/HeroCarousel/HeroCarousel.jsx";
// import { heroSlides } from "@/components/BootStrap/HeroCarousel/HeroData.js";
// import FollowsUsSection from "@/components/FollowUsSection/FollowUsSection";
// import LiveTimer from "@/components/LiveTimer/LiveTimer";
// import Marquee from "@/components/Marquee/Marquee";
// import { brands } from "@/components/Marquee/MarqueeData";
// import NewsletterEmailSection2 from "@/components/NewsLetterEmailSection/NewsLetterEmailSection2";
// import ProductCarousel from "@/components/ProductCardCarousel/ProductCarousel";
// import ProductCardRowsForm from "@/components/ProductCardRowsForm/ProductCardRowsForm";
// import ProductTabs from "@/components/ProductTabs/ProductTabs";
// import { products } from '@/components/ProductsCard/ProductsData.js'
// import VerticalProductCard from "@/components/VerticalProductCard/VerticalProductCard";
// import WhatsNewSection from "@/components/WhatsNewSection/WhatsNewSection";
// import { Separator } from "@/components/ui/separator";




// export default function Home() {
//   return (
//     <div className="px-4">

//       <HeroCarousel
//         slides={heroSlides}
//         autoPlay={false}
//         interval={5000}
//         showIndicators={true}
//       />
//       <div>
//         <Marquee brands={brands} text="TRUSTED BRAND" speed={70} />
//       </div>

    


// {/* vertical cards start */}

// <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-40  mt-20">
//   <div className="w-[90%] md:w-[45%] lg:w-[45%]">
//     <VerticalProductCard
//       image="ThemePictures/watch3.jpeg"
//       title="Ladies Watches"
//     />
//   </div>

//   <div className="w-[90%] md:w-[45%] lg:w-[30%]">
//     <VerticalProductCard
//       image="ThemePictures/watch4.jpeg"
//       title="Our Collection"
//     />
//   </div>
// </div>


// {/* reversed one */}
// <div className="flex flex-col  md:flex-row-reverse items-center justify-center  gap-10 md:gap-16 lg:gap-40 mt-20 mb-40">
//   <div className="w-[90%] md:w-[45%] lg:w-[45%]">
//     <VerticalProductCard
//       image="ThemePictures/watch3.jpeg"
//       title="Ladies Watches"
//     />
//   </div>

//   <div className="w-[90%] md:w-[45%] lg:w-[30%]">
//     <VerticalProductCard
//       image="ThemePictures/watch4.jpeg"
//       title="Our Collection"
//     />
//   </div>
// </div>
// {/* vertical card end */}

//       <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
//         <div className="w-full lg:w-[35%] md:w-[45%]">
//           <LiveTimer />
//         </div>

//         <div className="w-full lg:w-[65%] md:w-[55%]">
//           <ProductCarousel
//             products={products}
//             slidesToShow={{
//               mobile: 1,
//               tablet: 1,
//               desktop: 3
//             }}
//           />
//         </div>
//       </div>
//       <div>


//         <div className="mt-20">
//           <WhatsNewSection />
//         </div>

//       </div>

//       <div className="container mx-auto px-4 py-10">
//         <ProductTabs products={products} />
//       </div>


//       <ProductCardRowsForm products={products} paginationType="showMore"/>

//       <FollowsUsSection />


//       <div className="py-20">
//         <NewsletterEmailSection2 />
//       </div>



//       <Separator />





//     </div>

//   )
// }
























"use client";

import { HomeSectionMap } from "@/lib/MapsSection/HomeSectionMap";
import { useTheme } from "@/provider/theme-provider";



export default function HomePage() {
  const {theme, themeId} = useTheme();
  const homeSections = theme.home || [];

  return (
    <>
      {homeSections.map((item, index) => {
        const VariantMap = HomeSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}
