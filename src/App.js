import React from 'react';

const Titulo = <h1>Esse é um titulo</h1>;

function App() {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return 'André' + sobrenome;
  }
  const carro = {
    marca: 'Ford',
    rodas: '4',
  };
  const estilo = {
    color: 'blue',
  };
  return (
    <>
      {Titulo}
      <p>
        {true ? '1' : '2'} - {10}
        {mostrarNome('Rafael')}
      </p>
      <p style={{ estilo }}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
}

export default App;
