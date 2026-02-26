import React from "react";
import LiveTimer from "@/components/LiveTimer/LiveTimer";
import ProductCarousel from "./ProductCarousel";

const ProductCarouselWithLiveTimer = ({
  timerProps = {},
  carouselProps = {},
  layout = {
    timerWidth: "lg:w-[35%] md:w-[45%]",
    carouselWidth: "lg:w-[65%] md:w-[55%]",
  },
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start py-20">
      <div className={`w-full ${layout.timerWidth}`}>
        <LiveTimer {...timerProps} />
      </div>

      <div className={`w-full ${layout.carouselWidth}`}>
        <ProductCarousel {...carouselProps} />
      </div>
    </div>
  );
};

export default ProductCarouselWithLiveTimer;
