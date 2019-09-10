import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 315px;

  header {
    display: flex;
    justify-content: center;

    img {
      width: 45px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    height: 50px;
    padding: 0 20px;
    margin-bottom: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    background: #f94d6a;
    color: #fff;
    font-size: 18px;
    text-align: center;
    height: 50px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    margin-top: 5px;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }

  a {
    display: block;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
