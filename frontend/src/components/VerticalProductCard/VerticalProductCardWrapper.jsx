import VerticalProductCard from "./VerticalProductCard";

const VerticalProductCardWrapper = ({ reverse = false, cards = [] }) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center my-15  justify-center gap-10 md:gap-16 lg:gap-40 mt-20`}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-[90%] md:w-[45%] ${index === 1 ? "lg:w-[30%]" : "lg:w-[45%]"}`}
        >
          <VerticalProductCard
            image={card.image}
            title={card.title}
          />
        </div>
      ))}
    </div>
  );
};

export default VerticalProductCardWrapper;
