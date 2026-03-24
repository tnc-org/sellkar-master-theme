'use client';

import { useState, useEffect } from 'react';
import ProfileAvatar from '@/components/profile/ProfileAvatar';
import ProfileSection from '@/components/profile/ProfileSection';
import FieldRow from '@/components/profile/FieldRow';
import OtpModal from '@/components/profile/otpModal';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import Toast from '@/components/profile/Toast';
import {
  getProfile, getCurrencies, updateProfile, updateProfilePicture,
  updatePassword, updateAddress, sendProfileEmailOtp, completeProfileEmail,
  sendProfilePhoneOtp, completeProfilePhone, sendProfilePhoneHomeOtp, completeProfilePhoneHome,
} from '@/lib/api/profile';
import {
  firstNamePattern, lastNamePattern, emailPattern,
  passwordPattern, phoneNumberPattern,
} from '@/lib/utils/core';
import { errorMessages } from '@/lib/utils/errorMessages';

// ── Helper: enforce +92 prefix + max 10 digits ─────────────────────────────
const enforcePhone92 = (v) => {
  if (!v) return '+92';
  let val = v;
  if (!val.startsWith('+92')) {
    const digits = val.replace(/\D/g, '');
    val = digits.startsWith('92') ? '+' + digits : '+92' + digits.replace(/^0+/, '');
  }
  const after = val.slice(3).replace(/\D/g, '').slice(0, 10);
  return '+92' + after;
};

