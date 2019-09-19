import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="Meetapp" />
        </header>

        {children}
      </Content>
    </Container>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
