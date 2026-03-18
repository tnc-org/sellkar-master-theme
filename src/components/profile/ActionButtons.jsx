// components/profile/ActionButtons.jsx
'use client';

// Matches pic 1 – Cancel (outline) + Save (purple/primary solid)
export default function ActionButtons({ onCancel, onSave, isLoading = false }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onCancel}
        disabled={isLoading}
        className="px-4 py-1.5 rounded-lg  cursor-pointer border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
      >
        Cancel
      </button>
      <button
        onClick={onSave}
        disabled={isLoading}
        className="px-4 py-1.5 rounded-lg cursor-pointer  bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Saving…' : 'Save'}
      </button>
    </div>
  );
}