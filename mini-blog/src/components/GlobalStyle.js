import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
    font-family: 'Dotum', '돋움', sans-serif;
    color: #333;
  }

  button, input, textarea {
    font-family: 'Dotum', '돋움', sans-serif;
  }
`;

export default GlobalStyle;
