import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection3Beauty } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection3Beauty";
import { DataFollowUsSection4Perfume } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection4Perfume";
import { PerfumeThemeData } from "@/components/Hero/HeroData/PerfumeThemeData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataProductPerfumeTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataImageGridCard } from "@/components/VerticalProductCard/DataImageGridCard";

export default {
    id: "perfume",
    header: "header_centered_logo",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: PerfumeThemeData } },

        {
            section: "marquee",
            variant: "default",
            props: { brands },
        },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Choosen For You", marginTop: 20, marginBottom: 0 }
        },


        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductPerfumeTheme, productsTab: true, productTabsData: DataProductTabs, paginationType: "showMore" }
        },

        {
            section: "verticalProductCard",
            variant: "imageGridCard",
            props: { cards: DataImageGridCard }
        },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Signature Product", marginTop: 40, marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductPerfumeTheme }
        },
        {
            section: "verticalProductCard",
            variant: "imageWithContent",
            props: {
                image: "/ThemePerfume/vertical1.png",
                subtitle: "Nourish & soften skin",
                title: "You're doing something good for your self",
                description: "Made using clean, non-toxic ingredients, our products are designed for everyone.",
                buttonText: "ALL PRODUCTS",
                buttonBg: "black",
                buttonTextColor: "text-white",
                link: "/products",
                reverseRow: true
            },
        },
        {
            section: "verticalProductCard",
            variant: "picturesWithOverlayCard",
            props: {
                leftImage: "/ThemePerfume/content1.png",
                rightImage: "/ThemePerfume/content2.png",
                title: "Fragrance Highlights",
                description: "Discover our signature scents curated to captivate your senses. From timeless classics to modern blends, our curated fragrances are handpicked for their unique appeal.",
                buttonText: "ALL PRODUCTS",
                link: "/products",
                buttonProps: {
                    buttonBg: "bg-white",
                    buttonTextColor: "text-black",
                    padding: "px-10",
                }
            },
        },




        {
            section: "contentSections",
            variant: "reviewCard",
            props: { reviews: DataReviewCard }
        }

    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesPerfume,
                minHeight: "520px",
                backgroundImage: "/ThemePerfume/perfumecarousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesPerfume, minHeight: "520px", backgroundImage: "/ThemePerfume/perfumecarousel3.png" }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductPerfumeTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemePerfume/perfumecarousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemePerfume/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection4Perfume }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemePerfume/perfumecarousel3.png" }
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
            props: { image: "ThemePerfume/grid1.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemePerfume/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection4Perfume }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemePerfume/perfumecarousel3.png" }
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
