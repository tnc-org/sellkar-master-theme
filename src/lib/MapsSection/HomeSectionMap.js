// lib/HomeSectionMap.js

import { ContentSectionsMap } from "@/components/ContentSections";
import StylishProductCarousel from "@/components/CrouselDynamicBanner/StylishProductCarousel";
import { EmailSubscriptionMap } from "@/components/EmailAndNewsSubscription";
import { FollowUsSectionMap } from "@/components/FollowUsSection";
import { HeroMap } from "@/components/Hero";
import { MarqueeMap } from "@/components/Marquee";
import { PictureCarouselMap } from "@/components/PictureCarousel";
import { ProductLayoutsMap } from "@/components/ProductLayouts";
import { VerticalProductCardMap } from "@/components/VerticalProductCard";

export const HomeSectionMap = {

   carouselDynamicBanner: {
    stylishProductCarousel: StylishProductCarousel,
  },


  hero: HeroMap,
  "marquee": MarqueeMap,
  "verticalProductCard": VerticalProductCardMap,
  "productLayouts": ProductLayoutsMap,
  "contentSections": ContentSectionsMap,
  "pictureCarousel": PictureCarouselMap,
  "emailSubscription": EmailSubscriptionMap,
  "followUsSection": FollowUsSectionMap,

}


