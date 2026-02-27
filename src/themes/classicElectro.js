import { DataFashionFeatures2 } from "@/components/ContentSections/DataContentSection/DataFashionFeatures2";
import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesClassicElectro } from "@/components/CrouselDynamicBanner/DataCategoriesClassicElectro";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection3Beauty } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection3Beauty";
import { DataFollowUsSection4Perfume } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection4Perfume";
import { DataFollowUsSection7ClassicElectro } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection7ClassicElectro";
import { PerfumeThemeData } from "@/components/Hero/HeroData/PerfumeThemeData";
import { classicElectroMarqueeData } from "@/components/Marquee/ClassicElectroMarqueeData";
import { brands } from "@/components/Marquee/MarqueeData";
import { DataProductClassicElectroTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductClassicElectroTheme";
import { DataProductPerfumeTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataImageGridCard } from "@/components/VerticalProductCard/DataImageGridCard";
import { DataImageGridCardFashion } from "@/components/VerticalProductCard/DataImageGridCardFashion";
import { DataClassicElectroDynamicGrid } from "@/components/VerticalProductCard/DataVerticalProductCard/DataDynamicGrid/DataClassicElectroDynamicGrid";
import { DataClassicElectroImageGridCard } from "@/components/VerticalProductCard/DataVerticalProductCard/DataImageGridCard/DataClassicElectroImageGridCard";
import { DataClassicElectroSplitMediaSection } from "@/components/VerticalProductCard/DataVerticalProductCard/DataSplitMediaSection/DataClassicElectroSplitMediaSection";

export default {
    id: "classicElectro",
    header: "header_centered_logo",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        // { section: "hero", variant: "hero_carousel", props: { slides: PerfumeThemeData } },
        {
            section: "verticalProductCard",
            variant: "dynamicGrid",
            props: { data: DataClassicElectroDynamicGrid, colGrid: "md:grid-cols-3", gap: "gap-4", rowHeight: "350px" }
        },

        {
            section: "contentSections",
            variant: "features2",
            props: { data: DataFashionFeatures2 }
        },

        {
            section: "verticalProductCard",
            variant: "splitMediaSection",
            props: { ...DataClassicElectroSplitMediaSection[0] }
        },


        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "BEST SELLERS", description: "IMprove your quality of life with innovative tech designs", marginTop: "mt-20", marginBottom: "mb-0" }
        },

        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductClassicElectroTheme }
        },

        {
            section: "verticalProductCard",
            variant: "imageGridCard",
            props: { cards: DataClassicElectroImageGridCard, bgColor: "bg-red-600", gap: "gap-5" }
        },


        {
            section: "productLayouts",
            variant: "imageWithProductGrid",
            props: {
                image: "ThemeClassicElectro/home6.png", title: "Smartwatches", subtitle: "Your transeasonal saviour",
                products: DataProductClassicElectroTheme,
                contentAlignment: "center",
                contentJustify: "center",
                imagePosition: "left",
                buttonProps: {
                    text: "SHOP NOW",
                    border: "border border-2 border-white",
                    padding: "px-7",
                    textColor: "text-white",
                    bgColor: "bg-transparent",
                    

                }
            }
        },


        {
            section: "marquee",
            variant: "default",
            props: { brands: classicElectroMarqueeData},
        },



         {
            section: "productLayouts",
            variant: "imageWithProductGrid",
            props: {
                image: "ThemeClassicElectro/home7.png", title: "Smartwatches", subtitle: "Your transeasonal saviour",
                products: DataProductClassicElectroTheme,
                contentAlignment: "center",
                contentJustify: "center",
                imagePosition: "right",
                buttonProps: {
                    text: "SHOP NOW",
                    border: "border border-2 border-white",
                    padding: "px-7",
                    textColor: "text-white",
                    bgColor: "bg-transparent",
                    

                }
            }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection7ClassicElectro}
        },
         {
            section: "emailSubscription",
            variant: "emailSubscription3",
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeClassicElectro/email.png" }
        },


    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesClassicElectro,
                minHeight: "520px",
                backgroundImage: "/ThemeClassicElectro/carousel3.png",
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
                props: { title: "Products", showCategory: true, categories: DataCategoriesClassicElectro, minHeight: "520px", backgroundImage: "/ThemeClassicElectro/carousel3.png",}
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductClassicElectroTheme, paginationType: "pagination", gridColumns: 4 }
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
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeClassicElectro/carousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeClassicElectro/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection7ClassicElectro }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeClassicElectro/carousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClassicElectro/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClassicElectro/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "/ThemeClassicElectro/carousel3.png", }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeClassicElectro/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection7ClassicElectro }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeClassicElectro/carousel3.png", }
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
