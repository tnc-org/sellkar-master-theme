'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { PasswordInput } from '@/components/auth/password-input';
import { emailLogin } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import { saveToken } from '@/lib/utils/storage';

import Spinner from '@/components/ui/Spinner';
import { emailPattern, passwordPattern } from '@/lib/utils/core';
import { errorMessages } from '@/lib/utils/errorMessages';
import SocialButtons from '@/components/auth/social-buttons';


export default function SignInPage() {
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors]         = useState({});
  const [isLoading, setIsLoading]   = useState(false);
  const [apiError, setApiError]     = useState('');
  const router = useRouter();

  const validateForm = () => {
    const e = {};
    if (!email)                          e.email    = errorMessages.emailRequired;
    else if (!emailPattern.test(email))  e.email    = errorMessages.emailInvalid;
    if (!password)                       e.password = errorMessages.passwordRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setApiError('');
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      const res = await emailLogin({ email, password });
      saveToken(res?.data?.token);
      window.location.href = '/';
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Sign in">
      <form onSubmit={handleSubmit} className="space-y-4">

        {apiError && (
          <p className="text-xs text-red-500 text-center bg-red-50 rounded-lg py-2 px-3">{apiError}</p>
        )}

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-4 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none transition-colors focus:border-blue-600"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <PasswordInput placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input id="remember" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-2 border-gray-300 cursor-pointer accent-blue-600" />
            <label htmlFor="remember" className="text-sm text-gray-700 cursor-pointer">Remember me</label>
          </div>
          <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline font-medium cursor-pointer">Forgot password?</Link>
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={isLoading}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
        >
          {isLoading ? <><Spinner size="sm" /> Logging in...</> : 'Login'}
        </button>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or continue with</span></div>
        </div>

        <SocialButtons />

        <p className="text-center text-sm text-gray-700">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-blue-600 hover:underline font-semibold">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}