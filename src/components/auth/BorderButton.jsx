import Link from 'next/link';

export default function BorderButton({ href, label }) {
  return (
    <Link href={href}>
      <button className="w-full h-12 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold transition-colors hover:bg-gray-50">
        {label}
      </button>
    </Link>
  );
}