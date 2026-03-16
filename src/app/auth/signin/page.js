'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { PasswordInput } from '@/components/auth/password-input';
import { SocialButtons } from '@/components/auth/social-buttons';
import { emailLogin } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import { saveToken } from '@/lib/utils/storage';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
        const res = await emailLogin ({
          email,
          password
        });

        console.log("Signin Success", res?.data);
        console.log("Signin token", res?.data?.token);
        const token = res?.data?.token;
        saveToken(token);
        window.location.href = "/";
  
      } catch (error) {
        console.log("Full error:", error?.response?.data); // ← add this
        const message = error?.response?.data?.message || 'Signup failed. Please try again.';
        setApiError(message);
      } finally {
        setIsLoading(false);
      }
    };
  return (
    <AuthLayout title="Sign in">
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
          />

          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <PasswordInput
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-2 border-gray-300 cursor-pointer accent-blue-600"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors disabled:opacity-50 mt-8"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <SocialButtons />

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <Link
            href="/auth/signup"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}