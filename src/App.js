import React from 'react';

function App() {
  const livros = [
    { nome: 'A Game od Thrones', ano: 1996 },
    { nome: 'A Clash of kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];
  return (
    <>
      <ul>
        {livros
          .filter(({ ano }) => ano >= 1998)
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
