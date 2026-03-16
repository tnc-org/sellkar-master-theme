'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { PasswordInput } from '@/components/auth/password-input';
import BorderButton from '@/components/auth/BorderButton';
import { resetPassword } from '@/lib/api/auth';
import { getToken } from '@/lib/utils/storage';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setApiError("");
    e.preventDefault();

    setIsLoading(true);
    try{
      const token = getToken("token");
      const res =  await resetPassword({token, password});
      console.log("response form reset password page: ", res.data);
      router.push("/auth/signin");
    }catch (error) {
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
              Password Reset
            </h2>

            <p className="text-gray-600 text-sm">
              Your password has been successfully reset.
            </p>
          </div>

          <Link href="/auth/signin">
            <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Back to login
            </button>
          </Link>

        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={handleSubmit} className="space-y-6">

        <p className="text-sm text-gray-600">
          Enter your new password below.
        </p>

        {/* New Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>

          <PasswordInput
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <PasswordInput
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50 mt-8"
        >
          {isLoading ? 'Resetting...' : 'Reset Password'}
        </button>

        {/* Back to Login */}
        <BorderButton href="/auth/signin" label="Back to login" />

      </form>
    </AuthLayout>
  );
}