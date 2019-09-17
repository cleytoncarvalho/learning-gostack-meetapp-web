import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
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

  textarea {
    font-family: 'Gothic A1', sans-serif;
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

export const ImageSelector = styled.button.attrs(() => ({
  type: 'button',
}))`
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 4px;
  padding: 10px;
  height: 280px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  div {
    text-align: center;
  }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.3);
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;
