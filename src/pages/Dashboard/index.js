import React from 'react';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { ListHeader, ListContent, ListItem } from './styles';

const Dashboard = () => {
  return (
    <>
      <ListHeader>
        <h1>Meus meetups</h1>

        <Link to="/new">
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo meetup</span>
        </Link>
      </ListHeader>

      <ListContent>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
        <ListItem>
          <div>Meetup de React Native</div>

          <div>
            <span>24 de Junho, às 20h</span>
            <MdChevronRight size={24} color="#fff" />
          </div>
        </ListItem>
      </ListContent>
    </>
  );
};

export default Dashboard;
