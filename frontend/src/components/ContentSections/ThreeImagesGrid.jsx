"use client"

export default function ThreeImagesGrid({ images , reverse = false }) {
  
  const defaultImages = [
"ThemePictures/grid1.png",
"ThemePictures/grid2.png",
"ThemePictures/grid3.png"
  ];

  const imageSet = images || defaultImages;

  return (
    <div className="min-h-screen px-4">
      <div 
        className={`grid grid-cols-1 lg:grid-cols-2 gap-4 h-full ${
          reverse ? 'lg:grid-flow-dense' : ''
        }`}
      >
        {/* Large image */}
        <div 
          className={`row-span-1 lg:row-span-2 ${
            reverse ? 'lg:col-start-2' : 'lg:col-start-1'
          }`}
        >
          <img
            src={imageSet[0]}
            alt="Large feature"
            className="w-full h-64 lg:h-full object-cover rounded-lg"
          />
        </div>

        {/* Top right image */}
        <div 
          className={`${
            reverse ? 'lg:col-start-1' : 'lg:col-start-2'
          } lg:row-start-1`}
        >
          <img
            src={imageSet[1]}
            alt="Top right"
            className="w-full h-64 lg:h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom right image */}
        <div 
          className={`${
            reverse ? 'lg:col-start-1' : 'lg:col-start-2'
          } lg:row-start-2`}
        >
          <img
            src={imageSet[2]}
            alt="Bottom right"
            className="w-full h-64 lg:h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

