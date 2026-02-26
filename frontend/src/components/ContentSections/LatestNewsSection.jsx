// ─── NewsCard ────────────────────────────────────────────────────────────────

const NewsCard = ({ date, comments, title, excerpt, href }) => {
  return (
    <article className="flex flex-col gap-3">
      {/* Meta */}
      <p className="text-[10.5px] font-light tracking-widest text-stone-400 uppercase">
        {date.toUpperCase()}&nbsp;&nbsp;|&nbsp;&nbsp;{comments} COMMENT
      </p>

      {/* Title */}
      <h2 className="font-serif text-[22px] font-normal leading-snug text-stone-900 tracking-tight">
        {title}
      </h2>

      {/* Excerpt */}
      <p className="text-[13.5px] font-light leading-relaxed text-stone-500 grow">
        {excerpt}
      </p>

      {/* Read More */}
      <a
        href={href}
        className="inline-block text-[11px] font-normal tracking-[1.8px] uppercase text-amber-800 border-b border-amber-800 pb-0.5 w-fit transition-all duration-300 hover:tracking-[2.4px] hover:text-stone-800 hover:border-stone-800"
      >
        Read More
      </a>
    </article>
  );
};

// ─── LatestNewsSection ───────────────────────────────────────────────────────

const LatestNewsSection = ({data = []}) => {
  return (
    <section className="bg-white  py-7 pb-10 px-4 font-sans">
      <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row">
        {data?.map((article, index) => (
          <div
            key={article.id}
            className={`flex-1 px-7 py-2 transition-transform duration-300 hover:-translate-y-1 ${
              index !== data.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-stone-200"
                : ""
            }`}
          >
            <NewsCard {...article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;