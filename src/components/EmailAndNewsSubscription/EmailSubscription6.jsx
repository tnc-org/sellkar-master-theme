import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const iconMap = {
  facebook: <FaFacebookF size={13} />,
  instagram: <FaInstagram size={13} />,
  twitter: <FaTwitter size={13} />,
};

export default function EmailSubscription6({ data = [], padding = "px-5" }) {
  const { title, description, followers, image } = data;

  return (
    <div className={`${padding} overflow-hidden`}>
        
    <section className={`relative w-full`}>

      {/* Full Background Image */}
      <Image
        src={image.src}
        alt={image.alt || "community"}
        fill
        className="object-cover rounded-md object-center"
      />

      {/* Content on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-20">
        <h2 className="text-white font-serif text-4xl lg:text-5xl font-normal leading-tight mb-5">
          {title}
        </h2>
        <p className="text-stone-300 text-sm leading-relaxed max-w-xs mb-10">
          {description}
        </p>

        {/* Followers */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-8">
          {followers.map((item, i) => (
            <Link
              key={i}
              href={item.href || "/"}
              className="flex items-center gap-2 text-white text-sm font-medium border-b border-white pb-0.5 hover:text-stone-300 hover:border-stone-300 transition-colors"
            >
              <span>{iconMap[item.platform]}</span>
              {item.count} {item.label}
            </Link>
          ))}
        </div>
      </div>

    </section>
    </div>
  );
}