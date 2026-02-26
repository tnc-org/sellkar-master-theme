import { useState, useEffect } from "react";
import AnimatedButton from "../Button/Button";
import { useRouter } from "next/navigation";

export default function LiveTimer({
  title = "Weekly Deals",
  description =
  "Starts with a more direct, declarative statement about the return of the weekly deals, creating a sense of excitement and anticipation.",
  initialTime = {
    days: 662,
    hours: 19,
    minutes: 43,
    seconds: 14,
  },
  buttonText = "SHOP THE COLLECTION",
  onButtonClick,
}) {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(initialTime);

  const handleButtonClick =
    onButtonClick || (() => router.push("/shop"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto px-3 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-3">
        {title}
      </h1>

      <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-5 md:mb-6 max-w-sm md:max-w-md">
        {description}
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-3 mb-6 md:mb-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Mins", value: timeLeft.minutes },
          { label: "Secs", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-md p-3 md:p-4 lg:p-5 text-center"
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">
              {item.value}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <AnimatedButton
        text={buttonText}
        bgColor="bg-black"
        textColor="text-white"
        padding="px-6 py-2 md:px-10"
        className="sm:text-sm md:text-sm font-semibold tracking-wider"
        onClick={handleButtonClick}
      />
    </div>
  );
}
