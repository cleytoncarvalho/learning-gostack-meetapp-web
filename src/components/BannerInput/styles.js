import styled from 'styled-components';

export const Container = styled.div`
  label {
    position: relative;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    padding: 10px;
    height: 280px;
    margin-bottom: 10px;
    cursor: pointer;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }

    input {
      display: none;
    }

    div {
      text-align: center;
      max-width: 100%;
    }

    i {
      display: block;
      color: rgba(255, 255, 255, 0.3);
      font-size: 20px;
      font-weight: bold;
      margin-top: 10px;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-style: normal;
    }
  }
`;
