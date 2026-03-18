// components/navbar/UserMenu.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Reusable UserMenu — avatar button + dropdown with Profile & Logout.
 * Works in any navbar.
 *
 * Props:
 *  user       – { firstName, lastName, profilePhoto } — pass from token/profile
 *  onLogout   – function to call on logout click
 */
export default function UserMenu({ user = {}, onLogout }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // initials fallback
  const initials = [user.firstName?.[0], user.lastName?.[0]]
    .filter(Boolean)
    .join('')
    .toUpperCase() || 'U';

  return (
    <div ref={ref} className="relative">
      {/* Avatar button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full overflow-hidden cursor-pointer ring-2 ring-gray-200  transition-all focus:outline-none"
      >
        {user.profilePhoto ? (
          <img
            src={user.profilePhoto}
            alt={initials}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">{initials}</span>
          </div>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-50">
          {/* User name */}
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-800 truncate">
              {user.firstName} {user.lastName}
            </p>
          </div>

          {/* Profile */}
          <button
            onClick={() => { setOpen(false); router.push('/profile'); }}
            className="w-full flex  cursor-pointer items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {/* Person icon */}
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            My Profile
          </button>

          {/* Logout */} 
          <button
            onClick={() => { setOpen(false); onLogout?.(); }}
            className="w-full flex items-center cursor-pointer gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            {/* Logout icon */}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}