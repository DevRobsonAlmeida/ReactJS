import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h1>Retorno</h1>
      <p>Nome: {nome}</p>
      <p>Email: {email}</p>
      <p>Frutas: {frutas}</p>
      <p>Cor: {cor} </p>
      <p>Produto: {produto}</p>
      <p>linguagens: {linguagens + ''}</p>
      <p>Termos: {termos}</p>

      <h3>Termos</h3>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
      <h3>Linguagens</h3>
      <Checkbox
        options={['Java', 'Php', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
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
