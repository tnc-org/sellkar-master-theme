"use client"

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const Hero_Video_Section = ({ videoSrc, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setShowThumbnail(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowThumbnail(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Thumbnail Image */}
      {showThumbnail && (
        <div className="absolute inset-0 z-10">
          <img
            src={thumbnailSrc}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 
                   flex items-center justify-center w-20 h-20 rounded-full 
                   bg-white/90 hover:bg-white text-black
                   transition-all duration-300 hover:scale-110 active:scale-95
                   shadow-2xl"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 ml-0" fill="currentColor" />
        ) : (
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        )}
      </button>

      {/* Optional: Video Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black/60 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            
          </p>
        </div>
      </div>

    </div>
  );
};

export default Hero_Video_Section;