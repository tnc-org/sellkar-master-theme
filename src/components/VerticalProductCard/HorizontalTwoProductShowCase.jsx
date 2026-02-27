// ProductShowcaseCard.jsx
"use client";
import { useRouter } from "next/navigation";
import AnimatedButton from "../Button/Button";

export function HorizontalTwoProductShowCase({ 
    subtitle,
    title,
    image,
    link,
    contentPosition = "center" ,
    buttonProps,
    responsiveHeight,
}) {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link);
        }
    };

    // Position mapping with Flexbox
    const positionClasses = {
        "top": "items-center justify-start",
        "bottom": "items-center justify-end",
        "center": "items-center justify-center",
        "top-left": "items-start justify-start",
        "top-right": "items-end justify-start",
        "bottom-left": "items-start justify-end",
        "bottom-right": "items-end justify-end",
        "center-left": "items-start justify-center",
        "center-right": "items-end justify-center"
    };

    // Text alignment mapping
    const textAlignClasses = {
        "top": "text-center",
        "bottom": "text-center",
        "center": "text-center",
        "top-left": "text-left",
        "top-right": "text-right",
        "bottom-left": "text-left",
        "bottom-right": "text-right",
        "center-left": "text-left",
        "center-right": "text-right"
    };

    return (
        <div 
            className={`relative  w-full ${responsiveHeight}  overflow-hidden group cursor-pointer bg-gray-100`}
            onClick={handleClick}
        >
            {/* Background Image */}
            <img
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-300" />

            {/* Content */}
            <div className={`absolute inset-0 flex flex-col ${positionClasses[contentPosition]} p-8 sm:p-10 md:p-12 lg:p-8`}>
                <div className={`flex flex-col ${textAlignClasses[contentPosition]} max-w-md`}>
                    {subtitle && (
                        <p className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-black mb-2 sm:mb-3">
                            {subtitle}
                        </p>
                    )}
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl whitespace-pre-line text-black mb-4 sm:mb-6 leading-tight">
                        {title}
                    </h2>
                    
                    <div className={`inline-flex ${textAlignClasses[contentPosition] === 'text-center' ? 'justify-center' : textAlignClasses[contentPosition] === 'text-right' ? 'justify-end' : 'justify-start'}`}>
                        <AnimatedButton
                            {...buttonProps}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}