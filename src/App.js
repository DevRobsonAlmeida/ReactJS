import React from 'react';

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: '2500' },
    { nome: 'Geladeira', preco: '3000' },
    { nome: 'Smarphone', preco: '1500' },
    { nome: 'Guitarra', preco: '1500' },
  ],
  ativa: false,
};
const luana = {
  cliente: 'Luana',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: '2500' },
    { nome: 'Geladeira', preco: '3000' },
    { nome: 'Smarphone', preco: '1500' },
  ],
  ativa: ativa,
};
function App() {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome:{dados.cliente}</p>
      <p>Idade:{dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 1000 && <p>Você está gastando muito</p>}
    </>
  );
}

export default App;
