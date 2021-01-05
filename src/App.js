import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <form>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} required />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};
export default App;
