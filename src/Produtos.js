import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb ram'] },
  { nome: 'Smarphone', propriedades: ['2gb ram', '128gb ram'] },
];
function Produtos() {
  return (
    <>
      <h1>
        <Titulo texto="Produtos"></Titulo>
      </h1>
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </>
  );
}

export default Produtos;
