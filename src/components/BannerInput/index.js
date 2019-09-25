import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdCameraAlt } from 'react-icons/md';

import api from '../../services/api';

import { Container } from './styles';

function BannerInput({ name }) {
  const { registerField, defaultValue, fieldName, error } = useField(name);

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (err) {
      toast.error(
        'Ocorreu um erro ao tentar carregar a imagem, tente novamente'
      );
    }
  }

  return (
    <Container>
      <label htmlFor="file">
        <img src={preview} alt="" />

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />

        <div>
          <MdCameraAlt size={54} color="rgba(255, 255, 255, 0.3)" />
          <i>Selecionar imagem</i>
        </div>
      </label>

      {error && <span>{error}</span>}
    </Container>
  );
}

BannerInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BannerInput;
