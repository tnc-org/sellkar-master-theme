import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCeramicShowBrandLogo } from "@/components/ContentSections/DataContentSection/ShowBrandLogo/DataCeramicShowBrandLogo";
import { DataCategoriesCeramic } from "@/components/CrouselDynamicBanner/DataCategoriesCeramic";
import { DataCategoriesJewellery } from "@/components/CrouselDynamicBanner/DataCategoriesJewellery";
import { DataCeramicStylishProductCarousel } from "@/components/CrouselDynamicBanner/DataCeramicStylishProductCarousel";
import { DataFollowUsSection10Jewellery } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection10Jewellery";
import { DataFollowUsSectionCeramic } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSectionCeramic";
import { CeramicThemeData } from "@/components/Hero/HeroData/CeramicThemeData";
import { DataCeramicSmallHeroBanner } from "@/components/Hero/HeroData/DataCeramicSmallHeroBanner";
import { JewelleryThemeData } from "@/components/Hero/HeroData/JewelleryThemeData";
import { DataCeramicProductWithTitleAndSubtitle } from "@/components/ProductLayouts/DataProductLayouts/DataCeramicProductWithTitleAndSubtitle";
import { DataJewelleryLargeProductCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataJewelleryLargeProductCarousel";
import { DataProductCeramicTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductCeramicTheme";
import { DataProductJewelleryTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductJewelleryTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataClassicElectroSplitMediaSection } from "@/components/VerticalProductCard/DataVerticalProductCard/DataSplitMediaSection/DataClassicElectroSplitMediaSection";
import { DataJewelleryStylishProductCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataStylishProductCard/DataJewelleryStylishProductCard";

export default {
    id: "ceramic",
    header: "header_centered_menu",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: CeramicThemeData } },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { description: "OUR BEST SELLERS", descriptionStyle: "text-gray-900 font-medium", marginTop: "mt-0", marginBottom: 0 }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Designed with integrity", headingStyle: "text-2xl font-serif", marginTop: "mt-4", marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductCeramicTheme, showProductTabs: true, productTabsData: DataProductTabs, paginationType: "showMore", padding: "py-4 mb-7 md:py-15" }
        },
        {
            section: "carouselDynamicBanner",
            variant: "stylishProductCarousel",
            props: { data: DataCeramicStylishProductCarousel, padding: "py-20 mb-10 " }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "\"Millions of combinations, meaning you get a totally unique piece of furniture exactly the way you want it.\"", headingStyle: "text-gray-900   font-medium font-serif  max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl ",  marginTop: "py-2 mt-10", marginBottom: 0 }
        },
        {
            section: "contentSections",
            variant: "showBrandLogo",
            props: { data: DataCeramicShowBrandLogo, padding: "py-7 px-8 mb-10" }
        },
        {
            section: "productLayouts",
            variant: "productWithTitleAndSubtitle",
            props: { data: DataCeramicProductWithTitleAndSubtitle, padding: "py-4 mb-15 px-4 md:px-10 lg:px-20" }
        },
        {
            section: "hero",
            variant: "smallHeroBanner",
            props: { data: DataCeramicSmallHeroBanner, padding: "" }
        },
    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesCeramic,
                minHeight: "520px",
                backgroundImage: "/ThemeCeramic/ceramicCarousel5.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesCeramic, minHeight: "520px", backgroundImage: "/ThemeCeramic/ceramicCarousel5.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductCeramicTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeCeramic/ceramicCarousel5.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeCeramic/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionCeramic }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeCeramic/ceramicCarousel5.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeCeramic/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeCeramic/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeCeramic/ceramicCarousel2.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeCeramic/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSectionCeramic }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeCeramic/ceramicCarousel5.png", }
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
