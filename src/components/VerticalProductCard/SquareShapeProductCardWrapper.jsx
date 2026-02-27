import React from "react";
import SquareShapeProductCard from "./SquareShapeProductCard";

const SquareShapeProductCardWrapper = ({ cardsData = [] }) => {
  return (
    
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((data, index) => (
        <SquareShapeProductCard
          key={index}
          image={data.image}
          title={data.title}
          buttonText={data.buttonText}
          overlayPosition={data.overlayPosition}
              link={data.link}
        />
      ))}
    </div>
  
    );
};

export default SquareShapeProductCardWrapper;























// import React from "react";
// import SquareShapeProductCard from "./SquareShapeProductCard";

// const SquareShapeProductCardWrapper = ({ 
//   cardsData = [],
//   columns = { sm: 1, md: 2, lg: 3 }, // customizable grid columns
//   gap = "gap-6",
//   containerClass = ""
// }) => {
//   // Generate grid classes based on columns prop
//   const gridCols = `grid-cols-${columns.sm} sm:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`;
  
//   return (
//     <div className={`container mx-auto px-4 py-8 ${containerClass}`}>
//       <div className={`grid ${gridCols} ${gap}`}>
//         {cardsData.map((data, index) => (
//           <SquareShapeProductCard
//             key={data.id || index}
//             image={data.image}
//             title={data.title}
//             buttonText={data.buttonText}
//             overlayPosition={data.overlayPosition}
//             link={data.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SquareShapeProductCardWrapper;