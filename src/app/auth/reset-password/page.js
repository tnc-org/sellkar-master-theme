'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import { PasswordInput } from '@/components/auth/password-input';
import BorderButton from '@/components/auth/BorderButton';
import { resetPassword } from '@/lib/api/auth';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { passwordPattern } from '@/lib/utils/core';
import { errorMessages } from '@/lib/utils/errorMessages';

export default function ResetPasswordPage() {
  const [password, setPassword]               = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors]                   = useState({});
  const [isLoading, setIsLoading]             = useState(false);
  const [apiError, setApiError]               = useState('');
  const router = useRouter();

  const validateForm = () => {
    const e = {};
    if (!password)                             e.password = errorMessages.passwordRequired;
    else if (!passwordPattern.test(password))  e.password = errorMessages.passwordInvalid;
    if (!confirmPassword)                      e.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword)     e.confirmPassword = errorMessages.confirmPasswordInvalid;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setApiError('');
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const token = localStorage.getItem('resetToken');
      await resetPassword({ token, password });
      localStorage.removeItem('resetToken');
      router.push('/auth/signin');
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Reset failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset Password">
      {isLoading && <LoadingOverlay />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600">Enter your new password below.</p>

        {apiError && (
          <p className="text-xs text-red-500 text-center bg-red-50 rounded-lg py-2 px-3">{apiError}</p>
        )}

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <PasswordInput placeholder="Create a strong password" value={password}
            onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
            error={errors.password} />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <PasswordInput placeholder="Confirm your password" value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value); setErrors((p) => ({ ...p, confirmPassword: undefined })); }}
            error={errors.confirmPassword} />
        </div>

        <button type="submit" disabled={isLoading}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
          Reset Password
        </button>

        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}
