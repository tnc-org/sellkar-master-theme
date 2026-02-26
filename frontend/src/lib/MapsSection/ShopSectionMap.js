
import CarouselBanner from "@/components/CrouselDynamicBanner/CarouselBanner";
import { EmailSubscriptionMap } from "@/components/EmailAndNewsSubscription";
import ShopLayout from "@/components/ShopLayout/ShopLayout";

export const ShopSectionMap = {
  carouselDynamicBanner: {
    carouselBanner: CarouselBanner,
  },

  shopLayout: {
    default: ShopLayout,
  },

  "emailSubscription": EmailSubscriptionMap,
};
