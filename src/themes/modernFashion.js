import { DataFashionFeatures2 } from "@/components/ContentSections/DataContentSection/DataFashionFeatures2";
import { DataModernFashionReviewCarousel } from "@/components/ContentSections/DataContentSection/DataReviewsCarousel/DataModernFashionReviewCarousel";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesModernFashion } from "@/components/CrouselDynamicBanner/DataCategoriesModernFashion";
import { DataFollowUsSectionModernFashion } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSectionModernFashion";
import { ModernFashionThemeData } from "@/components/Hero/HeroData/ModernFashionThemeData";
import DataModernFashionMarqueeSectionWithBg from "@/components/Marquee/DataModernFashionMarqueeSectionWithBg";
import { DataModernFashionProductCardWithHoverButton } from "@/components/ProductLayouts/DataProductLayouts/DataModernFashionProductCardWithHoverButton";
import { DataProductModernFashionTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductModernFashionTheme";
import { DataModernFashionCategoryBigDetailedSection } from "@/components/VerticalProductCard/DataVerticalProductCard/DataCategoryBigDetailedSection/DataModernFashionCategoryBigDetailedSection";
import { DataModernFashionHorizontalTwoProductShowCase } from "@/components/VerticalProductCard/DataVerticalProductCard/DataHorizontalTwoProductShowCase/DataModernFashionHorizontalTwoProductShowCase";
import { DataModernFashionImageGridCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataImageGridCard/DataModernFashionImageGridCard";
import DataModernFashionLatestProductCarousel from "@/components/VerticalProductCard/DataVerticalProductCard/DataLatestProductCarousel/DataModernFashionLatestProductCarousel";

export default {
    id: "modernFashion",
    header: "header_centered_menu",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: ModernFashionThemeData } },
        {
            section: "contentSections",
            variant: "features2",
            props: { data: DataFashionFeatures2 }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "WHAT'S TRENDING", marginTop: 0, marginBottom: "mb-[-20px]", headingStyle: "font-bold font-inter" }
        },
        {
            section: "verticalProductCard",
            variant: "horizontalTwoProductShowCase",
            props: { cards: DataModernFashionHorizontalTwoProductShowCase }
        },
        {
            section: "productLayouts",
            variant: "productCardWithHoverButton",
            props: { data: DataModernFashionProductCardWithHoverButton, padding: "px-4" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "SHOP CATEGORIES", description: "Best of category shop for you", marginTop: "mt-25 mb-[-5px]", headingStyle: "font-bold font-inter mb-[10px]" }
        },
        {
            section: "verticalProductCard",
            variant: "categoryBigDetailedSection",
            props: { sections: DataModernFashionCategoryBigDetailedSection, padding: "px-4 py-12" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "NEW ARRIVALS", marginTop: "mt-2 mb-[-15px]", headingStyle: "text-4xl font-bold font-inter mb-[10px]" }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductModernFashionTheme }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "FEATURED ITEMS", marginTop: "mt-20 mb-[-15px]", headingStyle: "text-4xl font-bold font-inter mb-[10px]" }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductModernFashionTheme }
        },
        {
            section: "contentSections",
            variant: "reviewsCarousel",
            props: { reviews: DataModernFashionReviewCarousel, showBackground: true, backgroundColor: "bg-white", color: "black", }
        },
        {
            section: "marquee",
            variant: "marqueeSectionWithBg",
            props: { logos: DataModernFashionMarqueeSectionWithBg, padding:"py-15" },
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "OUR LATEST UPDATE", marginTop: "", headingStyle: "text-4xl font-bold font-inter mb-[10px]" }
        },
        {
            section: "verticalProductCard",
            variant: "latestProductCarousel",
            props: { posts: DataModernFashionLatestProductCarousel, padding: "px-8 pb-10" }
        },
        {
            section: "emailSubscription",
            variant: "emailSubscription3",
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeModernFashion/email.png" }
        },
        {
            section: "verticalProductCard",
            variant: "imageGridCard",
            props: { cards: DataModernFashionImageGridCard }
        },
    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesModernFashion,
                minHeight: "520px",
                backgroundImage: "/ThemeModernFashion/modernfashioncarousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesModernFashion, minHeight: "520px", backgroundImage: "/ThemeModernFashion/modernfashioncarousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductModernFashionTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px",  backgroundImage: "/ThemeModernFashion/modernfashioncarousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeModernFashion/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionModernFashion }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeModernFashion/modernfashioncarousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemePerfume/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemePerfume/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "/ThemeModernFashion/modernfashioncarousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeModernFashion/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionModernFashion }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeModernFashion/modernfashioncarousel3.png" }
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
