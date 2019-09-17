import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Content } from './styles';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Content>{children}</Content>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
