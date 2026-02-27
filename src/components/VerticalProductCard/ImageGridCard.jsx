"use client";
import { useRouter } from "next/navigation";
import AnimatedButton from "../Button/Button";

export function ImageGridCard({
    title,
    subtitle,
    buttonProps,
    image,
    link,
    contentPosition = "top-left", // top-left, top-right, bottom-left, bottom-right, center
    textColor = "text-white",
    subtitleColor,
    titleColor,
    overlayColor = "",
    overlayHoverColor = ""
}) {
    const router = useRouter();

    const handleClick = () => {
        if (link) {
            router.push(link);
        }
    };

    // Position mapping
    const positionClasses = {
        "top-left": "items-start justify-start",
        "top-right": "items-end justify-start",
        "bottom-left": "items-start justify-end",
        "bottom-right": "items-end justify-end",
        "center": "items-center justify-center",
        "center-left": "items-start justify-center",
        "center-right": "items-end justify-center"
    };

    const textAlignClasses = {
    "top-left": "text-left",
    "top-right": "text-right",
    "bottom-left": "text-left",
    "bottom-right": "text-right",
    "center": "text-center",
    "center-left": "text-left",
    "center-right": "text-right"
};

    return (
        <div
            className="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 overflow-hidden group cursor-pointer"
            onClick={handleClick}
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlayColor} group-hover:${overlayHoverColor} transition-all duration-300`} />

            {/* Content */}
            <div className={`absolute inset-0 flex flex-col ${positionClasses[contentPosition]} p-6 sm:p-8 md:p-10 ${textColor}`}>
                <div className={`flex flex-col ${textAlignClasses[contentPosition]}`}>

                    {subtitle && (
                        <p className={`text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90 ${subtitleColor || textColor}`}>
                            {subtitle}
                        </p>
                    )}
                    <h3 style={{ fontWeight: "500" }} className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 ${titleColor || textColor}`}>
                        {title}
                    </h3>

                    <div>
                        <AnimatedButton
                            {...buttonProps}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}