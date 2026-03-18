// components/profile/ProfileSection.jsx
'use client';

import EditButton from './EditButton';
import ActionButtons from './ActionButtons';

/**
 * Reusable white card section with title and edit/save/cancel controls.
 *
 * Props:
 *  title        – section heading (string)
 *  isEditing    – bool: show Cancel+Save instead of Edit
 *  onEdit       – called when Edit is clicked
 *  onCancel     – called when Cancel is clicked
 *  onSave       – called when Save is clicked
 *  isSaving     – bool: passed to ActionButtons loading state
 *  editVariant  – 'accent' | 'default' – colour of the Edit button
 *  children     – content of the section
 */
export default function ProfileSection({
  title,
  isEditing,
  onEdit,
  onCancel,
  onSave,
  isSaving = false,
  editVariant = 'default',
  children,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>

        {isEditing ? (
          <ActionButtons
            onCancel={onCancel}
            onSave={onSave}
            isLoading={isSaving}
          />
        ) : (
          <EditButton onClick={onEdit} variant={editVariant} />
        )}
      </div>

      {/* Section content */}
      {children}
    </div>
  );
}