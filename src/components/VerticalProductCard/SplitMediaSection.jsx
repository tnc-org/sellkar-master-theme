"use client"
import React from 'react'
import MediaItem from '../MediaItem/MediaItem'
import AnimatedButton from '../Button/Button'

const SplitMediaSection = ({
    leftMedia,
    rightMedia,
    centerContent
}) => {
    return (
        <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                
                {/* Left Media */}
                <div className="w-full h-[400px] md:h-[500px]">
                    <MediaItem {...leftMedia} />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center justify-center text-center px-6 py-8">
                    {centerContent.category && (
                        <p className="text-sm font-semibold tracking-widest mb-3 text-gray-600 uppercase">
                            {centerContent.category}
                        </p>
                    )}
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-4 whitespace-pre-line">
                        {centerContent.title}
                    </h2>
                    
                    {centerContent.description && (
                        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-md">
                            {centerContent.description}
                        </p>
                    )}
                    
                    {centerContent.buttonProps && (
                        <AnimatedButton {...centerContent.buttonProps} />
                    )}
                </div>

                {/* Right Media */}
                <div className="w-full h-[400px] md:h-[500px]">
                    <MediaItem {...rightMedia} />
                </div>
            </div>
        </div>
    )
}

export default SplitMediaSection
