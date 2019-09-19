import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';

const Header = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.profile.name);

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="Meetapp" />
        </Link>

        <aside>
          <div>
            {name}
            <Link to="/profile">Meu perfil</Link>
          </div>

          <button type="button" onClick={() => dispatch(signOut())}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
