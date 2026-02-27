import { DataGlassesFeatures } from "@/components/ContentSections/DataContentSection/DataFeatures/DataGlassesFeatures";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesGlasses } from "@/components/CrouselDynamicBanner/DataCategoriesGlasses";
import { DataFollowUsSectionGlasses } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSectionGlasses";
import { DataGlassesSmallHeroBanner } from "@/components/Hero/HeroData/DataGlassesSmallHeroBanner";
import { GlassesThemeData } from "@/components/Hero/HeroData/GlassesThemeData";
import { DataGlassesCategoryGrid } from "@/components/ProductLayouts/DataProductLayouts/DataGlassesCategoryGrid";
import { DataGlassesProductWithTitleOnly } from "@/components/ProductLayouts/DataProductLayouts/DataGlassesProductWithTitleOnly";
import { DataProductGlassesTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductGlassesTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";

export default {
    id: "glasses",
    header: "header_centered_menu",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: GlassesThemeData } },
        {
            section: "productLayouts",
            variant: "categoryGrid",
            props: { data: DataGlassesCategoryGrid, padding: "py-5 px-4" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "HOT THIS WEEK", marginTop: "py-10", marginBottom: "mb-0", headingStyle: "text-4xl font-bold font-inter" }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductGlassesTheme, productsTab: true, productTabsData: DataProductTabs, paginationType: "showMore", padding: "py-0" }
        },
        {
            section: "hero",
            variant: "smallHeroBanner",
            props: { data: DataGlassesSmallHeroBanner, padding: "py-10" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "DISCOVER MORE", description: "Luxe, lightweight, and made with the perfect blend of cashmere", marginTop: "py-5", marginBottom: "mb-0", headingStyle: "text-4xl font-bold font-inter" }
        },
        {
            section: "productLayouts",
            variant: "productWithTitleOnly",
            props: { data: DataGlassesProductWithTitleOnly, padding: "py-10 px-4 md:px-8" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "WE PROMISE", marginTop: "mt-10 mb-[-20]", marginBottom: "mb-0", headingStyle: "text-4xl font-bold font-inter" }
        },
        {
            section: "contentSections",
            variant: "features",
            props: { features: DataGlassesFeatures }
        }

    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesGlasses,
                minHeight: "520px",
                backgroundImage: "/ThemeGlasses/glassesCarousel2.png",
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
                props: {
                    title: "Products",
                    showCategory: true,
                    categories: DataCategoriesGlasses,
                    minHeight: "520px",
                    backgroundImage: "/ThemeGlasses/glassesCarousel2.png",
                }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: {
                    products: DataProductGlassesTheme,
                    paginationType: "pagination",
                    gridColumns: 4
                }
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
            props: {
                title: "Contact",
                showCategory: false,
                minHeight: "380px",
                backgroundImage: "/ThemeGlasses/glassesCarousel2.png",
            }
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
            props: {
                title: "Our Newsleter",
                subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam",
                buttonText: "Submit",
                image: "/ThemeGlasses/email.png",
            }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionGlasses }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "About",
                showCategory: false,
                minHeight: "320px",
                backgroundImage: "/ThemeGlasses/glassesCarousel2.png"
            }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeGlasses/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeGlasses/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeGlasses/glassesCarousel2.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeGlasses/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionGlasses }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeGlasses/glassesCarousel2.png" }
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
