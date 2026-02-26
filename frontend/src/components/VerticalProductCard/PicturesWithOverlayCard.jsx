// FragranceHighlights.jsx
"use client";

import { useRouter } from "next/navigation";
import AnimatedButton from "../Button/Button";

export default function PicturesWithOverlayCard({
    leftImage,
    rightImage,
    title,
    description,
    buttonText,
    buttonProps = {},
    link,
}) {

    const router = useRouter()
    return (
        
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
            {/* Image Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-0">
                {/* Left Image */}
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={leftImage}
                        alt="Fragrance left"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Image */}
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={rightImage}
                        alt="Fragrance right"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                <div className="max-w-2xl flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {title}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    <AnimatedButton
                    onClick={()=> router.push(link)}
                        text={buttonText}
                        onlyBottomBorder
                        textColor="text-white"
                        {...buttonProps}
                    />
                </div>
            </div>
        </div>
    );
}

// // Example data structure (FragranceHighlightsData.js)
// export const FragranceHighlightsData = {
//     leftImage: "/ThemeBeauty/fragrance-left.jpg",
//     rightImage: "/ThemeBeauty/fragrance-right.jpg",
//     title: "Fragrance Highlights",
//     description: "Discover our signature scents curated to captivate your senses. From timeless classics to modern blends, our curated fragrances are handpicked for their unique appeal.",
//     buttonText: "ALL PRODUCTS",
//     buttonProps: {
//         // Any additional props for AnimatedButton
//         // padding: "px-8 py-3",
//         // onClick: () => router.push('/shop')
//     }
// };

