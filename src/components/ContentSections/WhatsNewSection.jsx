export default function WhatsNewSection({ data }) {
  const { subtitle, title, description, images } = data;

  return (
    <section className="w-full bg-[#0a2540] py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase mb-2">
            {subtitle}
          </p>

          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <a
              key={image.id}
              href={image.link}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
