import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesBookStore } from "@/components/CrouselDynamicBanner/DataCategoriesBooStore";
import { DataCategoriesToys } from "@/components/CrouselDynamicBanner/DataCategoriesToys";
import { DataBookStoreEmailSubscription6 } from "@/components/EmailAndNewsSubscription/DataBookStoreEmailSubscription6";
import { DataToysEmailSubscription5 } from "@/components/EmailAndNewsSubscription/DataToysEmailSubscription5";
import { BookStoreThemeData } from "@/components/Hero/HeroData/BookStoreThemeData";
import { ToysThemeData } from "@/components/Hero/HeroData/ToysThemeData";
import { DataBookStoreLargeProductCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataBookStoreLargeProductCarousel";
import { DataBookStoreProductWithTitleAndQuantity } from "@/components/ProductLayouts/DataProductLayouts/DataBookStoreProductWithTitleAndQuantity";
import { DataJewelleryLargeProductCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataJewelleryLargeProductCarousel";
import { DataProductBookStoreTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductBookStoreTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataProductToysTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductToysTheme";
import { DataToysProductBigPictureWithCarousel } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductBigPictureWithCarousel";
import { DataToysProductCategoryCircle } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductCategoryCircle";
import { DataToysProductWithTitleAndSubtitle } from "@/components/ProductLayouts/DataProductLayouts/DataToysProductWithTitleAndSubtitle";
import { DataToysBannerWithImagesTitleAndDescription } from "@/components/VerticalProductCard/DataVerticalProductCard/DataBannerWithImagesTitleAndDescription/DataToysBannerWithImagesTitleAndDescription";
import { padding } from "@mui/system";

export default {
    id: "bookStore",
    header: "header_centered_logo",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        { section: "hero", variant: "hero_carousel", props: { slides: BookStoreThemeData } },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Member Favorites", marginTop: "py-2 mt-20", marginBottom: "mb-0", headingStyle: "md:text-start  text-4xl md:text-5xl text-4xl font-regular font-serif" }
        },
        {
            section: "productLayouts",
            variant: "largeProductCarousel",
            props: { items: DataBookStoreLargeProductCarousel, padding: "py-0" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Best Sellers", marginTop: "py-2 mt-15 mb-[-40]", padding: "py-0", marginBottom: "mb-0", headingStyle: "md:text-start md:px-16 text-4xl  md:text-5xl font-regular font-serif" }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductBookStoreTheme, padding: "mb-15" }
        },
        {
            section: "contentSections",
            variant: "textImageSection",
            props: {
                image: "/ThemeBookStore/banner2.png",
                title: "Inspiration for Every Age.",
                description: "81% of students whom traditionally used bound books to conduct research are now using digital devices.",
                titleStyle: "font-serif text-6xl",
                link: "/products",
                reverseRow: false,
                flexReversed: true,
                padding: "py-0 px-4 md:px-30",
                buttonProps: {
                    text: "READ MORE",
                    bgColor: "bg-black",
                    textColor: "text-white",
                    padding: "px-7",
                    hoverTextColor: "text-white",
                    rounded: "rounded-sm",
                }
            },
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Just Released", marginTop: "py-2 mt-15 mb-[-40]", padding: "py-0", marginBottom: "mb-0", headingStyle: "md:text-start md:px-16 text-4xl md:text-5xl font-regular font-serif" }
        },
        {
            section: "productLayouts",
            variant: "productCarousel",
            props: { products: DataProductBookStoreTheme, padding: "mb-15" }
        },
        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: {
                heading: "Shop By Categories",
                marginTop: "py-2 mt-15 ",
                padding: "py-0",
                marginBottom: "mb-0",
                headingStyle: "text-4xl md:text-5xl font-regular font-serif",
                
                description: "81% of students whom traditionally used bound books to conduct research are now using digital devices."
            }
        },
        {
            section: "productLayouts",
            variant: "productWithTitleAndQuantity",
            props: { data: DataBookStoreProductWithTitleAndQuantity, padding: "" }
        },
        {
            section: "emailSubscription",
            variant: "emailSubscription6",
            props: { data: DataBookStoreEmailSubscription6, padding: "px-4 md:px-15 lg:px-25 py-10" }
        }


    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesBookStore,
                minHeight: "520px",
                backgroundImage: "/ThemeBookStore/bookStoreCarousel1.png",
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
                    categories: DataCategoriesBookStore,
                    minHeight: "520px",
                    backgroundImage: "/ThemeBookStore/bookStoreCarousel1.png",
                }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: {
                    products: DataProductBookStoreTheme,
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
                backgroundImage: "/ThemeBookStore/bookStoreCarousel1.png",
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
            variant: "emailSubscription6",
            props: { data: DataBookStoreEmailSubscription6, padding: "px-4 md:px-15 lg:px-25 py-10" }
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
                backgroundImage: "/ThemeBookStore/bookStoreCarousel1.png",
            }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeBookStore/grid4.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeBookStore/grid5.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeBookStore/bookStoreCarousel2.png" }

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
            variant: "emailSubscription6",
            props: { data: DataBookStoreEmailSubscription6, padding: "px-4 md:px-15 lg:px-25 py-10" }
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
                backgroundImage: "/ThemeBookStore/bookStoreCarousel1.png",
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