export default function ProfilePage() {
  const [data, setData]               = useState(null);
  const [isLoading, setIsLoading]     = useState(true);
  const [currencies, setCurrencies]   = useState([]);
  const [editingSection, setEditing]  = useState(null);
  const [draft, setDraft]             = useState({});
  const [isSaving, setIsSaving]       = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const [otp, setOtp] = useState({
    open: false, title: '', subtitle: '', field: '', payload: {}, isLoading: false, error: null,
  });
  const [pendingVerify, setPending] = useState({ email: false, phone: false, phoneHome: false });
  const [toast, setToast]           = useState({ message: '', type: 'success' });
  const showToast = (message, type = 'success') => setToast({ message, type });

  // ── Fetch ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        const p   = res?.data?.data || res?.data;
        setData({
          profilePhoto:      p.profilePhoto          || '',
          firstName:         p.firstName             || '',
          lastName:          p.lastName              || '',
          email:             p.email                 || '',
          phoneNumber:       p.phoneNumber           || '',
          phoneNumberHome:   p.phoneNumberHome       || '',
          role:              p.role                  || '',
          pushNotifications: p.pushNotifications     ?? true,
          currencyId:        p.currency?._id || p.currencyId || '',
          country:           p.address?.[0]?.country     || '',
          state:             p.address?.[0]?.state        || '',
          city:              p.address?.[0]?.city         || '',
          street:            p.address?.[0]?.street       || '',
          postal_code:       p.address?.[0]?.postal_code  || '',
        });
      } catch (err) {
        showToast('Failed to load profile', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCurrencies = async () => {
      try {
        const res  = await getCurrencies();
        const list = res?.data?.data || res?.data || [];
        setCurrencies(list);
      } catch {}
    };

    fetchProfile();
    fetchCurrencies();
  }, []);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const startEdit  = (s) => { setDraft({ ...data }); setEditing(s); setFieldErrors({}); };
  const cancelEdit = ()  => { setEditing(null); setDraft({}); setFieldErrors({}); };

  const updateDraft = (f, v) => {
    setDraft((p) => ({ ...p, [f]: v }));
    setFieldErrors((p) => ({ ...p, [f]: undefined }));
  };

  // ── Validation ────────────────────────────────────────────────────────────
  const validatePersonal = () => {
    const e = {};
    if (!draft.firstName?.trim())                     e.firstName = errorMessages.firstNameRequired;
    else if (!firstNamePattern.test(draft.firstName))  e.firstName = errorMessages.firstNameInvalid;

    if (!draft.lastName?.trim())                      e.lastName  = errorMessages.lastNameRequired;
    else if (!lastNamePattern.test(draft.lastName))    e.lastName  = errorMessages.lastNameInvalid;

    if (!draft.email)                                 e.email     = errorMessages.emailRequired;
    else if (!emailPattern.test(draft.email))         e.email     = errorMessages.emailInvalid;

    if (draft.phoneNumber) {
      const cleaned = draft.phoneNumber.replace(/\s/g, '');
      if (!phoneNumberPattern.test(cleaned))
        e.phoneNumber = errorMessages.phoneNumberInvalid;
    }

    if (draft.phoneNumberHome) {
      const cleaned = draft.phoneNumberHome.replace(/\s/g, '');
      if (!phoneNumberPattern.test(cleaned))
        e.phoneNumberHome = errorMessages.phoneNumberInvalid;
    }

    return e;
  };

  const validateAddress = () => {
    const e = {};
    if (draft.postal_code && !/^\d{5}$/.test(draft.postal_code))
      e.postal_code = 'Postal code must be exactly 5 digits';
    return e;
  };

  const validatePassword = () => {
    const e = {};
    if (!draft.oldPassword)                                e.oldPassword     = errorMessages.passwordRequired;
    if (!draft.newPassword)                                e.newPassword     = errorMessages.passwordRequired;
    else if (!passwordPattern.test(draft.newPassword))     e.newPassword     = errorMessages.passwordInvalid;
    if (!draft.confirmPassword)                            e.confirmPassword = 'Please confirm your password';
    else if (draft.newPassword !== draft.confirmPassword)  e.confirmPassword = errorMessages.confirmPasswordInvalid;
    return e;
  };

  // ── Save: Personal ────────────────────────────────────────────────────────
  const savePersonal = async () => {
    const e = validatePersonal();
    if (Object.keys(e).length) { setFieldErrors(e); return; }
    setIsSaving(true);
    try {
      await updateProfile({
        firstName:         draft.firstName,
        lastName:          draft.lastName,
        pushNotifications: draft.pushNotifications,
        currencyId:        draft.currencyId,
      });
      const emailChanged     = draft.email           !== data.email;
      const phoneChanged     = draft.phoneNumber     !== data.phoneNumber;
      const phoneHomeChanged = draft.phoneNumberHome !== data.phoneNumberHome;
      setData({ ...data, ...draft });
      setEditing(null);
      setFieldErrors({});
      setPending({ email: emailChanged, phone: phoneChanged, phoneHome: phoneHomeChanged });
      showToast('Personal info updated!');
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to save', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // ── Save: Address ─────────────────────────────────────────────────────────
  const saveAddress = async () => {
    const e = validateAddress();
    if (Object.keys(e).length) { setFieldErrors(e); return; }
    setIsSaving(true);
    try {
      await updateAddress({
        country:     draft.country     ?? '',
        state:       draft.state       ?? '',
        city:        draft.city        ?? '',
        street:      draft.street      ?? '',
        postal_code: draft.postal_code ?? '',
      });
      setData({ ...data, ...draft });
      setEditing(null);
      setFieldErrors({});
      showToast('Address updated!');
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to save', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // ── Save: Password ────────────────────────────────────────────────────────
  const savePassword = async () => {
    setFieldErrors({});
    const e = validatePassword();
    if (Object.keys(e).length) { setFieldErrors(e); return; }
    setIsSaving(true);
    try {
      await updatePassword({ oldPassword: draft.oldPassword, newPassword: draft.newPassword });
      setEditing(null);
      setFieldErrors({});
      setDraft((p) => ({ ...p, oldPassword: '', newPassword: '', confirmPassword: '' }));
      showToast('Password changed!');
    } catch (err) {
      showToast(err?.response?.data?.message || 'Failed to change password', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // ── Verify ────────────────────────────────────────────────────────────────
  const cleanPhone = (n) => '+' + n.replace(/\D/g, '');

  const handleVerify = async (field) => {
    try {
      if (field === 'email') {
        console.log('[OTP] Sending email OTP → payload:', { email: data.email });
        const res = await sendProfileEmailOtp({ email: data.email });
        console.log('[OTP] Email OTP response:', res?.data);
        setOtp({
          open: true, title: 'Verify Email', subtitle: `Code sent to ${data.email}`,
          field: 'email', payload: { email: data.email }, isLoading: false, error: null,
        });

      } else if (field === 'phone') {
        const phone = cleanPhone(data.phoneNumber);
        console.log('[OTP] Sending phone OTP → payload:', { phoneNumber: phone });
        const res = await sendProfilePhoneOtp({ phoneNumber: phone });
        console.log('[OTP] Phone OTP response:', res?.data);
        setOtp({
          open: true, title: 'Verify Phone', subtitle: `Code sent to ${phone}`,
          field: 'phone', payload: { phoneNumber: phone }, isLoading: false, error: null,
        });

      } else if (field === 'phoneHome') {
        const phone = cleanPhone(data.phoneNumberHome);
        console.log('[OTP] Sending alternate phone OTP → payload:', { phoneNumber: phone });
        const res = await sendProfilePhoneHomeOtp({ phoneNumber: phone });
        console.log('[OTP] Alternate phone OTP response:', res?.data);
        setOtp({
          open: true, title: 'Verify Alternate Phone', subtitle: `Code sent to ${phone}`,
          field: 'phoneHome', payload: { phoneNumber: phone }, isLoading: false, error: null,
        });
      }
    } catch (err) {
      console.error('[OTP] Failed to send OTP:', err?.response?.data || err);
      showToast(err?.response?.data?.message || 'Failed to send OTP', 'error');
    }
  };

  const handleOtpSubmit = async (code) => {
    console.log('[OTP] Submitting code:', code, '| field:', otp.field, '| payload:', otp.payload);
    setOtp((p) => ({ ...p, isLoading: true, error: null }));
    try {
      if (otp.field === 'email')     await completeProfileEmail({ ...otp.payload, otpCode: code });
      if (otp.field === 'phone')     await completeProfilePhone({ ...otp.payload, otpCode: code });
      if (otp.field === 'phoneHome') await completeProfilePhoneHome({ ...otp.payload, otpCode: code });
      console.log('[OTP] Verification successful for field:', otp.field);
      setPending((p) => ({ ...p, [otp.field === 'phoneHome' ? 'phoneHome' : otp.field]: false }));
      setOtp((p) => ({ ...p, open: false }));
      showToast('Verified successfully!');
    } catch (err) {
      console.error('[OTP] Verification failed:', err?.response?.data || err);
      setOtp((p) => ({ ...p, isLoading: false, error: err?.response?.data?.message || 'Invalid code.' }));
    }
  };

  const handlePhotoUpload = async (file) => {
    setIsSaving(true);
    try {
      const fd = new FormData(); fd.append('file', file);
      const res = await updateProfilePicture(fd);
      const url = res?.data?.data?.profilePhoto;
      if (url) setData((p) => ({ ...p, profilePhoto: url }));
      showToast('Profile photo updated!');
    } catch (err) {
      showToast(err?.response?.data?.message || 'Photo upload failed', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  // ── Loading ───────────────────────────────────────────────────────────────
  if (isLoading) return <LoadingOverlay />;
  if (!data) return null;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        {isSaving && <LoadingOverlay />}

        <div className="max-w-3xl mx-auto space-y-5">

          {/* Identity Card */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-5">
            <ProfileAvatar
              src={data.profilePhoto}
              name={`${data.firstName} ${data.lastName}`}
              onUpload={handlePhotoUpload}
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">{data.firstName} {data.lastName}</h1>
              <p className="text-sm text-gray-500">{data.role}</p>
              <p className="text-sm text-gray-400 flex items-center gap-1 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {[data.city, data.country].filter(Boolean).join(', ')}
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <ProfileSection
            title="Personal Information"
            isEditing={editingSection === 'personal'}
            onEdit={() => startEdit('personal')}
            onCancel={cancelEdit}
            onSave={savePersonal}
            isSaving={isSaving}
            editVariant="accent"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
              <FieldRow
                label="First Name"
                value={editingSection === 'personal' ? draft.firstName : data.firstName}
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('firstName', v)}
                placeholder="John"
                error={fieldErrors.firstName}
              />

              <FieldRow
                label="Last Name"
                value={editingSection === 'personal' ? draft.lastName : data.lastName}
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('lastName', v)}
                placeholder="Doe"
                error={fieldErrors.lastName}
              />

              <FieldRow
                label="User Role"
                value={data.role}
                isEditing={editingSection === 'personal'}
                onChange={() => {}}
                readOnly
              />

              <FieldRow
                label="Email Address"
                value={editingSection === 'personal' ? draft.email : data.email}
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('email', v)}
                type="email"
                placeholder="you@example.com"
                needsVerify={pendingVerify.email}
                onVerify={() => handleVerify('email')}
                error={fieldErrors.email}
              />

              <FieldRow
                label="Phone Number"
                value={editingSection === 'personal' ? (draft.phoneNumber ?? '') : (data.phoneNumber ?? '')}
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('phoneNumber', enforcePhone92(v))}
                placeholder="+92 3001234567"
                needsVerify={pendingVerify.phone}
                onVerify={() => handleVerify('phone')}
                error={fieldErrors.phoneNumber}
              />

              <FieldRow
                label="Alternate Phone"
                value={editingSection === 'personal' ? (draft.phoneNumberHome ?? '') : (data.phoneNumberHome ?? '')}
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('phoneNumberHome', enforcePhone92(v))}
                placeholder="+92 3001234567"
                needsVerify={pendingVerify.phoneHome}
                onVerify={() => handleVerify('phoneHome')}
                error={fieldErrors.phoneNumberHome}
              />

              <FieldRow
                label="Currency"
                value={
                  editingSection === 'personal'
                    ? draft.currencyId
                    : currencies.find((c) => c._id === data.currencyId)?.currencyName || data.currencyId || 'Not set'
                }
                isEditing={editingSection === 'personal'}
                onChange={(v) => updateDraft('currencyId', v)}
                options={[
                  { label: 'Select currency', value: '' },
                  ...currencies.map((c) => ({
                    label: `${c.currencySymbol} ${c.currencyName} (${c.currencyCode})`,
                    value: c._id,
                  })),
                ]}
              />

              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Push Notifications</span>
                {editingSection === 'personal' ? (
                  <button
                    onClick={() => updateDraft('pushNotifications', !draft.pushNotifications)}
                    className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${draft.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'}`}
                  >
                    <span className={`block w-5 h-5 bg-white rounded-full shadow transition-transform ${draft.pushNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
                  </button>
                ) : (
                  <span className="text-sm font-medium text-gray-800">
                    {data.pushNotifications ? 'Enabled' : 'Disabled'}
                  </span>
                )}
              </div>
            </div>
          </ProfileSection>

          {/* Address */}
          <ProfileSection
            title="Address"
            isEditing={editingSection === 'address'}
            onEdit={() => startEdit('address')}
            onCancel={cancelEdit}
            onSave={saveAddress}
            isSaving={isSaving}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
              <FieldRow
                label="Country"
                value={editingSection === 'address' ? (draft.country ?? '') : (data.country ?? '')}
                isEditing={editingSection === 'address'}
                onChange={(v) => updateDraft('country', v)}
                placeholder="Pakistan"
              />
              <FieldRow
                label="State"
                value={editingSection === 'address' ? (draft.state ?? '') : (data.state ?? '')}
                isEditing={editingSection === 'address'}
                onChange={(v) => updateDraft('state', v)}
                placeholder="Sindh"
              />
              <FieldRow
                label="City"
                value={editingSection === 'address' ? (draft.city ?? '') : (data.city ?? '')}
                isEditing={editingSection === 'address'}
                onChange={(v) => updateDraft('city', v)}
                placeholder="Karachi"
              />
              <FieldRow
                label="Street"
                value={editingSection === 'address' ? (draft.street ?? '') : (data.street ?? '')}
                isEditing={editingSection === 'address'}
                onChange={(v) => updateDraft('street', v)}
                placeholder="Street 123"
              />
              <FieldRow
                label="Postal Code"
                value={editingSection === 'address' ? (draft.postal_code ?? '') : (data.postal_code ?? '')}
                isEditing={editingSection === 'address'}
                onChange={(v) => updateDraft('postal_code', v.replace(/\D/g, '').slice(0, 5))}
                placeholder="75822"
                error={fieldErrors.postal_code}
              />
            </div>
          </ProfileSection>

          {/* Security */}
          <ProfileSection
            title="Security"
            isEditing={editingSection === 'security'}
            onEdit={() => startEdit('security')}
            onCancel={cancelEdit}
            onSave={savePassword}
            isSaving={isSaving}
          >
            {editingSection === 'security' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
                <FieldRow
                  label="Current Password"
                  value={draft.oldPassword || ''}
                  isEditing
                  onChange={(v) => updateDraft('oldPassword', v)}
                  type="password"
                  placeholder="Enter current password"
                  error={fieldErrors.oldPassword}
                />
                <FieldRow
                  label="New Password"
                  value={draft.newPassword || ''}
                  isEditing
                  onChange={(v) => updateDraft('newPassword', v)}
                  type="password"
                  placeholder="Min 8 characters"
                  error={fieldErrors.newPassword}
                />
                <FieldRow
                  label="Confirm Password"
                  value={draft.confirmPassword || ''}
                  isEditing
                  onChange={(v) => updateDraft('confirmPassword', v)}
                  type="password"
                  placeholder="Repeat new password"
                  error={fieldErrors.confirmPassword}
                />
              </div>
            ) : (
              <p className="text-sm text-gray-500">Click Edit to change your password.</p>
            )}
          </ProfileSection>

        </div>
      </div>

      {/* OTP Modal — outside main wrapper */}
      {otp.open && (
        <OtpModal
          title={otp.title}
          subtitle={otp.subtitle}
          onSubmit={handleOtpSubmit}
          onClose={() => setOtp((p) => ({ ...p, open: false }))}
          isLoading={otp.isLoading}
          error={otp.error}
        />
      )}

      {/* Toast — portal handles fixed top-right positioning */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: 'success' })}
      />
    </>
  );
}