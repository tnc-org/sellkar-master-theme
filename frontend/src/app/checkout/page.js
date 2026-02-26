"use client"
import CheckoutForm from "@/components/Checkout/CheckoutForm/CheckoutForm";
import CheckoutForm2 from "@/components/Checkout/CheckoutForm/CheckoutForm2";
import { useTheme } from "@/provider/theme-provider";

export default function Checkout(){
    const {themeId, theme} = useTheme()
    return(
        <div className="min-h-screen px-4 mx-auto ">
        {themeId == "time" && (
        
            <CheckoutForm2 />
        )}

        {themeId == "furniture" &&(
            <CheckoutForm />

        )}
            
        {themeId == "classicFurniture" &&(
            <CheckoutForm />

        )}
        {themeId == "beauty" &&(
            <CheckoutForm />

        )}
        {themeId == "perfume" &&(
            <CheckoutForm2 />

        )}
            
        </div>
    )
}