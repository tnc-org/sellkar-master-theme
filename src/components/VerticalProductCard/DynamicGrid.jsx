"use client"
import React, { useRef, useState } from 'react'
import AnimatedButton from '../Button/Button'

const DynamicGrid = ({ 
    category, 
    title, 
    subtitle, 
    image,
    video, // NEW: video source
    videoThumbnail, // NEW: thumbnail for video
    grid, 
    buttonProps, 
    categoryColor, 
    itemStart,
    titleColor, 
    subtitleColor,
    contentAlign = "center",
    textAlign = "center",
    isVideo = false, // NEW: is this a video item?
    autoPlay = false, // NEW: autoplay video
    bgOverlay = "",
}) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [showThumbnail, setShowThumbnail] = useState(!autoPlay) // Show thumbnail initially if not autoplaying

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play()
                setIsPlaying(true)
                setShowThumbnail(false) // Hide thumbnail when playing
            }
        }
    }

    const handleVideoEnd = () => {
        setIsPlaying(false)
        setShowThumbnail(true) // Show thumbnail again when video ends
    }

    return (
        <div className={`relative group cursor-pointer overflow-hidden w-full h-full ${grid || ""}`}>
            {/* Render VIDEO if isVideo is true, otherwise IMAGE */}
            {isVideo && video ? (
                <>
                    {/* Video Thumbnail (shown when video is not playing) */}
                    {showThumbnail && videoThumbnail && (
                        <img
                            className='absolute inset-0 w-full h-full object-cover z-10'
                            src={videoThumbnail}
                            alt={title || "video thumbnail"} 
                        />
                    )}
                    
                    {/* Actual Video */}
                    <video
                        ref={videoRef}
                        className='w-full h-full object-cover'
                        src={video}
                        loop
                        muted
                        autoPlay={autoPlay}
                        playsInline
                        onEnded={handleVideoEnd}
                        poster={videoThumbnail} // Native HTML5 poster attribute as backup
                    />
                </>
            ) : (
                <img
                    className='w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out object-cover'
                    src={image}
                    alt={title || "picture"} 
                />
            )}

            {/* Optional overlay */}
            {bgOverlay && (
                <div className={`absolute inset-0 ${bgOverlay} z-20`}></div>
            )}

            <div className={`absolute inset-0 flex ${itemStart ? "items-start" : "items-center"} ${
                contentAlign === "left" ? "justify-start" : 
                contentAlign === "right" ? "justify-end" : 
                "justify-center"
            } p-8 flex-col ${textAlign === "left" ? "text-left" : textAlign === "right" ? "text-right" : "text-center"} z-30`}>
                
                {category && (
                    <p className={`${categoryColor || "text-black"} text-sm font-semibold tracking-widest mb-2 uppercase`}>
                        {category}
                    </p>
                )}
                
                {title && (
                    <h1 className={`${titleColor} text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-pre-line`}>
                        {title}
                    </h1>
                )}
                
                {subtitle && (
                    <p className={`${subtitleColor || "text-gray-600"} text-sm md:text-md mt-3`}>
                        {subtitle}
                    </p>
                )}

                {/* Play/Pause button for video */}
                {isVideo && (
                    <button 
                        onClick={toggleVideo}
                        className='mt-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none'
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                        {isPlaying ? (
                            // Pause icon
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm10 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd"/>
                            </svg>
                        ) : (
                            // Play icon
                            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                        )}
                    </button>
                )}
                
                {buttonProps && (
                    <div className='mt-6 md:mt-10'>
                        <AnimatedButton {...buttonProps} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default DynamicGrid