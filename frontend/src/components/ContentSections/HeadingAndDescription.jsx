export default function HeadingAndDescription({
  heading,
  description,
  marginTop = "mt-20",
  marginBottom = "mb-10",
  headingStyle,
  descriptionStyle,
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
        body {
          font-family: 'Jost', sans-serif;
        }
      `}</style>

      <div className={`flex items-center justify-center ${marginTop} ${marginBottom}`}>
        <div className="w-full text-center px-4">
          <h1 className={`text-4xl  text-gray-900 mb-6 ${headingStyle}`}>
            {heading}
          </h1>
          <p className={`text-md lg:text-lg text-gray-600 leading-relaxed ${descriptionStyle}`}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
