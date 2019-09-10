import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <form>
      <input type="email" name="email" placeholder="Digite seu e-mail" />
      <input type="password" name="password" placeholder="Sua senha secreta" />

      <button type="submit">Entrar</button>

      <Link to="/signup">Criar conta grátis</Link>
    </form>
  );
};

export default SignIn;
