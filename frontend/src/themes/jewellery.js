import { DataElectroHubFeatures } from "@/components/ContentSections/DataContentSection/DataFeatures/DataElectroHubFeatures";
import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesJewellery } from "@/components/CrouselDynamicBanner/DataCategoriesJewellery";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection10Jewellery } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection10Jewellery";
import { DataFollowUsSection4Perfume } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection4Perfume";
import { JewelleryThemeData } from "@/components/Hero/HeroData/JewelleryThemeData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataJewelleryLargeProductCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataJewelleryLargeProductCarousel";
import { DataProductJewelleryTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductJewelleryTheme";
import { DataProductPerfumeTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataImageGridCard } from "@/components/VerticalProductCard/DataImageGridCard";
import { DataClassicElectroSplitMediaSection } from "@/components/VerticalProductCard/DataVerticalProductCard/DataSplitMediaSection/DataClassicElectroSplitMediaSection";
import { DataJewelleryStylishProductCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataStylishProductCard/DataJewelleryStylishProductCard";

export default {
    id: "jewellery",
    header: "header_centered_menu",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: JewelleryThemeData } },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "What's Hot", marginTop: "mt-15", marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "largeProductCarousel",
            props: { items: DataJewelleryLargeProductCarousel }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "TRENDING JEWELLERY", marginTop: "mt-15", marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductJewelleryTheme, showProductTabs: true, productTabsData: DataProductTabs, paginationType: "showMore" }
        },

        {
            section: "verticalProductCard",
            variant: "splitMediaSection",
            props: { ...DataClassicElectroSplitMediaSection[1] }
        },


        // {
        //     section: "contentSections",
        //     variant: "features",
        //     props: { features: DataElectroHubFeatures }
        // },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Take Another Look", marginTop: "mt-10", marginBottom: 0 }
        },

        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductJewelleryTheme }
        },
       {
            section: "verticalProductCard",
            variant: "stylishProductCard",
            props: { ...DataJewelleryStylishProductCard }
        },

      {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection10Jewellery }
        },

    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesJewellery,
                minHeight: "520px",
                backgroundImage: "/ThemeJewellery/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesJewellery, minHeight: "520px", backgroundImage: "/ThemeJewellery/carousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductJewelleryTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeJewellery/carousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeJewellery/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection10Jewellery }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeJewellery/carousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeJewellery/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeJewellery/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeJewellery/carousel4.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeJewellery/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection10Jewellery }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeJewellery/carousel3.png", }
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
