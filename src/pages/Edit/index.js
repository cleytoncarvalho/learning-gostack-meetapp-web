import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container, MeetupTopMessage } from './styles';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Selecione uma imagem'),
  title: Yup.string().required('Preencha o campo Título'),
  description: Yup.string().required('Preencha o campo Descrição'),
  date: Yup.date().required('Preencha o campo Data'),
  location: Yup.string().required('Preencha o campo Localização'),
});

const Edit = ({ match }) => {
  const { id } = match.params;

  const [meetup, setMeetup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);

  useEffect(() => {
    async function findMeetup() {
      try {
        const response = await api.get(`/organizing/${id}`);

        const data = {
          ...response.data,
          date: parseISO(response.data.date),
          file_id: response.data.cover,
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

  async function handleSubmit(data) {
    setLoadingSave(true);

    try {
      await api.put(`meetups/${id}`, data);

      toast.success('Meetup atualizado com sucesso!');

      history.push(`/meetup/${id}`);
    } catch (err) {
      toast.error(
        'Erro ao salvar o meetup. Verifique os dados e tente novamente.'
      );
    }

    setLoadingSave(false);
  }

  return (
    <Container>
      {loading && <MeetupTopMessage>Carregando...</MeetupTopMessage>}

      {error && (
        <MeetupTopMessage>
          Ocorreu um erro ao carregar o Meetup. Atualize a página e tente
          novamente.
        </MeetupTopMessage>
      )}

      {!loading && !error && meetup && (
        <Form onSubmit={handleSubmit} schema={schema} initialData={meetup}>
          <BannerInput name="file_id" />
          <Input type="text" name="title" placeholder="Título do Meetup" />
          <DatePicker name="date" placeholder="Data do Meetup" />

          <Input
            multiline
            name="description"
            rows="8"
            placeholder="Descrição completa"
          />

          <Input type="text" name="location" placeholder="Localização" />

          <footer>
            <button type="submit">
              <MdAddCircleOutline size={20} color="#fff" />
              <div>{!loadingSave ? 'Atualizar meetup' : 'Aguarde...'}</div>
            </button>
          </footer>
        </Form>
      )}
    </Container>
  );
};

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Edit;
