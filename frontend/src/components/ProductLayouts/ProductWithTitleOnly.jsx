import Image from "next/image";
import Link from "next/link";

// ─── Card ────────────────────────────────────────────────────────────────────
function ProductWithTitleOnlyCard({ image, title, alt, href }) {
  return (
    <Link
      href={href || "/"}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        cursor: "pointer",
        flex: "1 1 0",
        minWidth: 0,
        textDecoration: "none",
      }}
      className="product-card-link"
    >
      {/* Image wrapper */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          aspectRatio: "2 / 2",
          background: "#f2ede8",
        }}
        className="product-card-img-wrapper"
      >
        <Image
          src={image}
          alt={alt || title}
          fill
          style={{ objectFit: "cover" }}
          className="product-card-img"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Title */}
      <span
        style={{
          fontSize: "16px",
          fontWeight: "800",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#111",
          paddingBottom: "2px",
          transition: "border-color 0.3s ease",
          alignSelf: "flex-start",
        }}
      >
        {title}
      </span>

      <style>{`
        .product-card-img {
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .product-card-link:hover .product-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </Link>
  );
}

// ─── Wrapper ─────────────────────────────────────────────────────────────────
export default function ProductWithTitleOnly({ data = [], gap = "24px", padding }) {
  return (

    <div
    className={`${padding} flex flex-col md:flex-row`}
      style={{
        gap,
        width: "100%",
        boxSizing: "border-box",
       
      }}
    >
      {data.map((product, i) => (
        <ProductWithTitleOnlyCard
          key={product.id ?? i}
          image={product.image}
          title={product.title}
          alt={product.alt}
          href={product.href}
        />
      ))}
    </div>
    
  );
}