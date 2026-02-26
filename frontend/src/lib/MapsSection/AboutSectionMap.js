import { ContentSectionsMap } from "@/components/ContentSections";
import CarouselBanner from "@/components/CrouselDynamicBanner/CarouselBanner";
import { EmailSubscriptionMap } from "@/components/EmailAndNewsSubscription";
import { FollowUsSectionMap } from "@/components/FollowUsSection";
import { HeroMap } from "@/components/Hero";

export const AboutSectionMap = {
    carouselDynamicBanner: {
        carouselBanner: CarouselBanner,

    },

    hero: HeroMap,
    "emailSubscription": EmailSubscriptionMap,
    "contentSection": ContentSectionsMap,
      "followUsSection": FollowUsSectionMap,


}