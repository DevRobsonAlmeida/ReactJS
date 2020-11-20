import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const arr = ['Item 1', 'Item 2'];
  return (
    <>
      <Input id="email" label="Email" required></Input>
      <Input id="senha" type="password" label="Senha"></Input>
      <Button items={arr} />
    </>
  );
};

export default Form;
