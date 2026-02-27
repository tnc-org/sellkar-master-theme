// import { CarouselBanner } from "@/components/CrouselDynamicBanner";
// import EmailSubscription4 from "@/components/EmailAndNewsSubscription/EmailSubscription4";
// import AccordionFaqs from "@/components/Shadcn/Accordian/accordion-09";
// import { Separator } from "@/components/ui/separator";





// export default function Faqs() {
//     return (
//         <div className="">

          
//             {/* <CarouselBanner
//                 title="Faqs"
//                 backgroundImage="/ThemePictures/watch2.jpeg"
//                 showCategory={false}
//                 minHeight="320px"
//             /> */}


//           <div className="flex flex-col justify-center items-center  mt-10">
//                 <p className="text-gray-400 text-center  text-1xl tracking-[0.1em]">Ask Us Anything</p>
//                 <h1 className="text-4xl text-center ">Frequently Asked <br /> Questions</h1>
//             </div>
//             <div className=" mt-12 flex justify-center items-center">
//                  <AccordionFaqs />
//             </div>


//             {/* <div className="my-20"> 
//                 <EmailSubscription4 />
//             </div> */}
           
//            <div>
//             <Separator />
//            </div>
        
//         </div>
//     )
// }



"use client"
import { FaqSectionMap } from "@/lib/MapsSection/FaqSectionMap";
import { useTheme } from "@/provider/theme-provider";


export default function FaqPage() {
  const {theme, themeId} = useTheme();
  const faqSections = theme.faqs || [];

  return (
    <>
      {faqSections.map((item, index) => {
        const VariantMap = FaqSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}