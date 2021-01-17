import React from 'react';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');

  return (
    <form>
      <h2>Retorno</h2>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Frutas: {frutas}</p>
      <p>Cor: {cor} </p>
      <p>Produto: {produto}</p>

      <h3>Cores</h3>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h3>Frutas</h3>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={frutas}
        setValue={setFrutas}
      />
      <h3>Produtos</h3>
      <Select
        options={['Smartphone', 'Tablet', 'Notebook']}
        value={produto}
        setValue={setProduto}
      />
      <h3>Dados Pessoas</h3>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};
export default App;
