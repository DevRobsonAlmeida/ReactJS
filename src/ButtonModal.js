import React from 'react';

const ButtonModal = ({ modal, setModal }) => {
  return (
    <button onClick={() => setModal(!modal)}>
      {!modal ? 'Abrir' : 'Fechar'}
    </button>
  );
};

export default ButtonModal;
