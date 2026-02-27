"use client";

import Image from "next/image";

export default function ShowBrandLogo({ data = [], padding = "" }) {
  return (
    <div className={`w-full  bg-white ${padding}`}>
      <ul className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-center gap-y-10 md:gap-0 list-none m-0 p-0">
        {data.map((brand) => (
          <li key={brand.id} className="flex items-center justify-center md:flex-1">
            <div
              className={`relative w-[150px] h-[64px] md:w-[160px] md:h-[70px] ${
                brand.isCenter
                  ? "brightness-0"
                  : "brightness-0 opacity-40 hover:opacity-100"
              }`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain cursor-pointer"
                sizes="(max-width: 768px) 150px, 160px"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}