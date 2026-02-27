// import Image from "next/image";
// import Link from "next/link";


// export default function HeroBigShopCards({data = [], padding = ""}) {
//   return (
//     <div className={`flex flex-col md:flex-row w-full min-h-screen ${padding}`}>
//       {data.map((panel) => (
//         <div
//           key={panel.id}
//           className={`flex-1 ${panel.bg} flex flex-col items-center justify-end pb-30 pt-12`}
//         >
//           <div className="relative  lg:w-100 aspect-[3/4] rounded-t-full overflow-hidden bg-white  mb-12">
//             <Image
//               src={panel.image}
//               alt={panel.label}
//               fill
//               className="object-cover object-top"
//             />
//           </div>

//           <Link
//             href={panel.href}
//             className="font-bold text-5xl text-blue-800  border-b-1 py-2 font-serif border-blue-800  underline-offset-4"
//           >
//             {panel.label}
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }















import Image from "next/image";
import Link from "next/link";

export default function HeroBigShopCards({ data = [], padding = "" }) {
  return (
    <div className={`flex flex-col md:flex-row w-full min-h-screen ${padding}`}>
      {data.map((panel) => (
        <div
          key={panel.id}
          className={`flex-1 ${panel.bg} flex flex-col items-center justify-end pb-10 md:pb-20 lg:pb-30 pt-8 md:pt-10 lg:pt-12`}
        >
          <div className="relative w-48 md:w-72 lg:w-100 aspect-[3/4] rounded-t-full overflow-hidden bg-white mb-6 md:mb-9 lg:mb-12">
            <Image
              src={panel.image}
              alt={panel.label}
              fill
              className="object-cover object-top"
            />
          </div>

          <Link
            href={panel.href}
            className="font-bold text-2xl md:text-3xl lg:text-5xl text-blue-800 border-b-1 py-2 font-serif border-blue-800 underline-offset-4"
          >
            {panel.label}
          </Link>
        </div>
      ))}
    </div>
  );
}