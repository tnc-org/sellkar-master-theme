'use client';

import { useRef } from 'react';

/**
 * Circular avatar with an optional camera-icon overlay to upload a new photo.
 *
 * Props:
 *  src        – image URL string
 *  name       – used for alt text and initials fallback
 *  onUpload   – (file: File) => void – called when user picks a file
 *  size       – Tailwind size class pair, e.g. 'w-20 h-20' (default)
 */
export default function ProfileAvatar({ src, name = '', onUpload, size = 'w-20 h-20' }) {
  const inputRef = useRef(null);

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onUpload) onUpload(file);
  };

  return (
    <div className={`relative ${size} shrink-0`}>
      {/* Avatar image or initials fallback */}
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover ring-2 ring-gray-200"
        />
      ) : (
        <div className="w-full h-full rounded-full bg-blue-600  flex items-center justify-center ring-2 ring-gray-200">
          <span className="text-white font-bold text-xl">{initials}</span>
        </div>
      )}

      {/* Upload overlay button */}
      {onUpload && (
        <>
          <button
            onClick={() => inputRef.current?.click()}
            className="absolute cursor-pointer bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shadow hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
}