'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import BorderButton from '@/components/auth/BorderButton';
import { forgotPasswordEmail } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) {
      return;
    }

    try {
      const res = await forgotPasswordEmail({ email });

      console.log("forgot password email res: ", res.data);

      const forgotPasswordOtp = res.data?.data;
      localStorage.setItem("forgotPasswordOtp", forgotPasswordOtp);
      localStorage.setItem("forgotPasswordEmail", email);
      router.push("/auth/forgot-password-otp");

    } catch (error) {
      console.log("Full error:", error?.response?.data); // ← add this
      const message = error?.response?.data?.message || 'Signup failed. Please try again.';
      setApiError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <AuthLayout>
        <div className="text-center space-y-6">

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border-2 border-green-200">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check your email
            </h2>

            <p className="text-gray-600 text-sm">
              We've sent a password reset code to <strong>{email}</strong>
            </p>
          </div>

          <Link href="/auth/forgot-password-otp">
            <button className="w-full h-12  mb-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Enter verification code
            </button>
          </Link>

          <BorderButton href="/auth/signin" label="Back to login" />
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Forgot Password">
      <form onSubmit={handleSubmit} className="space-y-6">

        <p className="text-sm text-gray-600">
          Enter the email address associated with your account. We'll send you
          a code to reset your password.
        </p>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Send OTP Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-blue-600  hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 mt-5"
        >
          {isLoading ? 'Sending...' : 'Send Reset Code'}
        </button>

        {/* Back to Login */}
        <BorderButton href="/auth/signin" label="Back to login" />

      </form>
    </AuthLayout>
  );
}