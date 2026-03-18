// components/profile/EditButton.jsx
'use client';

// Matches pic 2 – outlined button with a pencil icon
// variant: 'accent' (orange) | 'default' (gray)
export default function EditButton({ onClick, variant = 'default' }) {
  const styles =
    variant === 'accent'
      ? 'border-gray-300 text-gray-600 hover:bg-gray-50'
      : 'border-gray-300 text-gray-600 hover:bg-gray-50';

  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${styles}`}
    >
      {/* Pencil icon (inline SVG – no extra library needed) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
      Edit
    </button>
  );
}