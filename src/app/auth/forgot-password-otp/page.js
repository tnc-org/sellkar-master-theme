'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import { OTPInput } from '@/components/auth/otp-input';
import BorderButton from '@/components/auth/BorderButton';
import { forgotPasswordEmail, forgotPasswordVerifyOtp } from '@/lib/api/auth';
import LoadingOverlay from '@/components/ui/LoadingOverlay';

export default function ForgotPasswordOTPPage() {
  const router = useRouter();
  const [otp, setOtp]             = useState('');
  const [errors, setErrors]       = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [apiError, setApiError]   = useState('');

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(t);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setApiError('');
    if (!otp || otp.length !== 6) { setErrors({ otp: 'Please enter a valid 6-digit code' }); return; }
    setErrors({});
    setIsLoading(true);
    try {
      const email = localStorage.getItem('forgotPasswordEmail');
      const res   = await forgotPasswordVerifyOtp({ email, otpCode: otp });
      localStorage.setItem('resetToken', res?.data?.data ?? '');
      router.push('/auth/reset-password');
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setCanResend(false);
    setCountdown(60);
    setIsResending(true);
    try {
      const email = localStorage.getItem('forgotPasswordEmail');
     const res =  await forgotPasswordEmail({ email });
     console.log("resended forgot password otp: ", res?.data);
    } catch (err) {
      console.log('Resend error:', err?.response?.data);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout title="Verify Code">
      {(isLoading || isResending) && <LoadingOverlay />}
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600 text-center">
          We sent a 6-digit verification code to your email. Please enter it below.
        </p>

        {apiError && (
          <p className="text-xs text-red-500 text-center bg-red-50 rounded-lg py-2 px-3">{apiError}</p>
        )}

        <OTPInput value={otp} onChange={setOtp} error={errors.otp} />

        <button type="submit" disabled={isLoading || otp.length !== 6}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
          Verify Code
        </button>

        <div className="text-center text-sm text-gray-600">
          {!canResend && countdown > 0 ? (
            <p>Resend code in {countdown}s</p>
          ) : (
            <button type="button" onClick={handleResend} disabled={!canResend || isResending}
              className="text-blue-600 hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              Resend Code
            </button>
          )}
        </div>

        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}

