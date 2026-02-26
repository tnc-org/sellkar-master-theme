import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../Button/Button";

export default function BannerWithImagesTitleAndDescription({ data = {} }) {
  const {
    badge,
    title,
    description,
    smallImage,
    largeImage,
    href = "/",
    buttonProps = {},
  } = data;

  return (
    <section className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 px-6 py-10 lg:py-16 max-w-7xl mx-auto">

        {/* Images */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 flex-shrink-0">

          {/* Small image */}
          <div className="relative w-[280px] h-[200px] md:w-[200px] md:h-[260px] overflow-hidden shadow-md flex-shrink-0">
            <Image
              src={smallImage.src}
              alt={smallImage.alt}
              fill
              sizes="(max-width: 768px) 280px, 200px"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Large image */}
          <Link
            href={href}
            className="relative w-[280px] h-[200px] md:w-[320px] md:h-[380px] overflow-hidden shadow-lg flex-shrink-0 block"
          >
            <Image
              src={largeImage.src}
              alt={largeImage.alt}
              fill
              sizes="(max-width: 768px) 280px, 320px"
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>

        </div>

        {/* Text content */}
        <div className="flex flex-col gap-4 max-w-sm">

          {/* Badge */}
          {badge && (
            <span className="self-start px-4 py-1 rounded-full bg-[#cff0f0] text-[#3a9ea5] text-xs font-medium">
              {badge}
            </span>
          )}

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm text-[#5a5a5a] leading-relaxed">
            {description}
          </p>

          {/* Button */}
          <div className="mt-2">
            <AnimatedButton {...buttonProps} />
          </div>

        </div>

      </div>
    </section>
  );
}