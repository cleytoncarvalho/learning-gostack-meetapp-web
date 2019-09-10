import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import logo from '~/assets/logo.svg';

const AuthLayout = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <header>
          <img src={logo} alt="Meetapp" />
        </header>

        {children}
      </Content>
    </Wrapper>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
