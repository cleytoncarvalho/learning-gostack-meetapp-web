import styled from 'styled-components';
import { darken } from 'polished';

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

  a {
    background: #f94d6a;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    height: 42px;
    border: none;
    border-radius: 4px;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }

    span {
      margin-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const ListContent = styled.ul`
  margin-top: 50px;
`;

export const ListLoading = styled.div`
  text-align: center;
  color: #fff;
  font-size: 17px;
  margin-top: 50px;
`;

export const ListItem = styled.li`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 30px;
  cursor: pointer;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  div:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.6);
      margin-right: 30px;
    }
  }
`;

export const ListEmpty = styled.div`
  text-align: center;
  color: #fff;
  font-size: 17px;
  margin-top: 60px;
`;
