import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Nome completo" />
      <input type="email" name="email" placeholder="Digite seu e-mail" />
      <input type="password" name="password" placeholder="Sua senha secreta" />

      <button type="submit">Criar conta</button>

      <Link to="/">Já tenho conta</Link>
    </form>
  );
};

export default SignUp;
