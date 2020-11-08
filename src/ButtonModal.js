import React from 'react';

const ButtonModal = ({ modal, setModal }) => {
  if (modal === false)
    return <button onClick={() => setModal(true)}> Abrir </button>;
  return null;
};

export default ButtonModal;
