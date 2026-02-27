// "use client";
// import React, { useRef, useState } from "react";


// // ─── Category Card ────────────────────────────────────────────────────────────
// const StylishProductCarouselCard = ({ name, count, image }) => {
//   return (
//     <div className="flex-shrink-0 cursor-pointer group" style={{ width: "220px" }}>
//       {/* Image */}
//       <div
//         className="overflow-hidden"
//         style={{ width: "220px", height: "300px", borderRadius: "4px" }}
//       >
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           style={{ display: "block" }}
//         />
//       </div>

//       {/* Label */}
//       <div className="mt-3 flex items-baseline gap-0.5">
//         <span
//           style={{
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             fontSize: "15px",
//             fontWeight: "400",
//             color: "#1a1a1a",
//             letterSpacing: "0.01em",
//           }}
//         >
//           {name}
//         </span>
//         <sup
//           style={{
//             fontFamily: "'Georgia', 'Times New Roman', serif",
//             fontSize: "10px",
//             fontWeight: "400",
//             color: "#1a1a1a",
//             marginLeft: "2px",
//             verticalAlign: "super",
//             lineHeight: "0",
//           }}
//         >
//           {count}
//         </sup>
//       </div>
//     </div>
//   );
// };











// // ─── Main Component ───────────────────────────────────────────────────────────
// const StylishProductCarousel = ({ data = {}, padding }) => {
//     console.log("StylishProductCarousel data:", data);  // ← yeh add karo
//   console.log("padding:", padding);
//   const { title, subtitle, categories } = data;
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const SCROLL_AMOUNT = 240;

//   const updateScrollState = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     setCanScrollLeft(el.scrollLeft > 0);
//     setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
//   };

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
//     setTimeout(updateScrollState, 350);
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
//     setTimeout(updateScrollState, 350);
//   };

//   return (
//     <section
//     className={`${padding}`}
//       style={{
//         backgroundColor: "#ebebeb",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           alignItems: "flex-start",
//           gap: "0",
//           maxWidth: "100%",
//         }}
//       >
//         {/* ── Left Panel ── */}
//         <div
//           style={{
//             flexShrink: 0,
//             width: "350px",
//             minWidth: "220px",
//             paddingLeft: "80px",
//             paddingRight: "40px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-start",
//             paddingTop: "12px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "serif",
//               fontSize: "clamp(36px, 3vw, 44px)",
//               fontWeight: "500",
//               color: "#1a1a1a",
//               lineHeight: "1.2",
//               margin: "0 0 16px 0",
//               letterSpacing: "-0.01em",
//             }}
//           >
//             {title}
//           </h2>

//           <p
//             style={{
//               fontFamily: "'Georgia', 'Times New Roman', serif",
//               fontSize: "16px",
//               fontWeight: "400",
//               color: "#6b6b6b",
//               lineHeight: "1.6",
//               margin: "0 0 36px 0",
//               maxWidth: "200px",
//             }}
//           >
//             {subtitle}
//           </p>

//           {/* Arrow Buttons */}
//           <div style={{ display: "flex", gap: "10px" }}>
//             <button
//               onClick={scrollLeft}
//               disabled={!canScrollLeft}
//               aria-label="Scroll left"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "1px solid #c8c8c8",
//                 backgroundColor: "transparent",
//                 cursor: canScrollLeft ? "pointer" : "default",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 opacity: canScrollLeft ? 1 : 0.4,
//                 transition: "background-color 0.2s, opacity 0.2s",
//                 outline: "none",
//               }}
//               onMouseEnter={(e) => {
//                 if (canScrollLeft)
//                   e.currentTarget.style.backgroundColor = "#d6d6d6";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//               }}
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path
//                   d="M10 12L6 8L10 4"
//                   stroke="#1a1a1a"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             <button
//               onClick={scrollRight}
//               disabled={!canScrollRight}
//               aria-label="Scroll right"
//               style={{
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 border: "1px solid #c8c8c8",
//                 backgroundColor: "transparent",
//                 cursor: canScrollRight ? "pointer" : "default",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 opacity: canScrollRight ? 1 : 0.4,
//                 transition: "background-color 0.2s, opacity 0.2s",
//                 outline: "none",
//               }}
//               onMouseEnter={(e) => {
//                 if (canScrollRight)
//                   e.currentTarget.style.backgroundColor = "#d6d6d6";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//               }}
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path
//                   d="M6 4L10 8L6 12"
//                   stroke="#1a1a1a"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* ── Right Scrollable Cards ── */}
//         <div
//           ref={scrollRef}
//           onScroll={updateScrollState}
//           style={{
//             display: "flex",
//             gap: "16px",
//             overflowX: "auto",
//             scrollbarWidth: "none",       // Firefox
//             msOverflowStyle: "none",      // IE/Edg
//             flexGrow: 1,
//             alignItems: "flex-start",
//           }}
//         >
//           {/* Hide scrollbar for Chrome/Safari */}
//           <style>{`
//             div::-webkit-scrollbar { display: none; }
//           `}</style>

