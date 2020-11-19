import styled, { createGlobalStyle } from 'styled-components';
// import Akkurrat from '../../public/fonts/Akkurat.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face{
  font-family: 'Akkurat';
  src: local('Akkurat'),url(${'fonts/Akkurat.ttf'}) format('ttf');
  font-style: normal;
}
@font-face{
  font-family: 'AkkuratBold';
  src: local('AkkuratBold'),url(${'fonts/Akkurat-Bold.ttf'}) format('ttf');
  font-style: bold;
}
@font-face{
  font-family: 'AkkuratLight';
  src: local('AkkuratLight'),url(${'fonts/Akkurat-Light.ttf'}) format('ttf');
}
html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Akkurat', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    background: #FAFAFA;
  }
`;

export const AppWrapper = styled.main`
  display: grid;
  grid-template-columns: 60vw 40vw;
  width: 100vw;
  height: 100vh;
`;
