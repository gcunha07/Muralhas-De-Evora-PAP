import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [query, setQuery] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-400">Muralhas de Evora</Link>

      <div className="flex items-center space-x-6">
        <form onSubmit={onSearch} className="flex items-center">
          <label htmlFor="nav-search" className="sr-only">Pesquisar</label>
          <input
            id="nav-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar..."
            className="bg-slate-800 text-white px-3 py-2 rounded-l focus:outline-none"
          />
          <button type="submit" className="bg-blue-600 px-3 py-2 rounded-r hover:bg-blue-500">
            🔍
          </button>
        </form>

        <Link href="/" className={isActive('/') ? 'bg-blue-600 px-3 py-2 rounded' : 'px-3 py-2 hover:bg-slate-700 rounded'}>
          Contactos
        </Link>
        <Link href="/produtos" className={isActive('/produtos') ? 'bg-blue-600 px-3 py-2 rounded' : 'px-3 py-2 hover:bg-slate-700 rounded'}>
          🧾 Produtos
        </Link>
      </div>
    </nav>
  );
}
