import Image from "next/image";

// ─── Marquee Section ──────────────────────────────────────────────────────────
const MarqueeSectionWithBg = ({ logos = [], padding = "" }) => {
  const track = [...logos, ...logos];

  return (
    <div className={`${padding}`}>
      <div className="w-full bg-black py-10 md:py-15 overflow-hidden">

        {/* ── Mobile: 2-column static grid ── */}
        <div className="grid grid-cols-2 gap-6 px-6 md:hidden">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── md+: Scrolling marquee ── */}
        <div className="hidden md:flex">
          <div className="flex shrink-0 animate-marquee">
            {track.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center px-10 lg:px-14 shrink-0"
              >
                <div className="relative h-18 w-32 lg:h-25 lg:w-40">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarqueeSectionWithBg;