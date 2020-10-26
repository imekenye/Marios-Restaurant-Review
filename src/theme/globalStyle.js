import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }
`;

export const AppWrapper = styled.main`
  display: grid;
  grid-template-columns: 60vw 40vw;
  width: 100vw;
  height: 100vh;
`;
