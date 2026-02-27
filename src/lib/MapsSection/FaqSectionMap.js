import { ContentSectionsMap } from "@/components/ContentSections";
import CarouselBanner from "@/components/CrouselDynamicBanner/CarouselBanner";

import { EmailSubscriptionMap } from "@/components/EmailAndNewsSubscription";
import { AccordianFaqsMap } from "@/components/Shadcn/Accordian";

export const FaqSectionMap = {
    carouselDynamicBanner: {
        carouselBanner: CarouselBanner,
    },
    "accordianFaqs": AccordianFaqsMap,

    "emailSubscription": EmailSubscriptionMap,
    "contentSection": ContentSectionsMap,

}