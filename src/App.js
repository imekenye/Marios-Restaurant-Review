import React from 'react';
// components
import {
  Filter,
  Header,
  Main,
  Restaurant,
  RestaurantSection,
} from './components';
// theme & global styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/globalStyle';
// restaurant list (JSON)
import restaurants from './restaurants.json';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header>
        <Header.Logo src={'logo.svg'} />
        <Header.Title>Find and add restaurants near you.</Header.Title>
        <Filter>
          <Filter.Title>Filter by rating</Filter.Title>
          <Filter.Icon src={'filter.svg'} />
        </Filter>
      </Header>
      <Main>
        <h1>My app</h1>
        <RestaurantSection>
          {restaurants &&
            restaurants.map((restaurant) => (
              <Restaurant>
                <div className="restaurant__image">
                  <Restaurant.Image src={restaurant.image} />
                </div>
                <div className="restaurant__details">
                  <Restaurant.Title>
                    {restaurant.restaurantName}
                  </Restaurant.Title>
                  <Restaurant.Location>
                    {restaurant.address}
                  </Restaurant.Location>
                  <Restaurant.Rating></Restaurant.Rating>
                </div>
              </Restaurant>
            ))}
        </RestaurantSection>
      </Main>
    </ThemeProvider>
  );
}
