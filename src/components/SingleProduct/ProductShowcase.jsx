

import Image from "next/image";

const showcaseItems = [
  {
    image: "/ThemePictures/watch8.jpeg",
    title: "Education Product",
    description: "Ullamcorper velit sed. Curabitur sed metus varius ut tempor dui sagittis. Nulla facilisi Integer fringilla ornare et magna mollis.",
  },
  {
    image: "/ThemePictures/watch6.jpeg",
    title: "Effective Material",
    description: "Ullamcorper velit sed. Curabitur sed metus varius ut tempor dui sagittis. Nulla facilisi Integer fringilla ornare et magna mollis.",
  },
  {
    image: "/ThemePictures/watch7.jpeg",
    title: "Information",
    description: "Ullamcorper velit sed. Curabitur sed metus varius ut tempor dui sagittis. Nulla facilisi Integer fringilla ornare et magna mollis.",
  },
];

export default function ProductShowcase() {
  return (
    <div className="py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {showcaseItems.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}