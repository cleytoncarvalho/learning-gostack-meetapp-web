import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const MeetupHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }

    div {
      justify-content: space-between;
    }
  }
`;

export const LinkButton = styled(Link)`
  background: ${props => props.color};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding: 0 20px;
  height: 42px;
  border: none;
  border-radius: 4px;
  margin-left: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const MeetupContent = styled.div`
  margin-top: 50px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 300px;
    border-radius: 4px;
    margin-bottom: 25px;
  }

  div {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin-right: 30px;

    svg {
      vertical-align: middle;
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 800px) {
    span {
      display: block;
      margin-bottom: 15px;
    }
  }
`;
