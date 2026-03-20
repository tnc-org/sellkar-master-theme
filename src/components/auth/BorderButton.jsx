'use client';

import Link from 'next/link';

/**
 * BorderButton — outlined secondary button used on auth pages
 * Props:
 *  href   – navigation link
 *  label  – button text
 *  onClick – optional click handler (if no href)
 */
export default function BorderButton({ href, label, onClick }) {
  if (href) {
    return (
      <Link
        href={href}
        className="w-full h-11 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full h-11 flex items-center justify-center rounded-lg border-2 border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}