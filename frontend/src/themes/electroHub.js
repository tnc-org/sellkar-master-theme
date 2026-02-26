import { DataElectroHubFeatures } from "@/components/ContentSections/DataContentSection/DataFeatures/DataElectroHubFeatures";
import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { DataReviewsCarousel1 } from "@/components/ContentSections/DataContentSection/DataReviewsCarousel/DataReviewsCarousel1";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesElectroHub } from "@/components/CrouselDynamicBanner/DataCategoriesElectroHub";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection3Beauty } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection3Beauty";
import { DataFollowUsSection4Perfume } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection4Perfume";
import { DataFollowUsSection8ElectroHub } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection8ElectroHub";
import { ElectroHubThemeData } from "@/components/Hero/HeroData/ElectroHubData";
import { PerfumeThemeData } from "@/components/Hero/HeroData/PerfumeThemeData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataProductElectroHubTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductElectroHubTheme";
import { DataProductPerfumeTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataImageGridCard } from "@/components/VerticalProductCard/DataImageGridCard";
import { DataElectroHubHorizontalTwoProductShowCase } from "@/components/VerticalProductCard/DataVerticalProductCard/DataHorizontalTwoProductShowCase/DataElectroHubHorizontalTwoProductShowCase";
import { DataElectroHubOneItemCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataOneItemCard/DataElectroHubOneItemCard";
import { DataElectroHubSquareShapeProductCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataSquareShapeProductCard/DataElectroHubSquareShapeProductCard";

export default {
    id: "electroHub",
    header: "header_centered_logo",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: ElectroHubThemeData } },





        {
            section: "contentSections",
            variant: "features",
            props: { features: DataElectroHubFeatures }
        },


        {
            section: "verticalProductCard",
            variant: "horizontalTwoProductShowCase",
            props: { cards: DataElectroHubHorizontalTwoProductShowCase }
        },

        {
            section: "verticalProductCard",
            variant: "squareShapeProductCard",
            props: { cardsData: DataElectroHubSquareShapeProductCard.data },
        },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "NEW ARRIVALS", marginTop: "mt-15", marginBottom: 0 }
        },

        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductElectroHubTheme, productsTab: true, productTabsData: DataProductTabs, paginationType: "showMore" }
        },
        {
            section: "verticalProductCard",
            variant: "oneItemCard",
            props: { items: DataElectroHubOneItemCard }
        },
        {
            section: "contentSections",
            variant: "reviewsCarousel",
            props: { reviews: DataReviewsCarousel1, backgroundColor: "bg-gray-500", color: "black" }
        },
        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection8ElectroHub }
        },
    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesElectroHub,
                minHeight: "520px",
                backgroundImage: "/ThemeElectroHub/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesElectroHub, minHeight: "520px", backgroundImage: "/ThemeElectroHub/carousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductElectroHubTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeElectroHub/carousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeElectroHub/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection8ElectroHub }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeElectroHub/carousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeElectroHub/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeElectroHub/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeElectroHub/carousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeElectroHub/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection8ElectroHub}
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeElectroHub/carousel3.png", }
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
