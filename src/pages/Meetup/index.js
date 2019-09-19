import React from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

import { MeetupHeader, MeetupContent, LinkButton } from './styles';

import temp from '~/assets/temp.jpg';

const Meetup = () => {
  return (
    <>
      <MeetupHeader>
        <h1>Meetup da cabeça do meu pau</h1>

        <div>
          <LinkButton to="/edit/2" color="#4DBAF9">
            <MdEdit size={20} color="#fff" />
            <span>Editar</span>
          </LinkButton>

          <LinkButton to="" color="#e11a3c">
            <MdDeleteForever size={20} color="#fff" />
            <span>Cancelar</span>
          </LinkButton>
        </div>
      </MeetupHeader>

      <MeetupContent>
        <img src={temp} alt="" />

        <div>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.
          <br />
          <br />
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </div>

        <span>
          <MdEvent size={20} color="rgba(255, 255, 255, 0.6)" /> 24 de Junho, às
          20h
        </span>

        <span>
          <MdPlace size={20} color="rgba(255, 255, 255, 0.6)" /> Rua Guilherme
          Gembala, 260
        </span>
      </MeetupContent>
    </>
  );
};

export default Meetup;
