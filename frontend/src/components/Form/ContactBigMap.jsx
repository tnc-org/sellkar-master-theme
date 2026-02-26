"use client";

export default function ContactBigMap({ 
  location = "California",
  imageUrl = "/ThemePictures/map1.png",
  mapLink = "https://www.google.com/maps?q=California"
}) {
  const handleClick = () => {
    window.open(mapLink, "_blank");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <img
        src={imageUrl}
        alt={`Map of ${location}`}
        className="w-full h-full object-cover cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
}
