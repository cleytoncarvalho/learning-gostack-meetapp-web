import React from 'react';
import { MdCameraAlt, MdAddCircleOutline } from 'react-icons/md';

import { Container, ImageSelector } from './styles';

const New = () => {
  return (
    <Container>
      <form>
        <ImageSelector>
          <div>
            <MdCameraAlt size={54} color="rgba(255, 255, 255, 0.3)" />
            <span>Selecionar imagem</span>
          </div>
        </ImageSelector>

        <input type="text" name="title" placeholder="Título do Meetup" />
        <input type="text" name="date" placeholder="Data do meetup" />

        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Descrição completa"
        />

        <input type="text" name="location" placeholder="Localização" />

        <footer>
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Salvar meetup</span>
          </button>
        </footer>
      </form>
    </Container>
  );
};

export default New;
