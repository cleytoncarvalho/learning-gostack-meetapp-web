import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 92px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.header`
  max-width: 910px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  & img {
    width: 31px;
  }

  & aside {
    display: flex;
    align-items: center;

    & div {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      text-align: right;
      max-width: 140px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & a {
      display: block;
      font-weight: normal;
      color: #999;
      margin-top: 3px;

      &:hover {
        color: #bebebe;
      }
    }

    button {
      background: #d44059;
      color: #fff;
      font-size: 16px;
      text-align: center;
      width: 71px;
      height: 42px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      margin-left: 30px;

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;
