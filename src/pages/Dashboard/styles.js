import styled from 'styled-components';
import { darken } from 'polished';

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & h1 {
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
    width: 172px;
    height: 42px;
    border: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${darken(0.05, '#f94d6a')};
    }
  }
`;
