import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #272727;
  }

  p {
    color: #8C98A4;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  main {
    overflow: hidden;
  }
`;