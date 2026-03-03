const express = require('express');
const router = express.Router();

let db = require('../data/database');

router.get('/erro-teste', (req, res) => {
    throw new Error("o servidor erro teste");
});

router.get('/', (req, res) => {
    const categoriaId = req.query.categoriaId;

    if (categoriaId) {
        const produtosFiltrados = db.produtos.filter (p => p.categoriaId == categoriaId);
        return res.json(produtosFiltrados);
    }
    res.json(db.produtos);
});

router.post('/', (req, res) => {
    const novoProduto = {
        id: db.produtos.lenght > 0 ? 
        Math.max(...db.produtos.map(p => p.id)) + 1 : 1,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,};

    db.produtos.push(novoProduto);
    res.status(201).json(novoProduto);
}   );
router.put('/:id', (req, res) =>{
const produtoId = parseInt(req.params.id);
const index = dbprodutos.findIndex(p => p.id === produtoId);
if (index !== -1) {
db.produtos [index] = {
...db.produtos [index],...req.body
};
res.json(db.produtos [index]);
}else {
res.status(404).json({ message: "Produto não encontrado" });
}
});
router.delete('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    db.produtos = db.produtos.filter(p => p.id !== produtoId);
    res.status(204).send();
});
const express = require('express');
const app = express();
app.use(express.json());

let suplementos = [];
let nextId = 1;

// Criar suplemento
app.post('/suplementos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ erro: 'Campos obrigatórios: nome, preco, categoria.' });
    }
    const novoSuplemento = { id: nextId++, nome, preco, categoria };
    suplementos.push(novoSuplemento);
    res.status(201).json(novoSuplemento);
});

// Atualizar suplemento
app.put('/suplementos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, preco, categoria } = req.body;
    const index = suplementos.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Suplemento não encontrado.' });
    }
    suplementos[index] = { id, nome, preco, categoria };
    res.json(suplementos[index]);
});

// Deletar suplemento
app.delete('/suplementos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = suplementos.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Suplemento não encontrado.' });
    }
    suplementos.splice(index, 1);
    res.status(204).send();
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});