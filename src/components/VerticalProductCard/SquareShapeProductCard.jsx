"use client";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import AnimatedButton from "../Button/Button";

export default function SquareShapeProductCard({
    image,
    title,
    buttonText,
    overlayPosition = "bottom-left",
    link,
    buttonProps,
}) {
    const router = useRouter();

    const positionStyles = {
        "bottom-left": { bottom: "50px", left: "10px", textAlign: "left" },
        "bottom-center": { bottom: "10px", left: "50%", transform: "translateX(-50%)", textAlign: "center" },
        "bottom-right": { bottom: "50px", right: "10px", textAlign: "right" },
        "top-left": { top: "10px", left: "10px", textAlign: "left" },
        "top-center": { top: "10px", left: "50%", transform: "translateX(-50%)", textAlign: "center" },
        "top-right": { top: "10px", right: "10px", textAlign: "right" },
        "center": { top: "60%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" },
    };

    return (
        <Card 
            style={{ position: "relative", overflow: "hidden" }}
            className="text-white w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-64 sm:h-72 md:h-80 lg:h-96"
        >
            <Card.Img 
                src={image} 
                alt={title} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />

            <Card.ImgOverlay
                style={{
                    color: "black",
                    position: "absolute",
                    padding: "1rem",
                    borderRadius: "8px",
                    ...positionStyles[overlayPosition],
                }}
                className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md"
            >
                {title && (
                    <Card.Title
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                        style={{ fontSize: "30px", marginBottom: "12px" }}
                    >
                        {title}
                    </Card.Title>
                )}

                {/* Use buttonProps if provided, otherwise use buttonText */}
                {buttonProps ? (
                    <AnimatedButton 
                        {...buttonProps} 
                        onClick={() => router.push(link)}
                    />
                ) : buttonText ? (
                    <AnimatedButton
                        onClick={() => router.push(link)}
                        text={buttonText}
                        bgColor="bg-transparent"
                        textColor="text-black"
                        onlyBottomBorder={true}
                        className=""
                    />
                ) : null}
            </Card.ImgOverlay>
        </Card>
    );
}








