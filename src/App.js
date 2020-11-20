import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartgone',
    preco: 'R$ 2000',
    cor: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cor: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cor: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {
  //Outra forma de filtrar
  /** 
   * const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500,
    );
  */

  return (
    <>
      <ul>
        {produtos
          .filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)
          .map(({ id, nome, preco, cor }) => (
            <div key={id}>
              <h1>{nome}</h1>
              <p>Preco: {preco}</p>
              <ul>
                {cor.map((cor) => (
                  <li
                    style={{
                      backgroundColor: cor,
                      color: 'white',
                      width: '200px',
                    }}
                    key={cor}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </ul>
    </>
  );
}

export default App;
