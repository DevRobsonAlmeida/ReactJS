import React from 'react';

const coresFields = [
  {
    id: 'azul',
  },
  {
    id: 'roxo',
  },
  {
    id: 'laranja',
  },
  {
    id: 'verde',
  },
  {
    id: 'vermelho',
  },
];

const App = () => {
  const [cores, setCores] = React.useState('');

  function handleChange({ target }) {
    if (target.checked) setCores([...cores, target.value]);
    else setCores(cores.filter((cor) => cor !== target.value));
  }

  function checkColor(cor) {
    console.log(cor);
    return cores.includes(cor);
  }

  return (
    <form>
      {coresFields.map(({ id }) => (
        <div>
          <label>
            <input
              type="checkbox"
              value={id}
              checked={checkColor(id)}
              onChange={handleChange}
            />
            {id}
          </label>
        </div>
      ))}
    </form>
  );
};
export default App;
