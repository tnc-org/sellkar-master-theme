// // import AboutUsCard from "@/components/Card/AboutUsCard";

// import AgencySection from "@/components/AgencySection/AgencySection";
// import { CarouselBanner } from "@/components/CrouselDynamicBanner";
// import HeadingAndDescription from "@/components/HeadingAndDescription/HeadingAndDescription";
// import HeroContactPageSection from "@/components/HeroContactPageSection/HeroContactPageSection";
// import HeroVideoSection from "@/components/HeroVideoSection/HeroVideoSection";
// import NewsLetterEmailSection from "@/components/NewsLetterEmailSection/NewsLetterEmailSection";
// import NewsletterEmailSection2 from "@/components/NewsLetterEmailSection/NewsLetterEmailSection2";
// import StoreTimings from "@/components/StoreTimings/StoreTimings";


// import TeamCard from "@/components/TeamCard/TeamCard";
// import TextImageSection from "@/components/TextImageSection/TextImageSection";
// import ThreeImagesGrid from "@/components/ThreeImagesGrid/ThreeImagesGrid";


// export default function AboutUs() {
//     return (
//         <div >

//             <CarouselBanner
//                 title="About Us"
//                 backgroundImage="/ThemePictures/aboutCarousel.png"
//                 showCategory={false}
//                 minHeight="320px"
//             />



//             <div className="px-4 py-20">
//                 <AgencySection />
//             </div>


//             <div>
//                 <HeroVideoSection videoSrc={"ThemeVideo/video1.mp4"} thumbnailSrc={"ThemePictures/thumbnail1.png"} />
//             </div>

//             <div className="px-4 py-10">
//             <HeadingAndDescription   heading={"Meet Our Team"} description={"Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh  tellus ac cursus commodo, tortor mauris condimentum nibh"}/>
//             </div>

//             <div className="flex gap-4  flex-col md:flex-row px-4 justify-between items-center">
//                 <TeamCard
//                     image="ThemePictures/team1.png"
//                     name="Ferguson"
//                     role="Designer"
//                     socials={{
//                         facebook: "https://facebook.com/username",
//                         twitter: "https://twitter.com/username",
//                         instagram: "https://instagram.com/username",
//                         linkedin: "https://linkedin.com/in/username"
//                     }}
//                 />
//                 <TeamCard
//                     image="ThemePictures/team2.png"
//                     name="Saga Noren"
//                     role="Developer"
//                     socials={{
//                         facebook: "https://facebook.com/username",
//                         twitter: "https://twitter.com/username",
//                         instagram: "https://instagram.com/username",
//                         linkedin: "https://linkedin.com/in/username"
//                     }}
//                 />
//                 <TeamCard
//                     image="ThemePictures/team3.png"
//                     name="Karen Ryan"
//                     role="Designer"
//                     socials={{
//                         facebook: "https://facebook.com/username",
//                         twitter: "https://twitter.com/username",
//                         instagram: "https://instagram.com/username",
//                         linkedin: "https://linkedin.com/in/username"
//                     }}
//                 />
//             </div>


//              <div className="px-4 py-15">
//             <HeadingAndDescription   heading={"Store In The World"} description={"Quisque vitae nibh iaculis neque blandit hendrerit euismod.Maecenas sit amet purus eget ipsum elementum Quisque vitae nibh iaculis neque blandit hendrerit euismod.Maecenas sit amet purus eget ipsum elementum  "}/>
//             </div>




//           <div className="px-4">
//             <ThreeImagesGrid />
//           </div>


//           <div className="px-4 py-15">                                
//             <StoreTimings />
//           </div>
//           <div className="px-4 py-15">                                
//             <NewsletterEmailSection2  />
//           </div>



//         </div>
//     )
// }








"use client"
import { AboutSectionMap } from "@/lib/MapsSection/AboutSectionMap";
import { useTheme } from "@/provider/theme-provider";


export default function AboutPage() {
  const {theme, themeId} = useTheme();
  const aboutSections = theme.about || [];

  return (
    <>
      {aboutSections.map((item, index) => {
        const VariantMap = AboutSectionMap[item.section];
        if (!VariantMap) return null;

        const Component = VariantMap[item.variant || "default"];
        if (!Component) return null;

        return <Component key={index} {...(item.props || {})} />;
      })}
    </>
  );
}