'use client';

import EditButton from './EditButton';
import ActionButtons from './ActionButtons';

/**
 * ProfileSection — white card with title + edit controls.
 * Edit button: top-right of header.
 * Save/Cancel: bottom of card (after children).
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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        {!isEditing && <EditButton onClick={onEdit} variant={editVariant} />}
      </div>

      {/* Content */}
      {children}

      {/* Save / Cancel — bottom of card, only when editing */}
      {isEditing && (
        <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-gray-100">
          <ActionButtons onCancel={onCancel} onSave={onSave} isLoading={isSaving} />
        </div>
      )}
    </div>
  );
}