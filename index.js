const express = require('express');
const app = express();
app.use(express.json());


const categorias = [
    { id: 1, nome: 'Proteínas' },
    { id: 2, nome: 'Vitaminas' },
    { id: 3, nome: 'Aminoácidos' },
    { id: 4, nome: 'Termogênicos' }
];
let suplementos = [
    { id: 1, nome: 'Whey Protein', preco: 120.00, categoria: 'Proteínas' },
    { id: 2, nome: 'Vitamina C', preco: 35.00, categoria: 'Vitaminas' },
    { id: 3, nome: 'BCAA', preco: 75.00, categoria: 'Aminoácidos' },
    { id: 4, nome: 'Cafeína', preco: 40.00, categoria: 'Termogênicos' }
];
let nextId = 5;
app.get('/suplementos', (req, res) => {
    res.json(suplementos);
});
app.post('/suplementos', (req, res) => {
    const { nome, preco, categoria } = req.body;
    if (!nome || !preco || !categoria) {
        return res.status(400).json({ erro: 'Campos obrigatórios: nome, preco, categoria.' });
    }
    const novoSuplemento = { id: nextId++, nome, preco, categoria };
    suplementos.push(novoSuplemento);
    res.status(201).json(novoSuplemento);
});
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
app.delete('/suplementos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = suplementos.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({ erro: 'Suplemento não encontrado.' });
    }
    suplementos.splice(index, 1);
    res.status(204).send();
});
app.get('/categorias', (req, res) => {
    res.json(categorias);
});
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
