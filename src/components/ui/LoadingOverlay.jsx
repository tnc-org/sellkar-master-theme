'use client';
import { Spin } from 'antd';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-9999 bg-white/50 backdrop-blur-sm flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
}