import Image from "next/image";
import Link from "next/link";

export default function ProductWithTitleAndQuantity({ data = [], padding = "" }) {
  return (
    <div className={`bg-white p-8 ${padding} w-full`}>
      <div className="flex gap-6 overflow-x-auto max-w-7xl mx-auto justify-center">
        {data.map((product) => (
          <Link
            key={product.id}
            href={product.href || "/"}
            className="flex flex-col items-center min-w-[180px] cursor-pointer"
          >
            {/* Image Box */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title + Quantity */}
            <p className={`mt-3 text-base font-semibold ${product.titleColor || "text-stone-800"}`}>
              {product.title}
              <sup className={`ml-0.5 text-[11px] ${product.titleColor || "text-stone-800"}`}>{product.quantity}</sup>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}