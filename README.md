# Next.js + Express + MongoDB Atlas Project

Um projeto full-stack que combina Next.js para o frontend com Express.js para o backend e MongoDB Atlas como base de dados na nuvem, criando uma aplicação web completa para gestão de produtos.

## 🚀 Funcionalidades

- ✅ Listagem de produtos
- ✅ Adicionar novos produtos
- ✅ Editar produtos existentes
- ✅ Eliminar produtos
- ✅ Visualização detalhada de produtos
- ✅ Interface responsiva
- ✅ Base de dados na nuvem (MongoDB Atlas)
- ✅ Validação de dados com Mongoose


## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **Express.js 5** - Framework web para Node.js
- **MongoDB Atlas** - Base de dados na nuvem
- **Mongoose** - ODM para MongoDB
- **React** - Biblioteca para interfaces de utilizador
- **TailwindCSS** - Framework CSS utilitário
- **Nodemon** - Ferramenta de desenvolvimento para reinício automático


## 📁 Estrutura do Projeto

```
├── lib/
│   └── mongodb.js                # Conexão MongoDB Atlas
├── models/
│   └── Produto.js                # Modelo Mongoose
├── src/
│   ├── components/
│   │   ├── AdicionarProduto.jsx  # Modal adicionar produtos
│   │   ├── EditarProduto.jsx     # Modal editar produtos
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── index.js              # Página inicial
│   │   ├── produtos.js           # Página listagem produtos
│   │   └── produto/[id].js       # Página detalhes produto
│   ├── services/
│   │   └── api.js                # Chamadas API centralizadas
│   └── styles/
│       └── globals.css
├── public/
├── .env                          # Configuração MongoDB Atlas
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── next_express_mongodb.md       # Tutorial completo do projeto
├── nodemon.json
├── package.json
├── postcss.config.mjs
├── README.md
└── server.js                     # Servidor Express integrado
```


## ⚙️ Configuração

### 1. **Configurar MongoDB Atlas**
1. Criar conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Criar cluster gratuito
3. Configurar acesso (IP + utilizador)
4. Copiar string de conexão

### 2. **Configurar variáveis de ambiente**
Criar ficheiro `.env` na raiz:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
NODE_ENV=development
PORT=3000
```

### 3. **Instalar dependências e executar**
```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev
```

### 4. **Aceder à aplicação**
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API**: [http://localhost:3000/api/produtos](http://localhost:3000/api/produtos)
- **MongoDB Atlas**: Painel web para gestão directa


## 📜 Scripts Disponíveis

- `npm run dev` - Executa o servidor em modo desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Executa o servidor em modo produção
- `npm run server` - Executa apenas o servidor Express
- `npm run migrate` - Script de migração (se necessário)


## 📡 API Endpoints

A API REST inclui os seguintes endpoints com integração MongoDB:

- `GET /api/produtos` - Lista todos os produtos (ordenados por data)
- `GET /api/produtos/:id` - Obtém detalhes de um produto específico
- `POST /api/produtos` - Adiciona um novo produto (com validação)
- `PUT /api/produtos/:id` - Atualiza um produto existente
- `DELETE /api/produtos/:id` - Elimina um produto

### Exemplo de resposta da API:
```json
[
  {
    "_id": "650f1f1e123abc456def789a",
    "nome": "Laptop Gaming",
    "preco": 1299.99
  }
]
```


## 🎨 Interface

A aplicação inclui as seguintes páginas:

- **Home** (`/`) - Página inicial com navegação
- **Produtos** (`/produtos`) - Lista e gestão completa de produtos
- **Detalhes do Produto** (`/produto/[id]`) - Visualização detalhada de cada produto

### Funcionalidades da Interface:
- ✅ **Modais** para adicionar/editar produtos
- ✅ **Validação** de formulários
- ✅ **Design responsivo** com Tailwind CSS
- ✅ **Navegação dinâmica** entre páginas
- ✅ **Tratamento de erros** amigável

## 🔧 Gestão de Dados

### Via Aplicação:
- Interface web completa para todas as operações CRUD
- Validação automática de dados
- Feedback visual de operações

### Via MongoDB Atlas:
- Painel web para gestão directa
- Backup automático na nuvem
- Monitorização em tempo real

## 📚 Documentação

- **Tutorial completo**: `next_express_mongodb.md` - Guia passo-a-passo do zero
