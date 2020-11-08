import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  /**
   * O useState é uma funçaõ que retorna um Array com 2 valores. O
   * primeiro valor guarda o dado do estado atual, oide ser qualquer
   * tipo de dado como string, array, números, boolean, null, undefined
   * e objetos. O segundo valor é uma função que pode ser utilizada
   * para, modificarmos o esdodo do primero valor.
   *
   * Quando a função de modificação do estado é ativada, todos os
   * componentes que dependerem do estado, serão renderizados
   * novamente e os seus filhos também. É isso que garante a
   * reatividade de componentes funcionais no React.
   */
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });

  const [modal, setModal] = React.useState(false);

  function handleClick(params) {
    setAtivo(!ativo);
    if (ativo === true) setDados({ ...dados, faculdade: 'Possui Faculdade' });
    if (ativo === false)
      setDados({ ...dados, faculdade: 'Não Possui Faculdade' });
  }

  return (
    <div>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Faculdade: {dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p></p>
      <div>{modal ? 'Modal aberto' : 'Modal Fechado'}</div>
      <ButtonModal modal={modal} setModal={setModal} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
