import React from 'react';

function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd012', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c4c8', '#f95786'],
    },
  ];

  return (
    <>
      {produtos
        .filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)
        .map(({ id, nome, preco, cores }) => (
          <div key={id}>
            <h1>{nome}</h1>
            <p>{preco}</p>
            <ul>
              {cores.map((cor) => (
                <li
                  style={{
                    backgroundColor: cor,
                    width: '200px',
                    color: 'white',
                  }}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}

export default App;
