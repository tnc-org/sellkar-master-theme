'use client';

import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";



export function OTPInput({ value, onChange, error }) {
  return (
    <div className="space-y-3">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={onChange}
        disabled={false}
      >
        <InputOTPGroup className="flex justify-center gap-2 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <InputOTPSlot
              key={i}
              index={i}
              className="w-12 h-12 text-center text-lg font-bold border-2 border-gray-300 rounded-lg bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            />
          ))}
        </InputOTPGroup>
      </InputOTP>

      {error && (
        <p className="text-xs text-red-500 text-center">
          {error}
        </p>
      )}
    </div>
  );
}