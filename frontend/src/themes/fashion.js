import { DataFashionFeatures2 } from "@/components/ContentSections/DataContentSection/DataFashionFeatures2";
import { DataReviewCard } from "@/components/ContentSections/DataContentSection/DataReviewCard";
import { DataReviewsCarousel } from "@/components/ContentSections/DataContentSection/DataReviewsCarousel";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesFashion } from "@/components/CrouselDynamicBanner/DataCategoriesFashion";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection4Perfume } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection4Perfume";
import { FashionThemeData } from "@/components/Hero/HeroData/FashionThemeData";
import { FashionMarqueeData } from "@/components/Marquee/FashionMarqueeData";
import { DataCarouselFashionTheme } from "@/components/PictureCarousel/DataCarouselFashionTheme";
import { DataProductFashionTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductFashionTheme";
import { DataProductPerfumeTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductPerfumeTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataImageGridCardFashion } from "@/components/VerticalProductCard/DataImageGridCardFashion";
import { DataHorizontalTwoProductShowCase } from "@/components/VerticalProductCard/DataVerticalProductCard/DataHorizontalTwoProductShowCase/DataHorizontalTwoProductShowCase";
import { DataFashionOneDayDeal } from "@/components/VerticalProductCard/DataVerticalProductCard/OneDayDealData/DataFashionOneDayDeal";

export default {
    id: "fashion",
    header: "header_centered_logo",
    footer: "blackFooter",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: FashionThemeData } },

        {
            section: "contentSections",
            variant: "features2",
            props: { data: DataFashionFeatures2 }
        },
        {
            section: "verticalProductCard",
            variant: "imageGridCard",
            props: { cards: DataImageGridCardFashion }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "New Arrivals", marginTop: 20, marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductFashionTheme }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductFashionTheme, paginationType: "showMore", showProductTabs: true, productTabsData: DataProductTabs }
        },
        {
            section: "verticalProductCard",
            variant: "horizontalTwoProductShowCase",
            props: { cards: DataHorizontalTwoProductShowCase }
        },
        {
            section: "verticalProductCard",
            variant: "oneDayDeal",
            props: { cards: DataFashionOneDayDeal }
        },
        {
            section: "pictureCarousel",
            variant: "pictureCarousel",
            props: {
                images:DataCarouselFashionTheme, title: "STREETWEAR ON THE HIGH FASHION", subTitle: "Discover the latest trends and timeless pieces, where we cerate collections that let you express yourself efforlessly",
                buttonProps: {
                    text:"EXPLORE NOW",
                    bgColor:"bg-white",
                    textColor:"text-black",
                }
            }
        },
        {
            section: "contentSections",
            variant: "reviewsCarousel",
            props: { reviews: DataReviewsCarousel }
        },
        {
            section: "marquee",
            variant: "default",
            props: { brands: FashionMarqueeData },
        },
    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesFashion,
                minHeight: "520px",
                backgroundImage: "/ThemeFashion/fashioncarousel3.png",
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
