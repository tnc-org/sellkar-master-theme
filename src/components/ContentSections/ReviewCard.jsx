// ReviewsCard.jsx
"use client";

export function ReviewCard({ image, review, name, stars }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 bg-white rounded-xl shadow-lg  max-w-3xl mx-auto">
            {/* Image */}
            <div className="w-full md:w-48 lg:w-56 flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 md:h-56 object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-5">
                    {review}
                </p>

                <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {name}
                </h4>

                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-lg sm:text-xl ${
                                index < stars ? "text-yellow-400" : "text-gray-300"
                            }`}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}