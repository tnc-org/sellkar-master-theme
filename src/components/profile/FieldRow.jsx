'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * FieldRow — label + value/input.
 * Supports: text, email, password (with eye toggle), select.
 * Shows error message when `error` prop is provided.
 */
export default function FieldRow({
  label,
  value,
  isEditing,
  onChange,
  type = 'text',
  placeholder = '',
  options,
  needsVerify = false,
  onVerify,
  readOnly = false,
  error,
}) {
  const [showPwd, setShowPwd] = useState(false);
  const showInput = isEditing && !readOnly;
  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      {showInput ? (
        options ? (
          <select
            value={value} onChange={(e) => onChange(e.target.value)}
            className="h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 text-sm outline-none focus:border-blue-600 transition-colors bg-white"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        ) : isPassword ? (
          <div className="relative">
            <input
              type={showPwd ? 'text' : 'password'}
              value={value} onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className={`h-10 w-full px-3 pr-10 rounded-lg border-2 text-gray-700 text-sm outline-none transition-colors ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
            />
            <button
              type="button" onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        ) : (
          <input
            type={type} value={value} onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`h-10 px-3 rounded-lg border-2 text-gray-700 text-sm outline-none transition-colors ${error ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
          />
        )
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            {value || <span className="text-gray-400 italic">Not set</span>}
          </span>
          {needsVerify && !isEditing && (
            <button
              onClick={onVerify}
              className="px-2.5 py-0.5 rounded-full cursor-pointer bg-orange-100 text-orange-600 text-xs font-semibold hover:bg-orange-200 transition-colors"
            >
              Verify
            </button>
          )}
        </div>
      )}

      {error && showInput && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}