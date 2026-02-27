import { useEffect, useState } from 'react';

export default function Toast({ message, isVisible, duration = 3500 }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isVisible) {
      setProgress(100);
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(remaining);
        
        if (remaining === 0) {
          clearInterval(interval);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isVisible, duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slideDown">
      <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden min-w-[300px] max-w-[400px]">
        {/* Content */}
        <div className="px-5 py-4">
          <div className="flex items-start gap-3">
            {/* Check icon */}
            <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-0.5">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            {/* Message */}
            <p className="text-black font-medium text-sm leading-relaxed flex-1">
              {message}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-200 relative overflow-hidden">
          <div
            className="h-full bg-black transition-all ease-linear"
            style={{
              width: `${progress}%`,
              transitionDuration: '50ms'
            }}
          />
        </div>
      </div>
    </div>
  );
}