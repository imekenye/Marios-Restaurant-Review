import React from 'react';

// theme & global styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/globalStyle';
import { HeaderContainer, MainContainer } from './containers';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HeaderContainer />
      <MainContainer />
    </ThemeProvider>
  );
}
