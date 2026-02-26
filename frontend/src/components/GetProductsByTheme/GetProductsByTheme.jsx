import { DataProductWatchTheme } from "../ProductLayouts/DataProductLayouts/DataProductWatchTheme";
import { DataProductFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductFurnitureTheme";
import { DataProductClassicFurnitureTheme } from "../ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";
import { DataProductBeautyTheme } from "../ProductLayouts/DataProductLayouts/DataProductBeautyTheme";
import { DataProductPerfumeTheme } from "../ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductCosmeticsTheme } from "../ProductLayouts/DataProductLayouts/DataProductCosmeticsTheme";
import { DataProductClassicElectroTheme } from "../ProductLayouts/DataProductLayouts/DataProductClassicElectroTheme";
import { DataProductClothingTheme } from "../ProductLayouts/DataProductLayouts/DataProductClothingTheme";
import { DataProductFashionTheme } from "../ProductLayouts/DataProductLayouts/DataProductFashionTheme";
import { DataProductElectroHubTheme } from "../ProductLayouts/DataProductLayouts/DataProductElectroHubTheme";
import { DataProductElectroMartTheme } from "../ProductLayouts/DataProductLayouts/DataProductElectroMartTheme";
import { DataProductJewelleryTheme } from "../ProductLayouts/DataProductLayouts/DataProductJewelleryTheme";
import { DataProductGlassesTheme } from "../ProductLayouts/DataProductLayouts/DataProductGlassesTheme";
import { DataProductModernFashionTheme } from "../ProductLayouts/DataProductLayouts/DataProductModernFashionTheme";
import { DataProductModestWearTheme } from "../ProductLayouts/DataProductLayouts/DataProductModestWearTheme";
import { DataProductCeramicTheme } from "../ProductLayouts/DataProductLayouts/DataProductCeramicTheme";
import { DataProductToysTheme } from "../ProductLayouts/DataProductLayouts/DataProductToysTheme";
import { DataProductBookStoreTheme } from "../ProductLayouts/DataProductLayouts/DataProductBookStoreTheme";

const PRODUCT_MAP = {
  time: DataProductWatchTheme,
  furniture: DataProductFurnitureTheme,
  classicFurniture: DataProductClassicFurnitureTheme,
  beauty: DataProductBeautyTheme,
  perfume: DataProductPerfumeTheme,
  cosmetics: DataProductCosmeticsTheme,
  clothing: DataProductClothingTheme,
  fashion: DataProductFashionTheme,
  classicElectro: DataProductClassicElectroTheme,
  electroHub: DataProductElectroHubTheme,
  electroMart: DataProductElectroMartTheme,
  jewellery: DataProductJewelleryTheme,
  classicCosmetics:DataProductCosmeticsTheme,
  glasses: DataProductGlassesTheme,
  modernFashion: DataProductModernFashionTheme,
  modestWear: DataProductModestWearTheme,
  ceramic: DataProductCeramicTheme,
  toys: DataProductToysTheme,
  bookStore: DataProductBookStoreTheme, 
};

export function GetProductsByTheme(themeId) {
  return PRODUCT_MAP[themeId] || [];
}
