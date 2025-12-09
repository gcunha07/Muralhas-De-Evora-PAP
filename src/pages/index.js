import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Bem-vindo à Nossa Loja
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Gestão de produtos com Next.js e Express
      </p>
      
      <div className="space-x-4">
        <Link href="/produtos" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Ver Produtos
        </Link>
        <Link href="/api/produtos" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors" target="_blank">
          API de Produtos
        </Link>
      </div>
    </div>
  );
}
