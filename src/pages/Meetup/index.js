import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  MeetupTopMessage,
  MeetupHeader,
  MeetupContent,
  EditButton,
  CancelButton,
} from './styles';

const Meetup = ({ match }) => {
  const { id } = match.params;

  const [meetup, setMeetup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function findMeetup() {
      try {
        const response = await api.get(`/organizing/${id}`);

        const data = {
          ...response.data,
          formattedDate: format(
            parseISO(response.data.date),
            "dd 'de' MMMM, 'às' HH:mm",
            {
              locale: pt,
            }
          ),
        };

        setMeetup(data);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    findMeetup();
  }, [id]);

  async function handleDelete(meetup_id) {
    try {
      await api.delete(`/meetups/${meetup_id}`);

      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      const message = String(err.response.data.message);

      toast.error(message);
    }
  }

  return (
    <>
      {loading && <MeetupTopMessage>Carregando...</MeetupTopMessage>}

      {error && (
        <MeetupTopMessage>
          Ocorreu um erro ao carregar o Meetup. Atualize a página e tente
          novamente.
        </MeetupTopMessage>
      )}

      {!loading && !error && meetup && (
        <>
          <MeetupHeader>
            <h1>{meetup.title}</h1>

            {!meetup.past && (
              <div>
                <EditButton to={`/edit/${meetup.id}`} color="#4DBAF9">
                  <MdEdit size={20} color="#fff" />
                  <span>Editar</span>
                </EditButton>

                <CancelButton
                  onClick={() => handleDelete(meetup.id)}
                  color="#e11a3c"
                >
                  <MdDeleteForever size={20} color="#fff" />
                  <span>Cancelar</span>
                </CancelButton>
              </div>
            )}
          </MeetupHeader>

          <MeetupContent>
            <img src={meetup.File.url} alt="" />

            <div>{meetup.description}</div>

            <span>
              <MdEvent size={20} color="rgba(255, 255, 255, 0.6)" />
              {meetup.formattedDate}
            </span>

            <span>
              <MdPlace size={20} color="rgba(255, 255, 255, 0.6)" />
              {meetup.location}
            </span>
          </MeetupContent>
        </>
      )}
    </>
  );
};

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Meetup;
