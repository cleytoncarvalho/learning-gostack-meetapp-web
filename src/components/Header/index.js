import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Meetapp" />

        <aside>
          <div>
            Cleyton Carvalho
            <Link to="/profile">Meu perfil</Link>
          </div>

          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
