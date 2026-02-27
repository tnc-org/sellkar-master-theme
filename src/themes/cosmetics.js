import { DataImagesShowCase } from "@/components/ContentSections/DataContentSection/DataImagesShowCase";
import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { DataReviewCardCosmetics } from "@/components/ContentSections/DataContentSection/DataReviewCardCosmetics";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesBeauty } from "@/components/CrouselDynamicBanner/DataCategoriesBeauty";
import { DataCategoriesClassicFurniture } from "@/components/CrouselDynamicBanner/DataCategoriesClassicFurniture";
import { DataCategoriesCosmetics } from "@/components/CrouselDynamicBanner/DataCategoriesCosmetics";
import { DataFollowUsSection2Furniture } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection2Furniture";
import { DataFollowUsSection3Beauty } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection3Beauty";
import { DataFollowUsSection5Cosmetics } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection5Cosmetics";
import { BeautyThemeData } from "@/components/Hero/HeroData/BeautyThemeData";
import { CosmeticsThemeData } from "@/components/Hero/HeroData/CosmeticsThemeData";
import { DataHeroGridCard } from "@/components/Hero/HeroData/DataHeroGridCard";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataProductBeautyTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductBeautyTheme";
import { DataProductClassicFurnitureTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductClassicFurnitureTheme";
import { DataProductCosmeticsTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductCosmeticsTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataBlogCard } from "@/components/VerticalProductCard/DataBlogCard";
import { DataImageWithColorProduct } from "@/components/VerticalProductCard/DataImageWithColorProductCard";

export default {
    id: "cosmetics",
    header: "header_centered_menu",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "heroCategoryCard", props: { cards: CosmeticsThemeData } },



        {
            section: "contentSections",
            variant: "storyCard",
            props: {
                title: "Story.",
                description: "With over 1,800 stores ranging from local community pharmacies to large destination health and beauty stores, our purpose is to support our customers and patients through every stage of their lives.",
                images: [
                    "ThemeCosmetics/story1.png",
                    "ThemeCosmetics/story2.png",
                    "ThemeCosmetics/story3.png",
                ]
            }
        },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Product Features", description: "Don't Miss Today's Featured Deals", marginTop: 0, marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductCosmeticsTheme, paginationType: "showMore" }
        },




        {
            section: "hero",
            variant: "heroGridCard",
            props: {
                defaultBgImage: "ThemeCosmetics/cosmeticscarousel4.png",
                cards: DataHeroGridCard
            }
        },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "New Hot Deals", description: "Don't Miss Today's Featured Deals", marginTop: 0, marginBottom: 0 }
        },

        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductCosmeticsTheme }
        },
        
        

         {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Testimonials & Reviews", marginTop: "mt-20", marginBottom: 0 }
        },

        {
                    section:"contentSections",
                    variant:"reviewCard",
                    props:{reviews: DataReviewCardCosmetics}
                },

        {
            section: "marquee",
            variant: "default",
            props: { brands },
        },

         {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Our Blogs", description: "Your guide to chic and comfortable looks", marginTop: "mt-10", marginBottom: 0 }
        },

        {
            section:"verticalProductCard",
            variant:"blogCard",
            props:{blogs: DataBlogCard}
        }

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
                backgroundImage: "/ThemeCosmetics/cosmeticscarousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesCosmetics, minHeight: "520px", backgroundImage: "/ThemeBeauty/cosmeticscarousel3.png", }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeBeauty/cosmeticscarousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeCosmetics/email.png" }
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
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeCosmetics/cosmeticscarousel3.png" }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeCosmetics/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeCosmetics/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeCosmetics/about3.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeCosmetics/email.png" }
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
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeCosmetics/cosmeticscarousel3.png" }
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
