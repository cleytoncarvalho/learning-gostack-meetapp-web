import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Gothic+A1:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(to bottom, #22202C, #402845) no-repeat center center fixed;
    background-color: #402845; /* Fix chrome mobile bottom white space when scrolling */
  }

  body, input, button {
    font: 14px 'Gothic A1', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
