'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import { OTPInput } from '@/components/auth/otp-input';
import BorderButton from '@/components/auth/BorderButton';
import { forgotPasswordVerifyOtp } from '@/lib/api/auth';
import { saveToken } from '@/lib/utils/storage';

export default function ForgotPasswordOTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendCountdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [resendCountdown, canResend]);

  const validateForm = () => {
    const newErrors = {};

    if (!otp || otp.length !== 6) {
      newErrors.otp = 'Please enter a valid 6-digit code';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const email = localStorage.getItem("forgotPasswordEmail");
      const res = await forgotPasswordVerifyOtp({ email, otpCode: otp })

      console.log("forgot password otp page response: ", res.data);
      const token = res?.data?.data;
      console.log(token);
      saveToken(token);
      router.push('/auth/reset-password');
    } catch (error) {
        console.log("Full error:", error?.response?.data); // ← add this
        const message = error?.response?.data?.message || 'Signup failed. Please try again.';
        setApiError(message);
      } finally {
        setIsLoading(false);
      }
  };

  const handleResend = async () => {
    setCanResend(false);
    setResendCountdown(60);

    await new Promise((resolve) => setTimeout(resolve, 500));
  };

  return (
    <AuthLayout title="Verify Code">
      <form onSubmit={handleSubmit} className="space-y-6">

        <p className="text-sm text-gray-600 text-center">
          We sent a 6-digit verification code to your email. Please enter it below.
        </p>

        <OTPInput value={otp} onChange={setOtp} error={errors.otp} />

        <button
          type="submit"
          disabled={isLoading || otp.length !== 6}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 mt-8"
        >
          {isLoading ? 'Verifying...' : 'Verify Code'}
        </button>

        <div className="text-center text-sm text-gray-600">
          {!canResend && resendCountdown > 0 ? (
            <p>Resend code in {resendCountdown}s</p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className="text-blue-600 hover:underline font-medium disabled:opacity-50"
            >
              Resend Code
            </button>
          )}
        </div>

        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}