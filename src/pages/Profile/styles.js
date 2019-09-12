import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 18px;
    color: #fff;
    border-radius: 4px;
    padding: 15px 20px;
    margin-bottom: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  hr {
    border: none;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 30px 0;
  }

  footer {
    display: flex;
    justify-content: flex-end;

    button {
      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      text-align: center;
      height: 42px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      margin-top: 5px;
      padding: 0 20px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }

      span {
        margin-left: 10px;
      }
    }
  }
`;
