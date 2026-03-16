'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '@/components/auth/auth-layout';
import { OTPInput } from '@/components/auth/otp-input';
import BorderButton from '@/components/auth/BorderButton';
import { verifyEmailComplete, verifyEmailOtp } from '@/lib/api/auth';
export default function VerifyEmailPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);
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
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const email = localStorage.getItem("verifyEmail");
      const res = await verifyEmailComplete({
        email,
        otpCode: otp,
      })

      console.log('Email verified:', res.data);
      router.push('/auth/signin');

    } catch (error) {
      console.log('Full error:', error?.response?.data); // ← now you can see error
      setErrors({ otp: error?.response?.data?.message || 'Verification failed' });
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (resendCountdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [resendCountdown, canResend]);


  const handleResend = async () => {
  setCanResend(false);
  setResendCountdown(60);

  try {
    const email = localStorage.getItem("verifyEmail");
    const res = await verifyEmailOtp({ email }); // ← real API call
    console.log("OTP resent!");
    console.log("new otp: ", res?.data?.data);
    
  } catch (error) {
    console.log("Resend error:", error?.response?.data);
  }
};
  return (
    <AuthLayout title="Verify Email">
      <form onSubmit={handleSubmit} className="space-y-6">
        <p className="text-sm text-gray-600 text-center">
          We sent a 6-digit verification code to your email. Please enter it below.
        </p>
        <OTPInput value={otp} onChange={setOtp} error={errors.otp} />
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
        <button
          type="submit"
          disabled={isLoading || otp.length !== 6}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 mt-2"
        >
          {isLoading ? 'Verifying...' : 'Verify Email'}
        </button>
        <BorderButton href="/auth/signin" label="Back to login" />
      </form>
    </AuthLayout>
  );
}