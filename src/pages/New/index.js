import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container } from './styles';

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

const New = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      await api.post('meetups', data);

      toast.success('Meetup cadastrado com sucesso!');

      history.push('/dashboard');
    } catch (err) {
      toast.error(
        'Erro ao salvar o meetup. Verifique os dados e tente novamente.'
      );
    }

    setLoading(false);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
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
          <Link to="/dashboard">
            <MdArrowBack size={20} color="#fff" />
            <div>Voltar</div>
          </Link>

          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <div>{!loading ? 'Salvar meetup' : 'Aguarde...'}</div>
          </button>
        </footer>
      </Form>
    </Container>
  );
};

export default New;
