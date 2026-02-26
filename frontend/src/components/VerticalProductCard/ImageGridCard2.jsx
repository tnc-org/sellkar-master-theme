"use client";


const BrandCard = ({ bgImage, logoImage, name }) => {
  return (
    <div className="relative overflow-hidden group">
      {/* Background Image with zoom on hover */}
      <div
        className="w-full h-35 md:h-40 lg:h-47 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

  

      {/* Logo Image */}
      <div className="absolute inset-0  flex items-center justify-center p-6 ">
        <img
          src={logoImage}
          alt={name}
          className="max-h-12 sm:max-h-14  w-auto object-contain brightness-0 invert drop-shadow-lg transition-transform duration-700 ease-in-out hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default function ImageGridCard2({ data = [] , heading }) {
  return (
    <section className="bg-gray-100 py-15  mt-[-32] px-4">
      <div>
        {heading && (
          <div>
            <h2 style={{fontWeight:"400"}} className="text-5xl   text-black mb-10 text-center text-left font-serif">{heading}</h2>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((brand) => (
            <BrandCard
              key={brand.id}
              bgImage={brand.bgImage}
              logoImage={brand.logoImage}
              name={brand.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}