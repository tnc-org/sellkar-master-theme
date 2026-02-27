import { Typography } from "antd";
import { ImageWithColorProductCard } from "./ImageWithColorProductCard";

export const ImageWithColorProductCardWrapper = ({ data = [] }) => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs tracking-widest uppercase text-gray-600 mb-2">DISCOVER</p>
        <Typography.Title level={1} className="!mb-0 font-serif" style={{ fontSize: '2.5rem', fontWeight: 400 }}>
          Collections
        </Typography.Title>
      </div>

      {/* Alternating Layout */}
      <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              className={`
                flex justify-center
                ${isLeft ? 'lg:justify-start lg:pl-[10%]' : 'lg:justify-end lg:pr-[10%]'}
              `}
            >
              <div className="w-full max-w-md">
                <ImageWithColorProductCard {...item} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};