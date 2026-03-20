'use client';

import { useEffect } from 'react';

/**
 * Toast — top-right fixed notification.
 *
 * Props:
 *  message   – text to show
 *  type      – 'success' | 'error'
 *  onClose   – called after duration or on dismiss
 *  duration  – ms before auto-close (default 3000)
 */
export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [message, duration, onClose]);

  if (!message) return null;

  const colors =
    type === 'success'
      ? 'bg-green-50 border-green-400 text-green-700'
      : 'bg-red-50 border-red-400 text-red-700';

  const icon =
    type === 'success' ? (
      <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    );

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl border shadow-lg ${colors}`}>
        {icon}
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 opacity-60 hover:opacity-100 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}