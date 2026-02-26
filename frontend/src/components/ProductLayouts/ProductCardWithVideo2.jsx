"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AnimatedButton from '../Button/Button';

export const ProductCardWithVideo2 = ({ thumbnail, video, title, price, comparePrice, isCenter, onIntersect, link }) => {
    const router = useRouter();
    const videoRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (isCenter && videoElement) {
            videoElement.play().catch(err => console.log('Auto-play failed:', err));
        } else if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    }, [isCenter]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        onIntersect?.();
                    }
                });
            },
            { threshold: 0.6 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [onIntersect]);

    return (
        <div ref={cardRef} className="flex-shrink-0 w-full md:w-1/3 px-2">
            <div className="bg-white  overflow-hidden shadow-md">
                {/* Video/Thumbnail Section */}
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                    {isCenter ? (
                        <video
                            ref={videoRef}
                            src={video}
                            className="absolute inset-0 w-full h-full object-cover"
                            loop
                            muted
                            playsInline
                        />
                    ) : (
                        <img
                            src={thumbnail}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Product Info Section */}
                <div className="p-4 bg-white">
                    {/* Product Image Thumbnail */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                            <img
                                src={thumbnail}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
                                {comparePrice && (
                                    <span className="text-sm text-gray-400 line-through">${comparePrice.toFixed(2)}</span>
                                )}
                            </div>
                        </div>
                    </div>


                    <AnimatedButton
                        onClick={() => router.push("/shop")}
                        text='SHOP NOW'
                        bgColor="bg-black w-full"
                        textColor='text-white'
                    />

                </div>
            </div>
        </div >
    );
}