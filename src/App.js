import React from 'react';

const App = () => {
  function handleClick(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleClick);
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(event) => alert(event.target.innerText)}>
        Comprar Violão
      </button>
    </div>
  );
};

export default App;
