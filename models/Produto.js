const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true }
}, {
  versionKey: false
});

module.exports = mongoose.models.Produto || mongoose.model('Produto', produtoSchema);
