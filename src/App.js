import React from 'react';

const mario = {
  cliente: 'Mario',
  idade: 27,
  compra: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: true,
};
const luana = {
  cliente: 'Luana',
  idade: 21,
  compra: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: false,
};

function App() {
  const dados = mario;

  const total = dados.compra
    // usando map, vou passar um colback que recebe item que irar retornar o preço,
    // Number() ele transforma qualquer array string que seja numero.
    // Usando o replace para limpar o preço deixando só os numeros
    .map((item) => Number(item.preco.replace('R$ ', '')))
    //reduce() recebe o valor anterior e soma com o atual, isso repetidamente até o fim do array

    .reduce((a, b) => a + b);

  return (
    <>
      <p> Nome: {dados.cliente} </p>
      <p> Idade: {dados.idade} </p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? ' Ativo' : ' Inativo'}
        </span>
      </p>
      <p> Valor total da compras : R$ {total}</p>
      {total > 10000 && <p>'Você está gastando muito'</p>}
    </>
  );
}

export default App;
