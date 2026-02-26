// // CategoryBigDetailedSection.jsx

// import Image from "next/image";
// import Link from "next/link";
// import AnimatedButton from "../Button/Button";



// export default function CategoryBigDetailedSection({ sections = [] , padding = ""}) {
//   return (
//     <>
//       {sections.map((item) => {
//         const { href, ...restButtonProps } = item.buttonProps;
//         return (
//           <section
//             key={item.id}
//             className={`flex flex-col md:flex-row ${
//               item.flexReverse ? "md:flex-row-reverse" : ""
//             } w-full min-h-[540px] ${padding}`}
//           >
//             <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[850px] overflow-hidden">
//               <Image src={item.categoryPic} alt={item.title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
//             </div>

//             <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-14 bg-white gap-7">
//               <h2 className="text-4xl font-bold uppercase  text-center">{item.title}</h2>
//               <p className="text-md text-gray-500 leading-relaxed text-center max-w-md">{item.description}</p>
//               <div className="relative w-55 h-55">
//                 <Image src={item.smallCategoryPic} alt={item.title} fill className="object-contain" sizes="176px" />
//               </div>
//               <Link href={href || "/products"}>
//                 <AnimatedButton {...restButtonProps} />
//               </Link>
//             </div>
//           </section>
//         );
//       })}
//     </>
//   );
// }
















// CategoryBigDetailedSection.jsx

import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../Button/Button";

export default function CategoryBigDetailedSection({ sections = [], padding = "" }) {
  return (
    <>
      {sections.map((item) => {
        const { href, ...restButtonProps } = item.buttonProps;
        return (
          <section
            key={item.id}
            className={`flex flex-col md:flex-row ${
              item.flexReverse ? "md:flex-row-reverse" : ""
            } w-full min-h-[540px] ${padding}`}
          >
            {/* Big Image */}
            <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[850px] overflow-hidden cursor-pointer">
              <Image
                src={item.categoryPic}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-600 ease-in-out hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-14 bg-white gap-7">
              <h2 className="text-4xl font-bold uppercase text-center">{item.title}</h2>
              <p className="text-md text-gray-500 leading-relaxed text-center max-w-md">{item.description}</p>

              {/* Small Image */}
              <div className="relative w-55 h-55 overflow-hidden cursor-pointer">
                <Image
                  src={item.smallCategoryPic}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-600 ease-in-out hover:scale-110"
                  sizes="176px"
                />
              </div>

              <Link href={href || "/products"}>
                <AnimatedButton {...restButtonProps} />
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
}