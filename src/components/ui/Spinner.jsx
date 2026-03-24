'use client';

import { Spin } from 'antd';

/**
 * Spinner — Ant Design Spin
 * size: 'sm'  → Spin size="small"  (buttons ke andar)
 * size: 'lg'  → Spin size="large"  (screen/card load)
 * default     → Spin size="default"
 */
export default function Spinner({ size = 'sm' }) {
  const antSize = size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'default';
  return <Spin size={antSize} />;
}