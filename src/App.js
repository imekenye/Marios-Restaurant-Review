import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// theme & global styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/globalStyle';
import { HeaderContainer, MainContainer } from './containers';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Router>
        <HeaderContainer />
        <MainContainer />
      </Router>
    </ThemeProvider>
  );
}
