// components/profile/FieldRow.jsx
'use client';

/**
 * Displays one label+value pair.
 * In edit mode renders an <input> (or <select> if options are provided).
 * Shows a "Verify" badge when the field has pendingVerify=true.
 *
 * Props:
 *  label          – string
 *  value          – current value (string)
 *  isEditing      – bool
 *  onChange       – (value: string) => void
 *  type           – input type (default 'text')
 *  placeholder    – string
 *  options        – array of { label, value } for <select>
 *  needsVerify    – bool: show Verify button after save
 *  onVerify       – called when Verify is clicked
 *  readOnly       – bool: never editable (e.g. role)
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
}) {
  const showInput = isEditing && !readOnly;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-500">{label}</span>

      {showInput ? (
        options ? (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 text-sm outline-none focus:border-blue-600 transition-colors bg-white"
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 text-sm outline-none focus:border-blue-600 transition-colors"
          />
        )
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            {value || <span className="text-gray-400 italic">Not set</span>}
          </span>

          {/* Verify badge */}
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
    </div>
  );
}