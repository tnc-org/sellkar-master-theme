
"use client";
import React from "react";

export default function AnimatedButton({
  text = "",
  bgColor = "",
  textColor = "",
  height = "h-11",
  padding = "",
  onlyBottomBorder = false,
  onClick,
  className = "",
  rounded = "",
  border,
  hoverBgColor = "",
  hoverTextColor = "",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative overflow-hidden inline-block group
    ${bgColor} ${textColor} ${height} ${padding} ${rounded} ${border} 
    ${disabled ? '' : `hover:${hoverBgColor} hover:${hoverTextColor}`}
    font-semibold text-sm uppercase tracking-widest
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center
    transition-colors duration-500
    ${disabled ? 'opacity-50' : ''}
    ${className}
  `}
      style={{

        "--hover-bg": hoverBgColor.replace("bg-", ""),
        "--hover-text": hoverTextColor.replace("text-", ""),
      }}
    >
      {/* Bottom border */}
      {onlyBottomBorder && (
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current"></span>
      )}




      <span className={`relative z-10 transition-transform duration-300 ease-in-out transform ${disabled ? '' : 'group-hover:-translate-y-full group-hover:opacity-0'}`}>
        {text}
      </span>


      <span className={`absolute inset-0 z-0 flex items-center justify-center transition-transform duration-300 ease-in-out transform ${disabled ? '' : 'translate-y-full group-hover:translate-y-0'}`}>
        {text}
      </span>
    </button>
  );
}





// "use client";
// import React from "react";

// export default function AnimatedButton({
//   text = "Hover me",
//   hoverText = "Great!",
//   bgColor = "bg-gradient-to-t from-[#00154c] via-[#12376e] to-[#23487f]",
//   textColor = "text-white",
//   height = "h-[50px]",
//   width = "w-[140px]",
//   padding = "",
//   onlyBottomBorder = false,
//   onClick,
//   className = "",
//   rounded = "rounded-full",
//   border = "border-none",
//   disabled = false,
// }) {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       onMouseEnter={() => !disabled && setIsHovered(true)}
//       onMouseLeave={() => !disabled && setIsHovered(false)}
//       className={`
//         relative overflow-hidden
//         ${bgColor} ${textColor} ${height} ${width} ${padding} ${rounded} ${border}
//         ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
//         shadow-[0_15px_30px_rgba(0,0,0,0.5)]
//         outline-none
//         ${className}
//       `}
//     >
//       {/* Bottom border */}
//       {onlyBottomBorder && (
//         <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current"></span>
//       )}

//       {/* Default text - slides up on hover */}
//       <span 
//         className="absolute left-0 w-full -translate-y-1/2 text-xs uppercase tracking-wider font-medium transition-[top] duration-500 ease-in-out"
//         style={{ top: isHovered ? '-100%' : '50%' }}
//       >
//         {text}
//       </span>

//       {/* Hover text - slides up from bottom */}
//       <span 
//         className="absolute left-0 w-full -translate-y-1/2 text-xs uppercase tracking-wider font-medium transition-[top] duration-500 ease-in-out"
//         style={{ top: isHovered ? '50%' : '150%' }}
//       >
//         {hoverText}
//       </span>
//     </button>
//   );
// }
























// "use client";
// import React from "react";

// export default function AnimatedButton({
//   text = "",
//   bgColor = "",
//   textColor = "",
//   height = "h-11",
//   padding = "",
//   rounded = "",
//   border = "",
//   hoverBgColor = "",
//   hoverTextColor = "",
//   onClick,
//   disabled = false,
//   className = "",
//   onlyBottomBorder = false,
// }) {
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`
//         relative inline-flex items-center justify-center
//         overflow-hidden group
//         ${bgColor} ${textColor} ${height} ${padding} ${rounded} ${border}
//         font-semibold text-sm uppercase tracking-widest
//         transition-colors duration-300
//         ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
//         ${className}
//       `}
//     >
//       {/* Optional bottom border */}
//       {onlyBottomBorder && (
//         <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current" />
//       )}

//       {/* Default text */}
//       <span
//         className={`
//           relative z-10 ${rounded}
//           transition-all duration-300 ease-in-out
//           ${disabled ? "" : "group-hover:-translate-y-full group-hover:opacity-0"}
//         `}
//       >
//         {text}
//       </span>

//       {/* Hover text */}
//       <span
//         className={`
//           absolute inset-0 flex items-center justify-center
//           z-0 ${rounded}
//           transition-all duration-300 ease-in-out
//           ${disabled ? "" : "translate-y-full group-hover:translate-y-0"}
//           ${hoverBgColor} ${hoverTextColor}
//         `}
//       >
//         {text}
//       </span>
//     </button>
//   );
// }
