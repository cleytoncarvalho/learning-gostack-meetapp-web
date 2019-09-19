import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile}>
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
          name="confirm_password"
          placeholder="Confirmação de senha"
        />

        <footer>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Salvar perfil</span>
          </button>
        </footer>
      </Form>
    </Container>
  );
};

export default Profile;
