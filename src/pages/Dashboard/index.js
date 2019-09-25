import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import {
  ListHeader,
  ListLoading,
  ListContent,
  ListItem,
  ListEmpty,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

const Dashboard = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function findMeetups() {
      try {
        const response = await api.get('/organizing');

        const data = response.data.map(m => {
          return {
            ...m,
            formattedDate: format(
              parseISO(m.date),
              "dd 'de' MMMM, 'às' HH:mm",
              {
                locale: pt,
              }
            ),
          };
        });

        setMeetups(data);
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao buscar os meetups. Atualize a página e tente novamente.'
        );
      } finally {
        setLoading(false);
      }
    }

    findMeetups();
  }, []);

  function handleSelectMeetup(id) {
    history.push(`/meetup/${id}`);
  }

  return (
    <>
      <ListHeader>
        <h1>Meus meetups</h1>

        <Link to="/new">
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Novo meetup</span>
        </Link>
      </ListHeader>

      {loading && <ListLoading>Carregando...</ListLoading>}

      <ListContent>
        {meetups.map(meetup => (
          <ListItem
            key={meetup.id}
            onClick={() => handleSelectMeetup(meetup.id)}
          >
            <div>{meetup.title}</div>

            <div>
              <span>
                {meetup.formattedDate} - {meetup.location}
              </span>
              <MdChevronRight size={24} color="#fff" />
            </div>
          </ListItem>
        ))}
      </ListContent>

      {!loading && !meetups.length && (
        <ListEmpty>
          Quando cadastrar algum meetup, eles aparecerão aqui.
        </ListEmpty>
      )}
    </>
  );
};

export default Dashboard;
