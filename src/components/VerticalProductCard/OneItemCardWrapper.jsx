import { OneItemCard } from "./OneItemCard";

export const OneItemCardWrapper = ({ items = []}) => {
  return (
    <div>
      {items.map((item) => (
        <OneItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};