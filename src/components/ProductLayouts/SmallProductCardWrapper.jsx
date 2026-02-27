import { DataClassicCosmeticsSmallProductCard } from "./DataProductLayouts/DataClassicCosmeticsSmallProductCard";
import { SmallProductCard } from "./SmallProductCard";

export const SmallProductCardWrapper= () => {
  

  return (
    <div className="bg-white px-4 py-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DataClassicCosmeticsSmallProductCard.map((category, index) => (
            <SmallProductCard
              key={index}
              bgColor={category.bgColor}
              image={category.image}
              title={category.title}
              quantity={category.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
