// 'use client';

// /**
//  * Spinner — dotted rotating loader (matches uploaded design)
//  * size: 'sm'  → button ke andar (18×18)
//  * size: 'lg'  → card / screen load (44×44)
//  * color: 'blue' (default) | 'white'
//  */
// export default function Spinner({ size = 'sm', color = 'blue', className = '' }) {
//   const isLg   = size === 'lg';
//   const box    = isLg ? 44 : 18;
//   const r      = isLg ? 15 : 6;
//   const dotR   = isLg ? 4  : 2;
//   const fill   = color === 'white' ? '#ffffff' : '#3B82F6';
//   const count  = 8;

//   return (
//     <span
//       className={`inline-block ${className}`}
//       style={{
//         width: box,
//         height: box,
//         animation: 'spin 0.75s linear infinite',
//       }}
//     >
//       <svg
//         viewBox={`0 0 ${box} ${box}`}
//         width={box}
//         height={box}
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {Array.from({ length: count }).map((_, i) => {
//           const angle   = (i * 360) / count - 90;
//           const rad     = (angle * Math.PI) / 180;
//           const cx      = box / 2 + r * Math.cos(rad);
//           const cy      = box / 2 + r * Math.sin(rad);
//           const opacity = parseFloat(((i + 1) / count).toFixed(2));
//           return (
//             <circle key={i} cx={cx} cy={cy} r={dotR} fill={fill} opacity={opacity} />
//           );
//         })}
//       </svg>

//       {/* Tailwind uses its own animate-spin, we add the keyframe for our custom duration */}
//       <style>{`
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//       `}</style>
//     </span>
//   );
// }






'use client';

import { Spin } from 'antd';

/**
 * Spinner — Ant Design Spin
 * size: 'sm'  → Spin size="small"  (buttons ke andar)
 * size: 'lg'  → Spin size="large"  (screen/card load)
 * default     → Spin size="default"
 */
export default function Spinner({ size = 'sm' }) {
  const antSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'default';
  return <Spin size={antSize} />;
}