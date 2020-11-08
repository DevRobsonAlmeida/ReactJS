import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        <button onClick={() => setModal(false)}>Fechar</button>
        Esse é um modal.
      </div>
    );
  return null;
};

export default Modal;
