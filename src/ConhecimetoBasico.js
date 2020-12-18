import React from 'react';

const ConhecimetoBasico = () => {
  const [contar, setContar] = React.useState(0);

  // Conhecimento basico de como funcionar o UseEffect
  React.useEffect(() => {
    console.log('Executou');
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  return (
    <div>
      <p>
        {' '}
        <h3>Mudar o titulo</h3>
        <button onClick={() => setContar(contar + 1)}> {contar}</button>
      </p>
    </div>
  );
};

export default ConhecimetoBasico;
