import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('Produto', 'null');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fecthData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fecthData();
  }, [request]);

  function handleClick({ target: { innerText } }) {
    setProduto(innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <div>Carregando...</div>;
  if (data)
    return (
      <div>
        <p>Produto Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick} style={{ margin: '.5rem' }}>
          smartphone
        </button>

        {data.map((produto) => (
          <div key={handleClick}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
