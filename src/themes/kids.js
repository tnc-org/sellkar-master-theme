import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesToys } from "@/components/CrouselDynamicBanner/DataCategoriesToys";
import { DataToysEmailSubscription5 } from "@/components/EmailAndNewsSubscription/DataToysEmailSubscription5";
import { KidsThemeData } from "@/components/Hero/HeroData/KidsThemeData";
import { DataKidsMarquee2 } from "@/components/Marquee/DataKidsMarquee2";
import { DataBookStoreProductWithTitleAndQuantity } from "@/components/ProductLayouts/DataProductLayouts/DataBookStoreProductWithTitleAndQuantity";
import { DataKidsProductWithTitleAndQuantity } from "@/components/ProductLayouts/DataProductLayouts/DataKidsProductWithTitleAndQuantity";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataProductToysTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductToysTheme";
import { DataToysProductBigPictureWithCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductBigPictureWithCarousel";
import { DataToysProductCategoryCircle } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductCategoryCircle";
import { DataToysProductWithTitleAndSubtitle } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductWithTitleAndSubtitle";
import { DataToysBannerWithImagesTitleAndDescription } from "@/components/VerticalProductCard/DataVerticalProductCard/DataBannerWithImagesTitleAndDescription/DataToysBannerWithImagesTitleAndDescription";

export default {
    id: "kids",
    header: "header_transparent_black",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        {
            section: "hero",
            variant: "heroBigShopCards",
            props: { data: KidsThemeData }
        },
        {
            section: "marquee",
            variant: "marquee2",
            props: { data: DataKidsMarquee2 },
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: {
                heading: "Shop Now & Big Savings",
                marginTop: "py-2 mt-15 ",
                padding: "py-0",
                marginBottom: "mb-0",
                headingStyle: "text-4xl md:text-5xl font-regular text-[#E6493C] font-serif",
                
                description: "We design cute, comfy pieces you and your little one can mix, match and make their own. ",
                descriptionStyle: "text-blue-800"
            }
        },
        {
            section: "productLayouts",
            variant: "productWithTitleAndQuantity",
            props: { data: DataKidsProductWithTitleAndQuantity, padding: "" }
        },
        {
            section: "productLayouts",
            variant: "productCategoryCircle",
            props: { data: DataToysProductCategoryCircle, padding: "py-15 px-4" }
        },
        {
            section: "productLayouts",
            variant: "productWithTitleAndSubtitle",
            props: { data: DataToysProductWithTitleAndSubtitle, padding: "py-4 mb-15 px-4 md:px-10 lg:px-20" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "The week's highlights", marginTop: "py-2", marginBottom: "mb-0", headingStyle: "text-4xl font-regular" }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductToysTheme, showProductTabs: true, productTabsData: DataProductTabs, paginationType: "showMore", padding: "py-0" }
        },
        {
            section: "productLayouts",
            variant: "productBigPictureWithCarousel",
            props: { products: DataToysProductBigPictureWithCarousel, padding: "py-10 px-4 md:px-8" }
        },
        {
            section: "verticalProductCard",
            variant: "bannerWithImagesTitleAndDescription",
            props: { data: DataToysBannerWithImagesTitleAndDescription }
        },
        {
            section: "emailSubscription",
            variant: "emailSubscription5",
            props: { data: DataToysEmailSubscription5, padding: "" }
        }


    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesToys,
                minHeight: "520px",
                backgroundImage: "/ThemeToys/grid3.png",
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
                    categories: DataCategoriesToys,
                    minHeight: "520px",
                    backgroundImage: "/ThemeToys/grid3.png",
                }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: {
                    products: DataProductToysTheme,
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
                backgroundImage: "/ThemeToys/grid3.png",
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
            variant: "emailSubscription5",
            props: { data: DataToysEmailSubscription5, padding: "" }
        }
    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "About",
                showCategory: false,
                minHeight: "320px",
                backgroundImage: "/ThemeToys/grid3.png",
            }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeToys/grid1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeToys/grid2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeToys/grid3.png" }

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
            variant: "emailSubscription5",
            props: { data: DataToysEmailSubscription5, padding: "" }
        }

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Faqs",
                showCategory: false,
                minHeight: "320px",
                backgroundImage: "/ThemeToys/grid3.png"
            }
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
