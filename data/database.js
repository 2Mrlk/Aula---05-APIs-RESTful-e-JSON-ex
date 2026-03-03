const categorias = [
    { id: 1, nome: 'Proteínas' },
    { id: 2, nome: 'Vitaminas' },
    { id: 3, nome: 'Aminoácidos' },
    { id: 4, nome: 'Termogênicos' }
];

const suplementos = [
    {
        id: 1,
        categoriaId: 1,
        nome: 'Whey Protein',
        descricao: 'Suplemento de proteína para ganho de massa muscular.',
        preco: 120.00,
        imagem: 'https://darklabsuplementos.com.br/cdn/shop/files/whey-protein-concentrado-1kg-pacoca-dark-lab-1.webp?v=1771438025&width=990.jpg'
    },
    {
        id: 2,
        categoriaId: 2,
        nome: 'Vitamina C',
        descricao: 'Auxilia na imunidade e combate radicais livres.',
        preco: 35.00,
        imagem: 'https://www.gsuplementos.com.br/upload/produto/layout/174/mockup.webp'
    },
    {
        id: 3,
        categoriaId: 3,
        nome: 'BCAA',
        descricao: 'Aminoácidos essenciais para recuperação muscular.',
        preco: 75.00,
        imagem: 'https://www.gsuplementos.com.br/upload/produto/layout/25/bcaa-2-1-1-120comp-growth-supplements-v2.webp'
    },
    {
        id: 4,
        categoriaId: 4,
        nome: 'Cafeína',
        descricao: 'Termogênico para aumento de energia e foco.',
        preco: 40.00,
        imagem: 'https://www.gsuplementos.com.br/upload/produto/layout/2042/cafeina-200-mg-120-comp-growth-supplements-v2.webp'
    }
];

module.exports = {
    categorias,
    suplementos
};  