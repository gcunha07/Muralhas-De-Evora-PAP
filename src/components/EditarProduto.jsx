import { useState, useEffect } from 'react'
import { atualizarProdutoAPI } from '@/services/api'

export default function EditarProduto({ isOpen, onClose, onSuccess, produto }) {
  const [formData, setFormData] = useState({
    nome: '',
    preco: ''
  })

  useEffect(() => {
    if (produto) {
      setFormData({
        nome: produto.nome || '',
        preco: produto.preco?.toString() || ''
      })
    }
  }, [produto])

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      atualizarProdutoAPI(produto._id, formData)
      onSuccess()
      onClose()
    } catch (error) {
      alert('Erro ao atualizar produto')
    }
  }

  function handleClose() {
    setFormData({ nome: '', preco: '' })
    onClose()
  }

  if (!isOpen || !produto) return null

  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">✏️ Editar Produto</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 text-2xl">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Produto
            </label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: Smartphone Pro" />
          </div>

          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-2">
              Preço (€)
            </label>
            <input type="number" step="0.01" id="preco" name="preco" value={formData.preco} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ex: 299.99" />
          </div>

          <div className="flex space-x-3 pt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">
              Atualizar
            </button>
            
            <button type="button" onClick={handleClose} className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex-1">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
