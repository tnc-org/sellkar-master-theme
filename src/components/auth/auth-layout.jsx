'use client';

/**
 * AuthLayout — full-screen, no scroll on any auth page.
 * Removed heavy p-20; uses compact py-4 so all forms fit in viewport.
 */
export function AuthLayout({ children, title }) {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center px-4 relative">

      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 px-8 py-5 flex flex-col justify-center">

          {/* Logo */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4a2 2 0 012-2h6a2 2 0 012 2v2h4a1 1 0 110 2h-.41l-.57 9.12A3 3 0 0116.13 20H7.87a3 3 0 01-2.99-2.88L4.41 8H4a1 1 0 110-2h4V4zm2 2h6V4H9v2z" />
              </svg>
            </div>
          </div>

          {title && (
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">{title}</h1>
          )}

          {children}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-2">
          <p>Copyright © Sellkar 2026.</p>
        </div>
      </div>
    </div>
  );
}