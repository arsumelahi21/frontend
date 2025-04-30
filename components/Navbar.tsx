'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition">
          Job Matcher
        </Link>
        <div className="flex gap-4">
          <Link href="/add-job" className="text-gray-700 hover:text-blue-600 transition">Add Job</Link>
          <Link href="/add-candidate" className="text-gray-700 hover:text-green-600 transition">Add Candidate</Link>
          <Link href="/match" className="text-gray-700 hover:text-purple-600 transition">Match</Link>
        </div>
      </div>
    </nav>
  );
}
