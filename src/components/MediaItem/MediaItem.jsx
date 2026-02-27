// "use client"
// import React, { useState, useRef } from 'react'
// import ReactPlayer from 'react-player'

// const MediaItem = ({ 
//     image, 
//     video, 
//     videoThumbnail, 
//     isVideo,
//     autoPlay = false,
//     controls = false, 
//     loop = true,
//     muted = true,
// }) => {
//     const [playing, setPlaying] = useState(autoPlay)
//     const [showThumbnail, setShowThumbnail] = useState(!autoPlay)
//     const playerRef = useRef(null)

//     const handlePlayPause = () => {
//         setPlaying(!playing)
//         if (!playing) setShowThumbnail(false)
//     }

//     const handleEnded = () => {
//         if (!loop) {
//             setPlaying(false)
//             setShowThumbnail(true)
//         }
//     }

//     if (isVideo && video) {
//         return (
//             <div className="relative w-full h-full overflow-hidden group">
//                 {showThumbnail && videoThumbnail && (
//                     <div 
//                         className="absolute inset-0 z-10 cursor-pointer"
//                         onClick={handlePlayPause}
//                     >
//                         <img
//                             className='w-full h-full object-cover'
//                             src={videoThumbnail}
//                             alt="video thumbnail" 
//                         />
//                         <button 
//                             className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-90 hover:opacity-100'
//                             aria-label="Play video"
//                         >
//                             <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
//                             </svg>
//                         </button>
//                     </div>
//                 )}

//                 <ReactPlayer
//                     ref={playerRef}
//                     url={video}
//                     playing={playing}
//                     loop={loop}
//                     muted={muted}
//                     controls={controls}
//                     width="100%"
//                     height="100%"
//                     onEnded={handleEnded}
//                     config={{
//                         file: {
//                             attributes: {
//                                 style: { 
//                                     objectFit: 'cover', 
//                                     width: '100%', 
//                                     height: '100%' 
//                                 }
//                             }
//                         }
//                     }}
//                 />

//                 {!controls && !showThumbnail && (
//                     <button 
//                         onClick={handlePlayPause}
//                         className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-0 group-hover:opacity-90 hover:!opacity-100 transition-opacity'
//                         aria-label={playing ? "Pause video" : "Play video"}
//                     >
//                         {playing ? (
//                             <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm10 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd"/>
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
//                             </svg>
//                         )}
//                     </button>
//                 )}
//             </div>
//         )
//     }

//     return (
//         <div className="relative w-full h-full overflow-hidden group">
//             <img
//                 className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
//                 src={image}
//                 alt="media" 
//             />
//         </div>
//     )
// }

// export default MediaItem













// "use client"
// import React, { useState, useRef, useEffect } from 'react'

// const MediaItem = ({ 
//     image, 
//     video, 
//     videoThumbnail, 
//     isVideo,
//     autoPlay = false,
//     controls = false, 
//     loop = true,
//     muted = true,
// }) => {
//     const [playing, setPlaying] = useState(autoPlay)
//     const [showThumbnail, setShowThumbnail] = useState(!autoPlay)
//     const [error, setError] = useState(null)
//     const videoRef = useRef(null)

//     useEffect(() => {
//         console.log('MediaItem props:', {
//             isVideo,
//             video,
//             videoThumbnail,
//             autoPlay,
//             controls,
//             loop,
//             muted
//         })

//         if (isVideo && video && videoRef.current) {
//             // Try to load the video
//             videoRef.current.load()
            
//             if (autoPlay) {
//                 videoRef.current.play()
//                     .then(() => {
//                         console.log('Video autoplay started')
//                         setPlaying(true)
//                         setShowThumbnail(false)
//                     })
//                     .catch(err => {
//                         console.error('Autoplay failed:', err)
//                         setError(err.message)
//                     })
//             }
//         }
//     }, [isVideo, video, autoPlay])

//     const handlePlayPause = () => {
//         if (videoRef.current) {
//             if (playing) {
//                 videoRef.current.pause()
//                 console.log('Video paused')
//             } else {
//                 videoRef.current.play()
//                     .then(() => {
//                         console.log('Video playing')
//                         setShowThumbnail(false)
//                     })
//                     .catch(err => {
//                         console.error('Play failed:', err)
//                         setError(err.message)
//                     })
//             }
//             setPlaying(!playing)
//         }
//     }

//     const handleEnded = () => {
//         console.log('Video ended')
//         if (!loop) {
//             setPlaying(false)
//             setShowThumbnail(true)
//         }
//     }

//     const handleLoadedData = () => {
//         console.log('Video loaded successfully')
//         setError(null)
//     }

