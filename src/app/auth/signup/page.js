'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { PasswordInput } from '@/components/auth/password-input';
import { signup, verifyEmailOtp } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';
import SocialButtons from '@/components/auth/social-buttons';
import Spinner from '@/components/ui/Spinner';
import {
  firstNamePattern,
  lastNamePattern,
  emailPattern,
  passwordPattern,
} from '@/lib/utils/core';
import { errorMessages } from '@/lib/utils/errorMessages';

export default function SignUpPage() {
  const [firstName, setFirstName]               = useState('');
  const [lastName, setLastName]                 = useState('');
  const [email, setEmail]                       = useState('');
  const [password, setPassword]                 = useState('');
  const [confirmPassword, setConfirmPassword]   = useState('');
  const [errors, setErrors]                     = useState({});
  const [isLoading, setIsLoading]               = useState(false);
  const [apiError, setApiError]                 = useState('');
  const router = useRouter();

  const validateForm = () => {
    const e = {};

    if (!firstName.trim())               e.firstName = errorMessages.firstNameRequired;
    else if (!firstNamePattern.test(firstName)) e.firstName = errorMessages.firstNameInvalid;

    if (!lastName.trim())                e.lastName = errorMessages.lastNameRequired;
    else if (!lastNamePattern.test(lastName))   e.lastName = errorMessages.lastNameInvalid;

    if (!email)                          e.email = errorMessages.emailRequired;
    else if (!emailPattern.test(email))  e.email = errorMessages.emailInvalid;

    if (!password)                             e.password = errorMessages.passwordRequired;
    else if (!passwordPattern.test(password))  e.password = errorMessages.passwordInvalid;

    if (!confirmPassword)                       e.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword)      e.confirmPassword = errorMessages.confirmPasswordInvalid;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setApiError('');
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await signup({ firstName, lastName, email, password });
      const otpRes = await verifyEmailOtp({ email });
      const emailOtp = otpRes?.data?.data ?? '';
      console.log('📧 Email Verification OTP:', emailOtp);
      localStorage.setItem('emailOtp',    emailOtp);
      localStorage.setItem('verifyEmail', email);
      router.push('/auth/verify-email');
    } catch (err) {
      setApiError(err?.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Sign up">
      <form onSubmit={handleSubmit} className="space-y-3">

        {apiError && (
          <p className="text-xs text-red-500 text-center bg-red-50 rounded-lg py-2 px-3">{apiError}</p>
        )}

        {/* Name */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">First Name</label>
            <input
              type="text" placeholder="John" value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none text-sm focus:border-blue-600"
            />
            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
          </div>
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">Last Name</label>
            <input
              type="text" placeholder="Doe" value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none text-sm focus:border-blue-600"
            />
            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-700">Email</label>
          <input
            type="email" placeholder="you@example.com" value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 px-3 rounded-lg border-2 border-gray-300 text-gray-700 placeholder-gray-400 outline-none text-sm focus:border-blue-600"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-700">Password</label>
          <PasswordInput placeholder="Create a strong password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} />
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="block text-xs font-medium text-gray-700">Confirm Password</label>
          <PasswordInput placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={errors.confirmPassword} />
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={isLoading}
          className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 mt-1"
        >
          {isLoading ? <><Spinner size="sm" /> Creating account...</> : 'Sign Up'}
        </button>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300" /></div>
          <div className="relative flex justify-center text-xs"><span className="px-2 bg-white text-gray-500">Or sign up with</span></div>
        </div>

        <SocialButtons />

        <p className="text-center text-xs text-gray-700">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-blue-600 hover:underline font-semibold">Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}