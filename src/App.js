import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target: { value } }) {
    setProduto(value);
  }

  return (
    <form>
      <h1>Produtos</h1>
      <label>
        <input
          type="radio"
          value="notebook"
          onChange={handleChange}
          checked={produto === 'notebook'}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          onChange={handleChange}
          checked={produto === 'smartphone'}
        />
        Smartphone
      </label>
      {produto}

      <h1>Cor</h1>
      <label>
        <input
          type="radio"
          value="azul"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
        />
        Vermelho
      </label>
      {cor}
    </form>
  );
};
export default App;
