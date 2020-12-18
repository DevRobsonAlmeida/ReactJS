import React from 'react';

const ComponenteMontou = () => {
  const [dados, setDados] = React.useState(null);
  const [contar, setContar] = React.useState(0);

  // Componente Montou

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <h3>Multiplica o valor do produto</h3>
          <p>{dados.preco * contar}</p>
        </div>
      )}

      <button onClick={() => setContar(contar + 1)}> {contar}</button>
    </div>
  );
};

export default ComponenteMontou;
