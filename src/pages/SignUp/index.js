import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome completo'),
  email: Yup.string()
    .email('Informe um e-mail válido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Sua senha deve conter no mínimo 6 caracteres.')
    .required('A senha é obrigatória'),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      <Input type="text" name="name" placeholder="Nome completo" />
      <Input type="email" name="email" placeholder="Digite seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />

      <button type="submit">{!loading ? 'Criar conta' : 'Aguarde...'}</button>

      <Link to="/">Já tenho conta</Link>
    </Form>
  );
};

export default SignUp;
