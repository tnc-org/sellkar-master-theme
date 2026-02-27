// import { ImageGridCard } from "./ImageGridCard";

import { ImageGridCard } from "./ImageGridCard";

// export function ImageGridCardWrapper({ cards = [] }) {
//     return (
//         <div className="w-full px-4 py-8 sm:py-12 md:py-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
//                 {cards.map((card, index) => (
//                     <ImageGridCard
//                         key={index}
//                         title={card.title}
//                         subtitle={card.subtitle}
//                         buttonText={card.buttonText}
//                         image={card.image}
//                         link={card.link}
//                         contentPosition={card.contentPosition}
//                         buttonProps={card.buttonProps}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }







export function ImageGridCardWrapper({ cards = [], bgColor = "" , gap="gap-1" }) {
    // Calculate grid columns based on number of cards
    const getGridCols = () => {
        const count = cards.length;
        if (count === 1) return "grid-cols-1";
        if (count === 2) return "grid-cols-1 sm:grid-cols-2";
        if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    };

    return (
        <div className={`w-full px-4 py-8 ${bgColor || ""} sm:py-12 md:py-16`}>
            <div className={`grid ${getGridCols()} ${gap}`}>
                {cards.map((card, index) => (
                    <ImageGridCard
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        image={card.image}
                        link={card.link}
                        contentPosition={card.contentPosition}
                        buttonProps={card.buttonProps}
                        textColor={card.textColor}
                        subtitleColor={card.subtitleColor}
                        titleColor={card.titleColor}
                        overlayColor={card.overlayColor}
                        overlayHoverColor={card.overlayHoverColor}
                    />
                ))}
            </div>
        </div>
    );
}