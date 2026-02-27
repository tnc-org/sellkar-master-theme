import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MessageSquare } from "lucide-react";
import Image from "next/image";


// ─── Single Card ──────────────────────────────────────────────────────────────
const PostCard = ({ post }) => (
  <div className="flex flex-col sm:flex-row gap-5 w-full">
    {/* Image */}
    <div className="relative flex-shrink-0 w-full h-52 sm:w-68 sm:h-60 overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col gap-5 flex-1 min-w-0">
      <h3 className="text-md font-bold text-gray-900 leading-snug cursor-pointer hover:underline font-inter line-clamp-2">
        {post.title}
      </h3>

      {/* Meta */}
      <div className="flex items-center gap-3 text-gray-400 text-xs">
        <span className="flex items-center gap-1">
          <Calendar size={13} /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <MessageSquare size={13} /> ( {post.comments} )
        </span>
      </div>

      {/* Excerpt */}
      <p className="text-gray-500 text-md leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
    </div>
  </div>
);

// ─── Carousel ─────────────────────────────────────────────────────────────────
const LatestProductCarousel = ({ posts = [], padding = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const visibleCount = 2;
  const totalSlides = Math.ceil(posts.length / visibleCount);

  const goTo = (dir) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (dir === "next") return prev >= totalSlides - 1 ? 0 : prev + 1;
        return prev <= 0 ? totalSlides - 1 : prev - 1;
      });
      setFading(false);
    }, 250);
  };

  const visiblePosts = posts.slice(
    currentIndex * visibleCount,
    currentIndex * visibleCount + visibleCount
  );

  return (
    <div className={`relative w-full bg-white ${padding}`}>

      {/* Left Arrow */}
      <button
        onClick={() => goTo("prev")}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        aria-label="Previous"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Cards */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}
      >
        {visiblePosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {visiblePosts.length < visibleCount && <div />}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => goTo("next")}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        aria-label="Next"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default LatestProductCarousel;