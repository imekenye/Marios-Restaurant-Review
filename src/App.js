import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// theme & global styles
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/defaultTheme";
import { GlobalStyle } from "./theme/globalStyle";
import { Home, FormReview, Reviews } from "./pages";
import PlacesContext from "./context/places-context";

export default function App() {
  const { places, reviews } = useContext(PlacesContext);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/reviews/:id"
            render={(routeProps) => (
              <Reviews places={places} reviews={reviews} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/reviewform/:id"
            render={(routeProps) => (
              <FormReview reviews={reviews} {...routeProps} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
