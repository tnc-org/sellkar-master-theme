'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import BorderButton from '@/components/auth/BorderButton';
import { forgotPasswordEmail } from '@/lib/api/auth';
import Spinner from '@/components/ui/Spinner';
import { emailPattern } from '@/lib/utils/core';
import { errorMessages } from '@/lib/utils/errorMessages';

export default function ForgotPasswordPage() {
  const [email, setEmail]         = useState('');
  const [errors, setErrors]       = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError]   = useState('');
  const router = useRouter();

  const validateForm = () => {
    const e = {};
    if (!email)                         e.email = errorMessages.emailRequired;
    else if (!emailPattern.test(email)) e.email = errorMessages.emailInvalid;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setApiError('');
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const res = await forgotPasswordEmail({ email });
      const forgotOtp = res?.data;
      console.log('Forgot Password OTP:', forgotOtp);
      localStorage.setItem('forgotPasswordOtp',   forgotOtp);
      localStorage.setItem('forgotPasswordEmail', email);
      router.push('/auth/forgot-password-otp');
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Forgot Password">
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600">
          Enter the email address associated with your account. We&apos;ll send you a code to reset your password.
        </p>

        {apiError && (
          <p className="text-xs text-red-500 text-center bg-red-50 rounded-lg py-2 px-3">{apiError}</p>
        )}

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email" placeholder="you@example.com" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-blue-600"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <button
          type="submit" disabled={isLoading}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? <><Spinner size="sm" /> Sending...</> : 'Send Reset Code'}
        </button>

        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}