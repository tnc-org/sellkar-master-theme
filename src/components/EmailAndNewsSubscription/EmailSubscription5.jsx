import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmailSubscription5({ data = {}, padding = "" }) {
  const {
    bgColor,
    bgImage,
    title = "Join the family!",
    buttonProps = {},
    href,
  } = data;

  return (
    <div className={`${padding}`}>

    <section
      className="relative w-full py-20 px-6"
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      {/* Background image — only if bgImage is passed */}
      {bgImage && (
        <Image
          src={bgImage.src}
          alt={bgImage.alt || "background"}
          fill
          className="object-cover"
          priority
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-regular text-[#2a2020] text-center">
          {title}
        </h2>

        {/* Input + Button */}
        <div className="w-full flex items-center bg-white rounded-full px-5 py-2 shadow-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent outline-none text-sm text-[#5a5a5a] placeholder:text-[#aaa]"
          />
          <button
            type="button"
            className="ml-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#f0e8e8] hover:bg-[#e8d8d8] transition-colors flex-shrink-0"
            {...buttonProps}
          >
            <ArrowRight size={16} color="#2a2020" />
          </button>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 border border-[#aaa] rounded-sm accent-[#2a2020] cursor-pointer"
          />
          <span className="text-sm text-[#5a5a5a]">
            I agree with the{" "}
            <Link
              href={href || "#"}
              className="underline text-[#5a5a5a] hover:text-[#2a2020] transition-colors"
            >
              Terms & conditions
            </Link>
          </span>
        </label>

      </div>
    </section>
    </div>
  );
}