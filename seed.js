require('dotenv').config();
const connectDB = require('./lib/mongodb');
const Produto = require('./models/Produto');

const produtosIniciais = [
  { nome: "Laptop Gaming", preco: 1299.99 },
  { nome: "Smartphone Pro", preco: 899.5 },
  { nome: "Headphones Bluetooth", preco: 159.99 },
  { nome: "Smartwatch", preco: 299.99 }
];

async function criarDadosIniciais() {
  try {
    await connectDB();
    await Produto.insertMany(produtosIniciais);
    console.log('✅ Dados iniciais criados');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro:', error);
    process.exit(1);
  }
}

criarDadosIniciais();