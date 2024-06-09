// Método simples
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Loja de Produtos';
document.body.appendChild(titulo);

// Método complexo
const produto = document.createElement('div');
produto.id = 'produto';

const nome = document.createElement('h2');
nome.textContent = 'Nome do Produto: Smartphone XYZ';
produto.appendChild(nome);

const descricao = document.createElement('p');
descricao.textContent = 'Descrição: Smartphone de última geração com todas as funcionalidades que você precisa.';
produto.appendChild(descricao);

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 2.500,00';
produto.appendChild(preco);

const imagem = document.createElement('img');
imagem.src = 'https://via.placeholder.com/150';
imagem.alt = 'Imagem do Smartphone XYZ';
produto.appendChild(imagem);

document.body.appendChild(produto);
