import Link from "next/link";

// --- Sub-component ---

function ProductCategoryCircleCard({ label, count, image, href }) {
    return (
        <Link href={href} className="group flex flex-col items-center gap-3 w-24">
            {/* Circle image */}
            <div className="relative w-25 h-25 rounded-full overflow-hidden transition-all duration-300 shadow-sm">
                <img
                    src={image}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Label + count */}
            <div className="text-center leading-tight">
                <span className="font-nunito font-semibold text-[16px] text-gray-700 transition-colors duration-200">
                    {label}
                </span>
                {count !== undefined && (
                    <sup className="ml-0.5 text-[12px] font-nunito font-medium text-gray-700">
                        {count}
                    </sup>
                )}
            </div>
        </Link>
    );
}

// --- Main component ---

export default function ProductCategoryCircle({ data = [], padding }) {
    const { title, subtitle, categories } = data;

    return (
        <section className="w-full">
            <div className={`max-w-8xl mx-auto ${padding ?? "px-6 py-10"} flex flex-col lg:flex-row items-center justify-center gap-10 font-nunito`}>

                {/* Left: heading */}
                <div className="min-w-[180px] max-w-[220px] text-center lg:text-left">
                    <h2 className="text-4xl font-regular text-gray-800 leading-snug whitespace-pre-line">
                        {title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 leading-relaxed">{subtitle}</p>
                </div>

                {/* Right: circles */}
                <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
                    {categories?.map((cat) => (
                        <ProductCategoryCircleCard
                            key={cat.id}
                            label={cat.label}
                            count={cat.count}
                            image={cat.image}
                            href={cat.href}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}