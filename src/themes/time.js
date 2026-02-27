import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataWhatsNewSection } from "@/components/ContentSections/DataContentSection/DataWhatsNewSection";
import { DataCategoriesWatch } from "@/components/CrouselDynamicBanner/DataCategoriesWatch";
import {  DataFollowUsSection1Watch } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection1Watch";
import { WatchHeroData } from "@/components/Hero/HeroData/WatchHeroData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataProductWatchTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductWatchTheme";
import { DataVerticalProductsCard } from "@/components/VerticalProductCard/DataVerticalProductsCard";
import { DataVerticalProductsCard2 } from "@/components/VerticalProductCard/DataVerticalProductsCard2";

export default {
  id: "time",
  header: "header_drawer",
  footer: "small_footer",
  colors: { bg: "#000", text: "#fff" },

  home: [

    {
      section: "hero",
      variant: "hero_carousel",
      props: { slides: WatchHeroData },
    },

    {
      section: "marquee",
      variant: "default",
      props: { brands },
    },

    {
      section: "verticalProductCard",
      variant: "verticalProductCard",
      props: {
        ...DataVerticalProductsCard,
        reverse: false,
      },
    },
    {
      section: "verticalProductCard",
      variant: "verticalProductCard",
      props: {
        ...DataVerticalProductsCard2,
        reverse: true,
      },
    },

    {
      section: "productLayouts",
      variant: "productCarouselWithLiveTimer",
      props: {
        timerProps: {
          title: "Weekly Flash Sale",
          // description: "Limited time deals you don't want to miss.",
          initialTime: { days: 10, hours: 10, minutes: 30, seconds: 0 },
          buttonText: "SHOP THE COLLECTION",
        },
        carouselProps: {
          title: "Latest Watches",
          products: DataProductWatchTheme,
          slidesToShow: { mobile: 1, tablet: 2, desktop: 3 },
        },
      },
    },

    {
      section: "contentSections",
      variant: "whatsNewSection",
      props: { data: DataWhatsNewSection }
    },

   

    {
      section: "productLayouts",
      variant: "productCardRowsForm",
      props: { products: DataProductWatchTheme, paginationType: "showMore", showProductTabs: true, productTabsData: DataProductTabs }
    },
    {
      section: "followUsSection",
      variant: "followUsSection1",
      props: { images: DataFollowUsSection1Watch }
    },

    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }

  ],

  shop: [
    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: {
        title: "Shop",
        showCategory: true,
        categories: DataCategoriesWatch,
        minHeight: "520px",
        backgroundImage: "ThemePictures/shopcarousel.png",
      },
    },
    {
      section: "shopLayout",
      variant: "default",
    },

    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }

  ],

  products: [
    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: { title: "Products", showCategory: true, categories: DataCategoriesWatch, minHeight: "520px", backgroundImage: "ThemePictures/shopcarousel.png" }
    },


    {
      section: "productLayouts",
      variant: "productGridView",
      props: { products: DataProductWatchTheme, paginationType: "pagination", gridColumns: 4 }
    },


    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }
  ],

  contact: [
    {
      section: "contactForm",
      variant: "contactBigMap"

    },

    {
      section: "contactForm",
      variant: "contactForm3",
    },


    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }

  ],

  about: [

    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: { title: "About", showCategory: false, categories: DataCategoriesWatch, minHeight: "320px", backgroundImage: "ThemePictures/watch2.jpeg" }
    },
    {
      section: "contentSection",
      variant: "agencySection",
      props: { title: "Unique & Perfect We Are An Awesome Agency. ", description: "Sum valde dispositus et motivatus professionalis Fashion Designer cum divitiis experientiae in range of photographic styles et officia. Modo percurre tuam Fashion Store, quae imago tui erit parum pudici et confidentis mulieris quae singulari suo stilo fulget. Propositum est facillime facillime efficere. Optima tibi glam et lasciva vestes offerimus, mente habita quae qualitates altae semper nimis pretiosae sunt. Propositum est ut quam facillime efficiamus, propterea fructus selectos cotidie addimus, et hoc nobis necessarium est. Sic cum temporibus stilo assequeris! Nos navem terrarum & spatium!" }
    },

    {
      section: "hero",
      variant: "hero_video_section",
      props: { videoSrc: "ThemeVideo/video1.mp4", thumbnailSrc: "ThemePictures/thumbnail1.png" }
    },

    {
      section: "contentSection",
      variant: "headingAndDescription",
      props: { heading: "Meet Our Team", description: "Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh  tellus ac cursus commodo, tortor mauris condimentum nibh" }
    },
    {
      section: "contentSection",
      variant: "teamCardWrapper",
      props: { TeamData: TeamData }
    },
    {
      section: "contentSection",
      variant: "headingAndDescription",
      props: { heading: "Store In The World", description: "Quisque vitae nibh iaculis neque blandit hendrerit euismod.Maecenas sit amet purus eget ipsum elementum Quisque vitae nibh iaculis neque blandit hendrerit euismod.Maecenas sit amet purus eget ipsum elementum" }
    },
    {
      section: "contentSection",
      variant: "threeImagesGrid",
      // props:{images=[]}  you can pass images here
    },
    {
      section: "contentSection",
      variant: "storeTimings",
      // props:{images=[]}  you can pass images here
    },
    {
      section: "emailSubscription",
      variant: "emailSubscription3",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "https://netro-strore-newdemo24.myshopify.com/cdn/shop/files/Group_46.jpg?v=1735280577&width=480&quot" }
    },

    {
      section: "followUsSection",
      variant: "followUsSection1",
      props: { images: DataFollowUsSection1Watch }
    },


    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    },
  ],


  faqs: [

    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: { title: "Faqs", showCategory: false, categories: DataCategoriesWatch, minHeight: "320px", backgroundImage: "ThemePictures/watch2.jpeg" }
    },

    {
      section:"contentSections",
      variant: "headingAndDescription",
      props:{heading:"Frequently Asked Questions"}
    },

    {
      section: "accordianFaqs",
      variant: "accordianFaqs"
    },

     {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }
  ]


};