//     const handleError = (e) => {
//         console.error('Video error:', e)
//         const videoElement = videoRef.current
//         if (videoElement) {
//             console.error('Video error code:', videoElement.error?.code)
//             console.error('Video error message:', videoElement.error?.message)
//             setError(`Video failed to load: ${videoElement.error?.message || 'Unknown error'}`)
//         }
//     }

//     if (isVideo && video) {
//         return (
//             <div className="relative w-full h-full overflow-hidden group bg-gray-900">
//                 {/* Error Display */}
//                 {error && (
//                     <div className="absolute top-4 left-4 right-4 bg-red-500 text-white p-2 rounded z-30 text-sm">
//                         {error}
//                     </div>
//                 )}

//                 {/* Thumbnail Overlay */}
//                 {showThumbnail && videoThumbnail && (
//                     <div 
//                         className="absolute inset-0 z-10 cursor-pointer"
//                         onClick={handlePlayPause}
//                     >
//                         <img
//                             className='w-full h-full object-cover'
//                             src={videoThumbnail}
//                             alt="video thumbnail" 
//                         />
//                         <button 
//                             className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-90 hover:opacity-100'
//                             aria-label="Play video"
//                         >
//                             <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
//                             </svg>
//                         </button>
//                     </div>
//                 )}

//                 {/* Video Element */}
//                 <video
//                     ref={videoRef}
//                     className="w-full h-full object-cover"
//                     loop={loop}
//                     muted={muted}
//                     controls={controls}
//                     onEnded={handleEnded}
//                     onLoadedData={handleLoadedData}
//                     onError={handleError}
//                     playsInline
//                     preload="metadata"
//                 >
//                     <source src={video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>

//                 {/* Custom Play/Pause Button */}
//                 {!controls && !showThumbnail && (
//                     <button 
//                         onClick={handlePlayPause}
//                         className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-0 group-hover:opacity-90 hover:!opacity-100 transition-opacity'
//                         aria-label={playing ? "Pause video" : "Play video"}
//                     >
//                         {playing ? (
//                             <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm10 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd"/>
//                             </svg>
//                         ) : (
//                             <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
//                             </svg>
//                         )}
//                     </button>
//                 )}

//                 {/* Debug Info (remove in production) */}
//                 <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded z-30">
//                     <div>Playing: {playing ? 'Yes' : 'No'}</div>
//                     <div>Video: {video}</div>
//                     <div>Controls: {controls ? 'Yes' : 'No'}</div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="relative w-full h-full overflow-hidden group">
//             <img
//                 className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
//                 src={image}
//                 alt="media" 
//             />
//         </div>
//     )
// }

// export default MediaItem






















"use client"
import React, { useState, useRef } from 'react'

const MediaItem = ({ 
    image, 
    video, 
    videoThumbnail, 
    isVideo,
    autoPlay = false,
    controls = false, 
    loop = true,
    muted = true,
}) => {
    const [playing, setPlaying] = useState(autoPlay)
    const [hasStarted, setHasStarted] = useState(autoPlay)
    const videoRef = useRef(null)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
                setHasStarted(true)
            }
            setPlaying(!playing)
        }
    }

    const handleEnded = () => {
        if (!loop) {
            setPlaying(false)
        }
    }

    const handlePlay = () => {
        setPlaying(true)
        setHasStarted(true)
    }

    const handlePause = () => {
        setPlaying(false)
    }

    if (isVideo && video) {
        return (
            <div className="relative w-full h-full overflow-hidden group bg-black">
                {/* Thumbnail Overlay - Only show before video has started */}
                {!hasStarted && videoThumbnail && (
                    <div 
                        className="absolute inset-0 z-10 cursor-pointer"
                        onClick={handlePlayPause}
                    >
                        <img
                            className='w-full h-full object-cover'
                            src={videoThumbnail}
                            alt="video thumbnail" 
                        />
                        <button 
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-90 hover:opacity-100'
                            aria-label="Play video"
                        >
                            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                        </button>
                    </div>
                )}

                {/* Video Element */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    onEnded={handleEnded}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    playsInline
                    preload="metadata"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Custom Play/Pause Button (only when controls are off and video has started) */}
                {!controls && hasStarted && (
                    <button 
                        onClick={handlePlayPause}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform focus:outline-none opacity-0 group-hover:opacity-90 hover:!opacity-100 transition-opacity'
                        aria-label={playing ? "Pause video" : "Play video"}
                    >
                        {playing ? (
                            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm10 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd"/>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                            </svg>
                        )}
                    </button>
                )}
            </div>
        )
    }

    return (
        <div className="relative w-full h-full overflow-hidden group">
            <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                src={image}
                alt="media" 
            />
        </div>
    )
}

export default MediaItem