import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { carregarProdutoPorIdAPI } from '@/services/api'

export default function ProdutoDetalhes() {
  const router = useRouter()
  const { id } = router.query
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    carregarProduto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  async function carregarProduto() {
    if (!id) return
    
    try {
      const data = await carregarProdutoPorIdAPI(id)
      setProduto(data)
    } catch (error) {
      console.error(error)
      alert('Erro ao carregar produto')
    }
  }

  if (!produto) return <div className="text-center">Produto não encontrado</div>

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Link href="/produtos" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Voltar aos Produtos
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{produto.nome}</h1>
        <p className="text-3xl font-bold text-blue-600 mb-6">€{produto.preco}</p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700">ID do Produto: <span className="font-semibold">{produto._id}</span></p>
        </div>
      </div>
    </div>
  )
}
