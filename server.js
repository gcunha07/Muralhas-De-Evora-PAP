const express = require('express');
const next = require('next');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./lib/mongodb');
const Produto = require('./models/Produto');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();



// ===== ROTAS DA API REST =====

// GET /api/produtos - Carregar todos os produtos
app.get('/api/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find();  // Busca todos os produtos no MongoDB
    res.json(produtos);
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// GET /api/produtos/:id - Carregar um produto específico por ID
app.get('/api/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);  // Busca produto pelo ID no MongoDB
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    console.error('Erro ao carregar produto:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// POST /api/produtos - Criar novo produto
app.post('/api/produtos', async (req, res) => {
  try {
    const { nome, preco } = req.body;  // Extrai dados do body da requisição
    
    const novoProduto = new Produto({
      nome,
      preco: parseFloat(preco)
    });
    
    const produtoSalvo = await novoProduto.save();  // Guarda no MongoDB
    res.status(201).json(produtoSalvo);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// PUT /api/produtos/:id - Atualizar produto existente
app.put('/api/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }  // Retorna documento atualizado e executa validações
    );
    
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

// DELETE /api/produtos/:id - Eliminar produto
app.delete('/api/produtos/:id', async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    
    if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto eliminado com sucesso' });
  } catch (error) {
    console.error('Erro ao eliminar produto:', error);
    res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});



// ===== INICIALIZAÇÃO DO SERVIDOR =====

app.use((req, res) => {
  return handle(req, res);
});

const PORT = process.env.PORT || 3000;

nextApp.prepare().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor Next.js + Express a correr em http://localhost:${PORT}`);
    console.log(`📡 API disponível em http://localhost:${PORT}/api/produtos`);
  });
});
