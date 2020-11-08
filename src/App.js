import React from 'react';

function App() {
  const livros = [
    { nome: 'A Game Of Thrones', ano: 1986 },
    { nome: 'A Clash Of Kings', ano: 1998 },
    { nome: 'A Storm Of Swords', ano: 2000 },
  ];

  return (
    <>
      {livros
        .filter(({ ano }) => ano >= 1988)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {' '}
            {nome}, {ano}
          </li>
        ))}
    </>
  );
}

export default App;
