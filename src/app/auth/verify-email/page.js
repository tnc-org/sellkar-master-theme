'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import { OTPInput } from '@/components/auth/otp-input';
import BorderButton from '@/components/auth/BorderButton';
import { verifyEmailComplete, verifyEmailOtp } from '@/lib/api/auth';
import Spinner from '@/components/ui/Spinner';

export default function VerifyEmailPage() {
  const router = useRouter();
  const [otp, setOtp]                     = useState('');
  const [errors, setErrors]               = useState({});
  const [isLoading, setIsLoading]         = useState(false);
  const [isResending, setIsResending]     = useState(false);
  const [canResend, setCanResend]         = useState(true);
  const [resendCountdown, setResend]      = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const t = setTimeout(() => setResend(resendCountdown - 1), 1000);
      return () => clearTimeout(t);
    } else if (resendCountdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [resendCountdown, canResend]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!otp || otp.length !== 6) {
      setErrors({ otp: 'Please enter a valid 6-digit code' });
      return;
    }
    setErrors({});
    setIsLoading(true);
    try {
      const email = localStorage.getItem('verifyEmail');
      await verifyEmailComplete({ email, otpCode: otp });
      router.push('/auth/signin');
    } catch (err) {
      setErrors({ otp: err?.response?.data?.message || 'Verification failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setCanResend(false);
    setResend(60);
    setIsResending(true);
    try {
      const email = localStorage.getItem('verifyEmail');
      const res = await verifyEmailOtp({ email });
      console.log('📧 Resent Email OTP:', res?.data?.data);
    } catch (err) {
      console.log('Resend error:', err?.response?.data);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <AuthLayout title="Verify Email">
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-600 text-center">
          We sent a 6-digit verification code to your email. Please enter it below.
        </p>

        <OTPInput value={otp} onChange={setOtp} error={errors.otp} />

        <div className="text-center text-sm text-gray-600">
          {!canResend && resendCountdown > 0 ? (
            <p>Resend code in {resendCountdown}s</p>
          ) : (
            <button
              type="button" onClick={handleResend} disabled={!canResend || isResending}
              className="text-blue-600 hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-1 mx-auto"
            >
              {isResending && <Spinner size="sm" />} Resend Code
            </button>
          )}
        </div>

        <button
          type="submit" disabled={isLoading || otp.length !== 6}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? <><Spinner size="sm" /> Verifying...</> : 'Verify Email'}
        </button>

        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}