//           {categories.map((cat) => (
//             <StylishProductCarouselCard
//               key={cat.id}
//               name={cat.name}
//               count={cat.count}
//               image={cat.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StylishProductCarousel;













"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

// ─── Category Card ────────────────────────────────────────────────────────────
const StylishProductCarouselCard = ({ name, count, image }) => {
  return (
    <div className="flex-shrink-0 cursor-pointer group" style={{ width: "220px" }}>
      <div
        className="overflow-hidden relative"
        style={{ width: "220px", height: "300px", borderRadius: "4px" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="220px"
        />
      </div>

      <div className="mt-3 flex items-baseline gap-0.5">
        <span
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "15px",
            fontWeight: "400",
            color: "#1a1a1a",
            letterSpacing: "0.01em",
          }}
        >
          {name}
        </span>
        <sup
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: "10px",
            fontWeight: "400",
            color: "#1a1a1a",
            marginLeft: "2px",
            verticalAlign: "super",
            lineHeight: "0",
          }}
        >
          {count}
        </sup>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const StylishProductCarousel = ({ data = {}, padding }) => {
  const { title, subtitle, categories } = data;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 240;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  const ArrowButtons = ({ className = "" }) => (
    <div className={`flex gap-2.5 ${className}`}>
      <button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid #c8c8c8",
          backgroundColor: "transparent",
          cursor: canScrollLeft ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: canScrollLeft ? 1 : 0.4,
          transition: "background-color 0.2s, opacity 0.2s",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          if (canScrollLeft) e.currentTarget.style.backgroundColor = "#d6d6d6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={scrollRight}
        disabled={!canScrollRight}
        aria-label="Scroll right"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid #c8c8c8",
          backgroundColor: "transparent",
          cursor: canScrollRight ? "pointer" : "default",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: canScrollRight ? 1 : 0.4,
          transition: "background-color 0.2s, opacity 0.2s",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          if (canScrollRight) e.currentTarget.style.backgroundColor = "#d6d6d6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );

  return (
    <section
      className={`${padding}`}
      style={{ backgroundColor: "#ebebeb", width: "100%", overflow: "hidden" }}
    >

      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <div className="flex flex-col items-center md:hidden">
        {/* Heading & Subtitle centered */}
        <div className="text-center px-6 pt-3 pb-6">
          <h2
            style={{
              fontFamily: "serif",
              fontSize: "clamp(32px, 8vw, 40px)",
              fontWeight: "500",
              color: "#1a1a1a",
              lineHeight: "1.2",
              margin: "0 0 12px 0",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "15px",
              fontWeight: "400",
              color: "#6b6b6b",
              lineHeight: "1.6",
              margin: "0",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Scrollable Cards — one card visible at a time */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            width: "100%",
            /* snap one card at a time */
            scrollSnapType: "x mandatory",
            paddingLeft: "calc(50% - 110px)",   /* centre first card */
            paddingRight: "calc(50% - 110px)",
            boxSizing: "content-box",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          {categories?.map((cat) => (
            <div key={cat.id} style={{ scrollSnapAlign: "center", flexShrink: 0 }}>
              <StylishProductCarouselCard
                name={cat.name}
                count={cat.count}
                image={cat.image}
              />
            </div>
          ))}
        </div>

        {/* Arrow buttons below carousel on mobile */}
        <ArrowButtons className="mt-6 mb-3 justify-center" />
      </div>

      {/* ── MD+ LAYOUT (hidden on mobile) — original untouched ── */}
      <div
        className="hidden md:flex"
        style={{ alignItems: "flex-start", gap: "0", maxWidth: "100%" }}
      >
        {/* Left Panel */}
        <div
          style={{
            flexShrink: 0,
            width: "350px",
            minWidth: "220px",
            paddingLeft: "80px",
            paddingRight: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: "12px",
          }}
        >
          <h2
            style={{
              fontFamily: "serif",
              fontSize: "clamp(36px, 3vw, 44px)",
              fontWeight: "500",
              color: "#1a1a1a",
              lineHeight: "1.2",
              margin: "0 0 16px 0",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#6b6b6b",
              lineHeight: "1.6",
              margin: "0 0 36px 0",
              maxWidth: "200px",
            }}
          >
            {subtitle}
          </p>

          <ArrowButtons />
        </div>

        {/* Right Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            flexGrow: 1,
            alignItems: "flex-start",
          }}
        >
          {categories?.map((cat) => (
            <StylishProductCarouselCard
              key={cat.id}
              name={cat.name}
              count={cat.count}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylishProductCarousel;