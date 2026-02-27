import { DataElectroMartSmallShopCard } from "./DataVerticalProductCard/DataSmallShopCard/DataElectroMartSmallShopCard";
import { SmallShopCard } from "./SmallShopCard";

export default function SmallShopCardWrapper() {

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DataElectroMartSmallShopCard.map((card, index) => (
            <SmallShopCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              link={card.link}
              buttonProps={card.buttonProps}
            />
          ))}
        </div>
      </div>
    </div>
  );
}