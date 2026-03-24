'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  const [mounted, setMounted] = useState(false);

  // SSR-safe: only portal after client mount
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [message, duration, onClose]);

  if (!message || !mounted) return null;

  const colors =
    type === 'success'
      ? 'bg-green-50 border-green-400 text-green-700'
      : 'bg-red-50 border-red-400 text-red-700';

  // createPortal renders directly into document.body —
  // no parent transform / overflow / stacking context can affect it
  return createPortal(
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 99999 }}>
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl border shadow-lg ${colors}`}>
        {type === 'success' ? (
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100 cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
}