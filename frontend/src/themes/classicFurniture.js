import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesClassicFurniture } from "@/components/CrouselDynamicBanner/DataCategoriesClassicFurniture";
import { DataCategoriesFurniture } from "@/components/CrouselDynamicBanner/DataCategoriesFurniture";
import { DataFollowUsSection2Furniture } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection2Furniture";
import { ClassicFurnitureHeroData } from "@/components/Hero/HeroData/ClassicFurnitureData";
import { FurnitureHeroData } from "@/components/Hero/HeroData/FurnitureHeroData";
import { DataCarouselClassicFurnitureTheme } from "@/components/PictureCarousel/DataCarouselClassicFurnitureTheme";
import { DataCarouselimages } from "@/components/PictureCarousel/DataCarouselImages";
import { DataProductClassicFurnitureTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";
import { DataProductFurnitureTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductFurnitureTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataSquareShapeProductCard } from "@/components/VerticalProductCard/DataSquareShapeProductCard";
import { DataVerticalProductsCard3 } from "@/components/VerticalProductCard/DataVerticalProductCard3";

export default {
  id: "classicFurniture",
  header: "header_centered_menu",
  footer: "big_footer",
  colors: { bg: "#000", text: "#fff" },
  home: [
    { section: "hero", variant: "hero_carousel", props: { slides: ClassicFurnitureHeroData } },
    {
      section: "productLayouts",
      variant: "productCarousel",
      props:{products: DataProductClassicFurnitureTheme}
    },

    {
      section: "verticalProductCard",
      variant: "verticalProductCard",
      props: {...DataVerticalProductsCard3 },
    },

    {
      section: "contentSection",
      variant:"headingAndDescription",
      props:{heading: "New Products", description:"dsa"}
    },
    
    {
      section: "productLayouts",
      variant: "productCardRowsForm",
      props: { products: DataProductClassicFurnitureTheme, paginationType: "showMore", showProductTabs: true, productTabsData: DataProductTabs }
    },

    
    {
      section: "emailSubscription",
      variant: "emailSubscription4",
      props: { title: "Join Our Email List", subtitle: "Signup for latest trends, products and inspiration", buttonText: "SUBSCRIBE"}
    },
{
  section:"contentSections",
  variant: "shippingFeatures",

},
    {
      section: "followUsSection",
      variant: "followUsSection1",
      props: { images: DataFollowUsSection2Furniture }
    },
  ],

  shop: [
    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: {
        title: "Shop",
        showCategory: true,
        categories: DataCategoriesClassicFurniture,
        minHeight: "520px",
        backgroundImage: "/ClassicFurniture/carousel3.png",
      },
    },
    {
      section: "shopLayout",
      variant: "default",
    },
    {
      section: "emailSubscription",
      variant: "emailSubscription2",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
    }
  ],


  products:
    [
      {
        section: "carouselDynamicBanner",
        variant: "carouselBanner",
        props: { title: "Products", showCategory: true, categories: DataCategoriesClassicFurniture, minHeight: "520px", backgroundImage: "/ClassicFurniture/carousel3.png" }
      },

      {
        section: "productLayouts",
        variant: "productGridView",
        props: { products: DataProductClassicFurnitureTheme, paginationType: "pagination", gridColumns: 4 }
      },

      {
        section: "emailSubscription",
        variant: "emailSubscription2",
        props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
      }
    ],


  contact: [
    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: { title: "Contact", showCategory: false, categories: DataCategoriesClassicFurniture, minHeight: "380px", backgroundImage: "/ClassicFurniture/carousel3.png" }
    },

    {
      section: "contactForm",
      variant: "contactSmallMap"

    },

    {
      section: "contactForm",
      variant: "contactForm2",
    },


    {
      section: "emailSubscription",
      variant: "emailSubscription3",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image:"https://netro-store-newdemo46.myshopify.com/cdn/shop/files/1009.jpg?v=1745561995&amp;width=1536&quot" }
    },

    {
          section: "followUsSection",
          variant: "followUsSection1",
          props: {images: DataFollowUsSection2Furniture}
        },

  ],




  about: [
    {
      section: "carouselDynamicBanner",
      variant: "carouselBanner",
      props: { title: "About", showCategory: false, categories: DataCategoriesClassicFurniture, minHeight: "320px", backgroundImage: "/ClassicFurniture/carousel3.png" }
    },


    {
      section: "contentSection",
      variant: "textImageSection",
      props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemePictures/girl1.webp", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
    },
    {
      section: "contentSection",
      variant: "textImageSection",
      props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemePictures/girl2.webp", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
    },

    {
      section: "contentSection",
      variant: "aboutDesignSection",

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
      section: "emailSubscription",
      variant: "emailSubscription3",
      props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image:"https://netro-store-newdemo46.myshopify.com/cdn/shop/files/1009.jpg?v=1745561995&amp;width=1536&quot" }
    },

    {
          section: "followUsSection",
          variant: "followUsSection1",
          props: {images: DataFollowUsSection2Furniture}
        },

  ],



   faqs: [
  
      {
        section: "carouselDynamicBanner",
        variant: "carouselBanner",
        props: { title: "Faqs", showCategory: false, categories: DataCategoriesClassicFurniture, minHeight: "320px", backgroundImage: "/ClassicFurniture/carousel3.png" }
      },
  
      {
        section:"contentSection",
        variant: "headingAndDescription",
        props:{heading:"Frequently Asked Questions", description:"Ask Any Thing"}
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


}
