// GET /api/produtos - Carregar todos os produtos
export async function carregarProdutosAPI() {
  try {
    const response = await fetch('/api/produtos')
    
    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar produtos')
    }
    
    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar produtos:', error)
    throw error
  }
}

// GET /api/produtos/:id - Carregar um produto específico por ID
export async function carregarProdutoPorIdAPI(id) {
  try {
    const response = await fetch(`/api/produtos/${id}`)
    
    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar produto')
    }
    
    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar produto:', error)
    throw error
  }
}

// POST /api/produtos - Criar novo produto
export async function adicionarProdutoAPI(dadosProduto) {
  try {
    const response = await fetch('/api/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosProduto)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao adicionar produto')
    }
    
    const resultado = await response.json()
    return resultado

  } catch (error) {
    console.error('Erro ao adicionar produto:', error)
    throw error
  }
}

// PUT /api/produtos/:id - Atualizar produto existente
export async function atualizarProdutoAPI(id, dadosProduto) {
  try {
    const response = await fetch(`/api/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosProduto)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao atualizar produto')
    }
    
    const resultado = await response.json()
    return resultado

  } catch (error) {
    console.error('Erro ao atualizar produto:', error)
    throw error
  }
}

// DELETE /api/produtos/:id - Eliminar produto
export async function eliminarProdutoAPI(id) {
  try {
    const response = await fetch(`/api/produtos/${id}`, { 
      method: 'DELETE' 
    })
    
    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao eliminar produto')
    }

    return true

  } catch (error) {
    console.error('Erro ao eliminar produto:', error)
    throw error
  }
}
