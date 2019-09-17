import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <form>
        <input type="text" name="name" placeholder="Nome completo" />
        <input type="email" name="email" placeholder="Digite seu e-mail" />

        <hr />

        <input
          type="password"
          name="old_password"
          placeholder="Sua senha atual"
        />
        <input type="password" name="password" placeholder="Nova senha" />
        <input
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
      </form>
    </Container>
  );
};

export default Profile;
