import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-400">🛒 TechStore</Link>

      <div className="flex space-x-6">
        <Link href="/" className={isActive('/') ? 'bg-blue-600 px-3 py-2 rounded' : 'px-3 py-2 hover:bg-slate-700 rounded'}>
          🏠 Início
        </Link>
        <Link href="/produtos" className={isActive('/produtos') ? 'bg-blue-600 px-3 py-2 rounded' : 'px-3 py-2 hover:bg-slate-700 rounded'}>
          🧾 Produtos
        </Link>
      </div>
    </nav>
  );
}
