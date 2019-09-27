import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
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

    span {
      font-size: 14px;
      color: #e00505;
      font-weight: bold;
      margin: 0 0 8px 0;
      display: block;
    }

    footer {
      display: flex;
      justify-content: space-between;

      a {
        background: #601d7e;
        color: #fff;
        font-size: 13px;
        height: 36px;
        border-radius: 4px;
        font-weight: bold;
        padding: 0 10px;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.05, '#601d7e')};
        }

        div {
          margin: 3px 0 0px 6px;
        }
      }

      button {
        background: #f94d6a;
        color: #fff;
        font-size: 16px;
        height: 42px;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        padding: 0 20px;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.05, '#f94d6a')};
        }

        div {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const MeetupTopMessage = styled.div`
  text-align: center;
  color: #fff;
  font-size: 17px;
  margin-top: 60px;
`;
