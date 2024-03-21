import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SejonghospitalBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2') format('woff2');
  }

  * {
    font-family: 'SejonghospitalBold', sans-serif;
  }
`;

export default GlobalStyle;
