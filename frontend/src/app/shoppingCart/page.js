"use client"
// import NewsletterEmailSection2 from "@/components/EmailSubscription/NewsLetterEmailSection2";
// import ProductCarousel from "@/components/ProductLayouts/ProductCarousel";
import EmailSubscription4 from "@/components/EmailAndNewsSubscription/EmailSubscription4";
import { GetProductsByTheme } from "@/components/GetProductsByTheme/GetProductsByTheme";
import ProductCarousel from "@/components/ProductLayouts/ProductCarousel";
// import { products } from "@/components/ProductsCard/ProductsData";
import ShoppingCartTable from "@/components/ShoppingCart/ShoppingCartTable";
import { useTheme } from "@/provider/theme-provider";


export default function ShoppingCart(){
    const {themeId} = useTheme();
    const products = GetProductsByTheme(themeId);
    return(
        <div className="min-h-screen px-4">
            
            <div>
                <ShoppingCartTable />
                <div className="my-20"> 
                     <ProductCarousel products={products.slice(0, 12)} title="You May Also Like" />
                </div>


                <div>
                    <EmailSubscription4 title={"News Letter"} subtitle={"Signup for the latest products, trends and inspiration"} buttonText={"SUBMIT"} />
                </div>
               
                
            </div>
        </div>
    )
}