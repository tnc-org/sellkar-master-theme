
import CarouselBanner from "@/components/CrouselDynamicBanner/CarouselBanner";
import { EmailSubscriptionMap } from "@/components/EmailAndNewsSubscription";
import { ProductLayoutsMap } from "@/components/ProductLayouts";
import ShopLayout from "@/components/ShopLayout/ShopLayout";

export const ProductsSectionMap = {
  carouselDynamicBanner: {
    carouselBanner: CarouselBanner,
  },

  shopLayout: {
    default: ShopLayout,
  },

  "emailSubscription": EmailSubscriptionMap,
  "productLayouts": ProductLayoutsMap,

};
