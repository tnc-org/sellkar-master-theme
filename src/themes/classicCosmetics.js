import { DataElectroHubFeatures } from "@/components/ContentSections/DataContentSection/DataFeatures/DataElectroHubFeatures";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesCosmetics } from "@/components/CrouselDynamicBanner/DataCategoriesCosmetics";
import { DataFollowUsSection5Cosmetics } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection5Cosmetics";
import { ClassicCosmeticsThemeData } from "@/components/Hero/HeroData/ClassicCosmetics";
import { DataClassicCosmeticsProductCardWithVideo } from "@/components/ProductLayouts/DataProductLayouts/DataClassicCosmeticsProductCardWithVideo";
import { DataClassicCosmeticsSmallProductCard } from "@/components/ProductLayouts/DataProductLayouts/DataClassicCosmeticsSmallProductCard";
import { DataProductCosmeticsTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductCosmeticsTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataClassicCosmeticsImageGridCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataImageGridCard/DataClassicCosmeticsImageGridCard";

export default {
    id: "classicCosmetics",
    header: "header_drawer",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: ClassicCosmeticsThemeData } },

        {
            section: "productLayouts",
            variant: "smallProductCard",
            props: { ...DataClassicCosmeticsSmallProductCard }
        },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Deals Of The Day", marginTop: "mt-15", marginBottom: 0 }
        },

        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductCosmeticsTheme }
        },
        {
            section:"contentSections",
            variant:"whyChooseUs1",
            props:{image:"ThemeClassicCosmetics/home9.png", title:"Why Choose Us?", subtitle:"Our purpose is to build solutions that remove barriers preventing  people from doing their best work, and this is at the heart."}
        },

        {
             section: "productLayouts",
             variant: "productCardWithVideo",
             props: { products: DataClassicCosmeticsProductCardWithVideo}
           },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Choosen For You", marginTop:"mt-15", marginBottom: "mb-0" }
        },


        {
             section: "productLayouts",
             variant: "productCardRowsForm",
             props: { products: DataProductCosmeticsTheme, paginationType: "showMore", showProductTabs: true, productTabsData: DataProductTabs }
           },

        {
            section: "verticalProductCard",
            variant: "imageGridCard",
            props: { cards: DataClassicCosmeticsImageGridCard }
        },

        {
            section: "contentSections",
            variant: "features",
            props: { features: DataElectroHubFeatures }
        },


    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesCosmetics,
                minHeight: "520px",
                backgroundImage: "/ThemeClassicCosmetics/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesCosmetics, minHeight: "520px", backgroundImage: "/ThemeClassicCosmetics/carousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductCosmeticsTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px",  backgroundImage: "/ThemeClassicCosmetics/carousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeClassicCosmetics/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection5Cosmetics }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px",  backgroundImage: "/ThemeClassicCosmetics/carousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClassicCosmetics/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClassicCosmetics/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeClassicCosmetics/carousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeClassicCosmetics/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection5Cosmetics }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px",  backgroundImage: "/ThemeClassicCosmetics/carousel3.png", }
        },

        {
            section: "contentSection",
            variant: "headingAndDescription",
            props: { heading: "Frequently Asked Questions", description: "Ask Any Thing" }
        },

        {
            section: "accordianFaqs",
            variant: "accordianFaqs"
        },

        {
            section: "emailSubscription",
            variant: "emailSubscription2",
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit" }
        }
    ]


}
