import React from 'react';
import ComponenteMontou from './ComponenteMontou';
import ConhecimetoBasico from './ConhecimetoBasico';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  // Efeito antes de desmonta
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '220vh' }}>
      <ConhecimetoBasico />
      <br />
      <ComponenteMontou />
      <br />

      <h3>Ativa e Desativa a Mensagem</h3>
      <button onClick={() => setAtivo(!ativo)}>
        {!ativo ? 'Ativar' : 'Desativar'}
      </button>
      {ativo && <Produto />}
    </div>
  );
};

export default App;
