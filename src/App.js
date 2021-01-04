import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('Produto', '');

  function handleClick({ target: { innerText } }) {
    setProduto(innerText);
  }

  return (
    <div>
      <p>Produto Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        smartphone
      </button>
    </div>
  );
};

export default App;
