export const DataProductTabs = [
  {
    key: "latest",
    label: "LATEST PRODUCTS",
    filter: (p) => p.category === "latest"
  },
  {
    key: "topRated",
    label: "TOP RATING",
    filter: (p) => p.rating >= 4.5
  },
  {
    key: "bestseller",
    label: "BEST SELLER",
    filter: (p) => p.bestseller
  },
  {
    key: "featured",
    label: "FEATURED PRODUCTS",
    filter: (p) => p.category === "featured"
  }
];
