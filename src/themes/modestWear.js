import { DataImagesShowCase } from "@/components/ContentSections/DataContentSection/DataImagesShowCase";
import { DataModestWearLatestNewsSection } from "@/components/ContentSections/DataContentSection/DataLatestNewsSection/DataModestWearLatestNewsSection";
import { DataModestWearReviewCarouselWithBg, ModestWearReviewCarouselWithBgConfig } from "@/components/ContentSections/DataContentSection/DataReviewsCarousel/DataModestWearReviewCarouselWithBg";
import { DataReviewsCarousel1 } from "@/components/ContentSections/DataContentSection/DataReviewsCarousel/DataReviewsCarousel1";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesBeauty } from "@/components/CrouselDynamicBanner/DataCategoriesBeauty";
import { DataCategoriesModestWear } from "@/components/CrouselDynamicBanner/DataCategoriesModestWear";
import { DataFollowUsSection3Beauty } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection3Beauty";
import { DataFollowUsSectionModestWear } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSectionModestWear";
import { ModestWearThemeData } from "@/components/Hero/HeroData/ModestWearThemeData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataModestWearProductCardWithVideo } from "@/components/ProductLayouts/DataProductLayouts/DataModestWearProductCardWithVideo";
import { DataProductBeautyTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductBeautyTheme";
import { DataProductFashionTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductFashionTheme";
import { DataProductModestWearTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductModestWearTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataModestWearImageGridCard2 } from "@/components/VerticalProductCard/DataVerticalProductCard/DataImageGridCard/DataModestWearImageGridCard2";

export default {
    id: "modestWear",
    header: "header_transparent_black",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: ModestWearThemeData } },
        {
            section: "verticalProductCard",
            variant: "imageGridCard2",
            props: { data: DataModestWearImageGridCard2, heading: "Top Brands" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Shop new arrivals", description: "Explore our latest arrivals, thoughtfully designed to elevate your everyday style", marginTop: "mt-10", headingStyle: "text-5xl font-serif", marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCardWithVideo2",
            props: { products: DataModestWearProductCardWithVideo }
        },
        {
            section: "contentSections",
            variant: "reviewsCarouselWithBg",
            props: { reviews: DataModestWearReviewCarouselWithBg, ...ModestWearReviewCarouselWithBgConfig }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductModestWearTheme, paginationType: "showMore", showProductTabs: true, productTabsData: DataProductTabs }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Latest News", marginTop: "mt-10", headingStyle: "text-5xl font-serif", marginBottom: 0 }
        },
        {
            section: "contentSections",
            variant: "latestNewsSection",
            props: { data: DataModestWearLatestNewsSection }
        },

    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesModestWear,
                minHeight: "520px",
                backgroundImage: "/ThemeModestWear/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesModestWear, minHeight: "520px", backgroundImage: "/ThemeModestWear/carousel3.png" }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductModestWearTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeModestWear/carousel3.png" }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeModestWear/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionModestWear }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeModestWear/carousel3.png" }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeModestWear/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeModestWear/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeModestWear/carousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeModestWear/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionModestWear }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeModestWear/carousel3.png" }
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
