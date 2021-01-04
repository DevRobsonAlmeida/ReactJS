import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  //Correto

  //Jeito ERRADOS de usar os hooks
  //Colocar dentro de um IF
  let condicao = true;
  if (condicao) {
    React.useEffect(() => (document.title = 'Titule novo'));
  }

  //Colocar dentro de uma Function
  function mudarTitulo() {
    React.useEffect(() => (document.title = 'Titule novo'));
  }

  //Colocar dentro de um For loop
  for (let i = 0; (i = 10); i++) {
    React.useEffect(() => (document.title = 'Titule novo'));
  }

  //Errado, mas pode se transformar em um custom hook se começar com "use"
  //Exemplo
  function useNumeroAleatorio() {
    const numero = Math.random();
    React.useEffect(() => {
      document.title = numero;
    }, []);
  }

  return <> </>;
};

export default App;
