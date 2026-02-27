import { DataFeatures } from "@/components/ContentSections/DataContentSection/DataFeatures";
import { TeamData } from "@/components/ContentSections/DataContentSection/DataTeamCard";
import { DataCategoriesClothing } from "@/components/CrouselDynamicBanner/DataCategoriesClothing";
import { DataCategoriesPerfume } from "@/components/CrouselDynamicBanner/DataCategoriesPerfume";
import { DataFollowUsSection6Clothing } from "@/components/FollowUsSection/DataFollowUsSection/DataFollowUsSection6Clothing";
import { ClothingThemeData } from "@/components/Hero/HeroData/ClothingThemeData";
import { ClothingMarqueeData } from "@/components/Marquee/ClothingMarqueeData";
import { DataProductClothingTheme } from "@/components/ProductLayouts/DataProductLayouts/DataProductClothingTheme";
import { DataProductTabs } from "@/components/ProductLayouts/DataProductLayouts/DataProductTabs";
import { DataDynamicGrid } from "@/components/VerticalProductCard/DataDynamicGrid";
import { DataOneItemCard } from "@/components/VerticalProductCard/DataOneItemCard";
import { DataBlogCardClothing } from "@/components/VerticalProductCard/DataVerticalProductCard/DataBlogCard/DataBlogCardClothing";

export default {
    id: "clothing",
    header: "header_centered_menu",
    footer: "big_footer",
    colors: { bg: "#000", text: "#fff" },
    home: [
        {
            section: "hero",
            variant: "hero_carousel",
            props: {
                slides: ClothingThemeData,
            }
        },
        {
            section: "contentSections",
            variant: "features",
            props: { features: DataFeatures }
        },
        {
            section: "verticalProductCard",
            variant: "dynamicGrid",
            props: { data: DataDynamicGrid, colGrid: "md:grid-cols-2", gap:"gap-0" }
        },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "FEATURED PRODUCTS", description: "Don't Miss Today's Featured Deals", marginTop: "mt-20", marginBottom: 0 }
        },
        {
            section: "productLayouts",
            variant: "productCardRowsForm",
            props: { products: DataProductClothingTheme, showProductTabs: false, paginationType: "showMore" }
        },




        {
            section: "verticalProductCard",
            variant: "imageWithContent",
            props: {
                image: "/ThemeClothing/blog6.png",
                subtitle: "NETRO SALE",
                title: "Upto 40% off\n Final Sales Items",
                reverseRow: true,
                itemsCenter: true,
                bgColor: "bg-gray-100",
                buttonProps: {
                    text: "SHOP NOW",
                    onlyBottomBorder: true,
                    textColor: "text-black",
                    onClick: () => router.push("/shop")
                }
            },
        },



        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "ITEMS OF THE DAY", description: "Best Price of day", marginTop: 0, marginBottom: "mb-10" }
        },


        {
            section: "verticalProductCard",
            variant: "oneItemCard",
            props: { items: DataOneItemCard }
        },



          {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection6Clothing}
        },

        {
            section: "marquee",
            variant: "default",
            props: { brands: ClothingMarqueeData },
        },

        {
            section: "contentSections",
            variant: "headingAndDescription",
            props: { heading: "Our Latest Update", description: "Browse laest of our news", marginTop: "mt-10", marginBottom: 0 }
        },

        {
            section: "verticalProductCard",
            variant: "blogCard",
            props: { blogs: DataBlogCardClothing}
        }

    ],

    shop: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: {
                title: "Shop",
                showCategory: true,
                categories: DataCategoriesClothing,
                minHeight: "520px",
                backgroundImage: "/ThemeClothing/clothingcarousel3.png",
            },

        },
        {
            section: "shopLayout",
            variant: "default",
        },
        
    ],

   

    products:
        [
            {
                section: "carouselDynamicBanner",
                variant: "carouselBanner",
                props: { title: "Products", showCategory: true, categories: DataCategoriesClothing, minHeight: "520px", backgroundImage: "/ThemeClothing/clothingcarousel3.png", }
            },

            {
                section: "productLayouts",
                variant: "productGridView",
                props: { products: DataProductClothingTheme, paginationType: "pagination", gridColumns: 4 }
            },

           
        ],


    contact: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Contact", showCategory: false, minHeight: "380px", backgroundImage: "/ThemeClothing/clothingcarousel3.png", }
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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "/ThemeClothing/email.png" }
        },



        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection6Clothing }
        },

    ],




    about: [
        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "About", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeClothing/clothingcarousel3.png", }
        },


        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: false, title: "Our Story", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClothing/about1.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },
        {
            section: "contentSection",
            variant: "textImageSection",
            props: { flexReversed: true, title: "Who We Are?", subtitle: "THE HIGH STRESS FAVOURITE", image: "ThemeClothing/about2.png", description: "Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.   In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." }
        },

        {
            section: "contentSection",
            variant: "aboutDesignSection",
            props: { image: "ThemeClothing/about3.png" }

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
            props: { title: "Our Newsleter", subtitle: "Join our list and get 15% off your first purchase! Don’t worry we don’t spam", buttonText: "Submit", image: "ThemeClothing/email.png" }
        },

        {
            section: "followUsSection",
            variant: "followUsSection1",
            props: { images: DataFollowUsSection6Clothing }
        },

    ],



    faqs: [

        {
            section: "carouselDynamicBanner",
            variant: "carouselBanner",
            props: { title: "Faqs", showCategory: false, minHeight: "320px", backgroundImage: "/ThemeClothing/clothingcarousel3.png", }
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
