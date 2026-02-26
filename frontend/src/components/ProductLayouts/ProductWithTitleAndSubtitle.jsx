"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../Button/Button";

// ─── Card ─────────────────────────────────────────────────────────────────────
const ProductCard = ({ title, titleColor, subtitle, image, butotnProps, href }) => {
  return (
    <div
      className="relative cursor-pointer group overflow-hidden"
      style={{ minHeight: "380px" }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Text overlay — top center */}
      <div className="relative z-10 flex flex-col items-center pt-8 px-4">
        {subtitle && (
        <p
          className="mb-3 tracking-widest uppercase"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "11px",
            fontWeight: "500",
            color: "#1a1a1a",
            letterSpacing: "0.12em",
          }}
        >
          {subtitle}
        </p>
        )}

        {title && (
        <h3
          className={`text-center ${titleColor || 'text-gray-900'}`}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "clamp(22px, 2.5vw, 28px)",
            fontWeight: "400",
            lineHeight: "1.3",
            margin: "0",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        )}

        {
          
          butotnProps && (
            <div className="mt-13">
            <Link href={href || "/shop"}>
              <AnimatedButton 
              {...butotnProps}
              />
            </Link>
            </div>
          )
        }

      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const ProductWithTitleAndSubtitle = ({ data = {}, padding }) => {
  const { products } = data;

  return (
    <section className={`${padding} w-full`}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 divide-x divide-gray-300 gap-8">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            butotnProps={product.butotnProps}
            href={product.href}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductWithTitleAndSubtitle;