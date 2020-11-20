import React from 'react';

function App() {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <button onClick={handleClick}>Clique</button>
      {/*\ 
        A baixo será feito um event no modo de função anônimo
      \*/}
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre violão
      </button>
      {/*\
        Window/Document
        Ao colocar um window ou document, devem ser adicionados JavaScript normalmente, usando o addEventListener.
        handleScroll retornará uma resposta ao mexer no scroll, isso por causa do window acima
      \*/}
      <div style={{ height: '200vh' }}></div>
    </>
  );
}

export default App;
