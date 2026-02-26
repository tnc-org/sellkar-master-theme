import Image from "next/image";
import AnimatedButton from "../Button/Button";
import Link from "next/link";

export default function SmallHeroBanner({ data = [], padding = "" }) {
    const { title, description, buttonProps, bgImage, contentCenter, headingStyle, descriptionStyle, href } = data;
  return (
    <div className={`w-full ${padding}`}>
    <section className={`relative w-full overflow-hidden `} style={{ minHeight: "400px" }}>
      {/* Full background image */}
      {bgImage && (
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      )}

      {/* Content — left-aligned, vertically centered */}
      
      <div className={`relative z-10 flex items-center text-center px-10 md:px-15  h-full min-h-[400px] ${contentCenter ? "justify-center" : "justify-start"}`}>
        <div className="max-w-xs sm:max-w-sm lg:max-w-md">
          {title &&(
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold  tracking-wide leading-tight mb-4 ${headingStyle}`}>
            {title}
          </h2>
          )}
          {description && (
          <p className={`text-sm sm:text-base text-gray-700 leading-relaxed mb-8 ${descriptionStyle}`}>
            {description}
          </p>
          )}
          {buttonProps &&(
          <Link href={href || "#"} passHref>
            <AnimatedButton {...buttonProps} />
          </Link>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}


