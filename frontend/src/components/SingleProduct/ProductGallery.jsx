"use client"
import { useState } from "react";

const thumbnails = [
 "/ThemePictures/watch7.jpeg",
  "/ThemePictures/watch8.jpeg",
  "/ThemePictures/watch9.jpeg",
  "/ThemePictures/watch10.jpeg",
  "/ThemePictures/watch11.jpeg",
];

export default function ProductGallery({ image = thumbnails[0] }) {
  const [selectedImage, setSelectedImage] = useState(image);
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* MAIN IMAGE - Reduced height and width */}
      <div
  className={`relative w-full overflow-hidden rounded-xl border ${
    showZoom ? "cursor-zoom-out" : "cursor-zoom-in"
  }`}
  style={{ height: "450px" }}
  onMouseMove={handleMouseMove}
  onMouseEnter={() => window.innerWidth >= 768 && setShowZoom(true)}
  onMouseLeave={() => setShowZoom(false)}
>
  <img
    src={selectedImage}
    alt="Product"
    className="w-full h-full transition-transform duration-300 ease-out object-contain p-4"
    style={{
      transform:
        showZoom && window.innerWidth >= 768 ? "scale(2.2)" : "scale(1)",
      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
    }}
  />
</div>


      {/* THUMBNAILS - Full width, no wrap */}
    <div className="flex flex-wrap gap-3 w-full">
  {thumbnails.map((img, index) => (
    <button
      key={index}
      onClick={() => setSelectedImage(img)}
      className={`border transition ${
        selectedImage === img
          ? "border-black scale-105"
          : "border-gray-300 hover:border-gray-400"
      } 
      flex-1 min-w-[60px] sm:min-w-[80px] md:min-w-[100px]`}
    >
      <div className="w-full h-20">
        <img
          src={img}
          alt={`Thumbnail ${index + 1}`}
          className="w-full h-full object-cover rounded"
        />
      </div>
    </button>
  ))}
</div>


    </div>
  );
}