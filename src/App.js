import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  /**
   * Explição basica
   * O 'ativo' receberá primeiro valor.
   * Já o 'setAtivo' tem a função de sempre atualizar o valor do 'ativo'
   */
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });
  // Usando de modo Externo
  const [modal, setModal] = React.useState(false);

  // setAtivo(<atribuir o novo valor>)
  function handleClick() {
    setAtivo(!ativo);
    if (ativo === true)
      setDados({ ...dados, faculdade: 'Possui Faculdade', idade: 50 });
    else setDados({ ...dados, faculdade: 'Não Possui Faculdade', idade: 17 });
  }

  return (
    <>
      {/* Modo interno */}
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>

      {/* Modo externo */}
      <p></p>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <p>
        <ButtonModal modal={modal} setModal={setModal} />
        <Modal modal={modal} />
      </p>
    </>
  );
};
export default App;
