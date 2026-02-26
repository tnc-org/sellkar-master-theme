import { HorizontalTwoProductShowCase } from "./HorizontalTwoProductShowCase";

export function HorizontalTwoProductShowCaseWrapper({ cards = [] }) {
    return (
        <div className="w-full py-10 px-4">
            <div className="flex justify-center items-center flex-col lg:flex-row gap-4">
                {cards.map((card, index) => (
                    <HorizontalTwoProductShowCase
                        key={index}
                        subtitle={card.subtitle}
                        title={card.title}
                        image={card.image}
                        link={card.link}
                        contentPosition={card.contentPosition}
                        buttonProps={card.buttonProps}
                    />
                ))}
            </div>
        </div>
    );
}

