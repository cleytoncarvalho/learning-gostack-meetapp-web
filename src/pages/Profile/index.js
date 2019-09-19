import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome completo.'),
  email: Yup.string()
    .email('Informe um e-mail válido.')
    .required('O e-mail é obrigatório'),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field
          .min(6, 'A nova senha deve conter no mínimo 6 caracteres.')
          .required('Informe sua nova senha.')
      : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) => {
    return password
      ? field.oneOf(
          [Yup.ref('password')],
          'Senhas não coincidem. Tente novamente.'
        )
      : field;
  }),
});

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={profile} schema={schema}>
        <Input type="text" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <footer>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>{!loading ? 'Salvar perfil' : 'Aguarde...'}</span>
          </button>
        </footer>
      </Form>
    </Container>
  );
};

export default Profile;
