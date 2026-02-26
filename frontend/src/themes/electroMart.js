import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesElectroMart } from "@/components/CrouselDynamicBanner/DataCategoriesElectroMart";
import { DataFollowUsSection9ElectroMart } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection9ElectroMart";
import { ElectroMartThemeData } from "@/components/Hero/HeroData/ElectroMartData";
import { ElectroMartMarqueeData } from "@/components/Marquee/ElectroMartMarqueeData";
import { DataProductElectroMartTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductElectroMartTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataElectroMartHorizontalTwoProductShowCase } from "@/components/VerticalProductCard/DataVerticalProductCard/DataHorizontalTwoProductShowCase/DataElectroMartHorizontalTwoProductShowCase";
import { DataElectroMartOneItemCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataOneItemCard/DataElectroMartOneItemCard";
import { DataElectroMartSmallShopCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataSmallShopCard/DataElectroMartSmallShopCard";

export default {
    id: "electroMart",
    header: "header_centered_menu",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: ElectroMartThemeData } },


        {
            section: "verticalProductCard",
            variant: "horizontalTwoProductShowCase",
            props: { cards: DataElectroMartHorizontalTwoProductShowCase }
        },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "BEST SELLER PRODUCTS", marginTop: "mt-10", marginBottom: 0 }
        },


        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductElectroMartTheme, productsTab: true, productTabsData: DataProductTabs, paginationType: "showMore" }
        },


        {
            section: "verticalProductCard",
            variant: "oneItemCard",
            props: { items: DataElectroMartOneItemCard }

        },
        {
            section: "verticalProductCard",
            variant: "smallShopCard",
            props: { items: DataElectroMartSmallShopCard }

        },
        {
            section: "marquee",
            variant: "default",
            props: { brands: ElectroMartMarqueeData },
        },


    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesElectroMart,
                minHeight: "520px",
                backgroundImage: "/ThemeElectroMart/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesElectroMart, minHeight: "520px", backgroundImage: "/ThemeElectroMart/carousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductElectroMartTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeElectroMart/carousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeElectroMart/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection9ElectroMart }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeElectroMart/carousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeElectroMart/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeElectroMart/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeElectroMart/carousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeElectroMart/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection9ElectroMart }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeElectroMart/carousel3.png", }
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
