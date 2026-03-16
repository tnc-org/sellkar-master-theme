'use client';

export function AuthLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex items-center justify-center p-20 relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
      </div>

      {/* Centered Card */}
      <div className="w-full max-w-md relative z-10">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 min-h-[520px] flex flex-col justify-center">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 4a2 2 0 012-2h6a2 2 0 012 2v2h4a1 1 0 110 2h-.41l-.57 9.12A3 3 0 0116.13 20H7.87a3 3 0 01-2.99-2.88L4.41 8H4a1 1 0 110-2h4V4zm2 2h6V4H9v2z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          {title && (
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {title}
            </h1>
          )}

          {/* Form Content */}
          {children}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-6">
          <p>Copyright © Sellkar 2026.</p>
        </div>
      </div>
    </div>
  );
}