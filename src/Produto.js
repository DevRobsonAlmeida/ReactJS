import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  if (global.dados === null) return null;
  return (
    <div>
      Produtos:
      <ul>
        {global.dados.map((produto) => (
          <li>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
