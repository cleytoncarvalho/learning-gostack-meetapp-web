import React from 'react';
import { Link } from 'react-router-dom';

import { ListHeader } from './styles';

const Dashboard = () => {
  return (
    <>
      <ListHeader>
        <h1>Meus meetups</h1>

        <Link to="/new">
          <span>Novo meetup</span>
        </Link>
      </ListHeader>
    </>
  );
};

export default Dashboard;
