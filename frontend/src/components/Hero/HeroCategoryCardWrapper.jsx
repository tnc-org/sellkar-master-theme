import { HeroCategoryCard } from "./HeroCategoryCard";

export function HeroCategoryCardWrapper({ cards = [] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {cards.map((card, index) => (
          <HeroCategoryCard
            key={index}
            title={card.title}
            image={card.image}
            buttonProps={card.buttonProps}
          />
        ))}
      </div>
    </div>
  );
}





// / Demo
// function Demo() {
//   const categoryCards = [
//     {
//       title: "Skin Care",
//       image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=1000&fit=crop",
//       buttonProps: {
//         text: "SHOP NOW",
//         bgColor: "bg-white",
//         textColor: "text-black",
//         hoverBgColor: "hover:bg-gray-100"
//       }
//     },
//     {
//       title: "Hair & Body",
//       image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=1000&fit=crop",
//       buttonProps: {
//         text: "SHOP NOW",
//         bgColor: "bg-white",
//         textColor: "text-black",
//         hoverBgColor: "hover:bg-gray-100"
//       }
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <CategoryCardsWrapper cards={categoryCards} />
//     </div>
//   );
// }

// export default Demo;