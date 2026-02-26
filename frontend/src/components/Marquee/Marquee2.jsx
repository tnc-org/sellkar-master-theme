export default function Marquee2({ data = [], padding = "" }) {
  // Flatten: [icon, text, icon, text, ...] repeated twice for seamless loop
  const flatItems = [...data, ...data].flatMap((item) => [
    { type: "icon", src: item.icon },
    { type: "text", value: item.text },
  ]);

  return (
    <div className={`${padding}`}>
      <div className="bg-red-500 py-2 overflow-hidden">
        <div
          className="flex items-center w-max"
          style={{ animation: "marquee 100s linear infinite" }}
        >
          {flatItems.map((el, i) =>
            el.type === "icon" ? (
              <img
                key={i}
                src={el.src}
                alt=""
                className="w-10 h-10 flex-shrink-0 mx-6"
              />
            ) : (
              <span
                key={i}
                className="text-white font-serif font-medium italic text-2xl whitespace-nowrap mx-6"
              >
                {el.value}
              </span>
            )
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}