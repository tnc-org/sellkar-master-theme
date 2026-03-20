'use client';

import { useState } from 'react';
import Spinner from '@/components/ui/Spinner';

export default function OtpModal({ title, subtitle, onSubmit, onClose, isLoading = false, error = null }) {
  const [code, setCode] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-8 flex flex-col items-center gap-5">

        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 3H8l-2 4h12l-2-4z" />
          </svg>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>

        <input
          type="text" inputMode="numeric" maxLength={6}
          value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
          placeholder="Enter code"
          className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 text-gray-700 text-center text-lg tracking-widest font-semibold outline-none focus:border-blue-600 transition-colors"
        />

        {error && <p className="text-xs text-red-500 -mt-2">{error}</p>}

        <div className="flex gap-3 w-full">
          <button onClick={onClose} disabled={isLoading}
            className="flex-1 h-11 rounded-lg cursor-pointer border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            Cancel
          </button>
          <button
            onClick={() => code.trim().length >= 4 && onSubmit(code.trim())}
            disabled={isLoading || code.length < 4}
            className="flex-1 h-11 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? <><Spinner size="sm" /> Verifying…</> : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  );
}