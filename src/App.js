import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// theme & global styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/globalStyle';
import { Home, FormReview, Reviews } from './pages';
// import { HeaderContainer, MainContainer } from './containers';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Router>
        {/* <HeaderContainer />
        <MainContainer /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          ></Route>
          <Route
            exact
            path="/reviews/:id"
            render={(routeProps) => <Reviews {...routeProps} />}
          ></Route>
          <Route
            exact
            path="/reviewform/:id"
            render={(routeProps) => <FormReview {...routeProps} />}
          ></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
