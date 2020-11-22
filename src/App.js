import React, { useEffect } from 'react';
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
import StarRating from './components/StarRating';
import { MapContainer } from './containers';
import { useFetchPlaces } from './hooks';

export default function App() {
  // const getTotal = (val) => {
  //   const total = [];
  //   val.map((item) => total.push(item.stars));
  //   const result = total.reduce(function (a, b) {
  //     return a + b;
  //   }, 0);
  //   console.log(total);
  //   return result;
  // };
  const { restaurants } = useFetchPlaces();
  console.log(restaurants);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header>
        <Header.Logo src={'logo.svg'} />
        <Header.Title>Find and add restaurants near you.</Header.Title>
        <Filter>
          <Filter.Title>Filter by rating</Filter.Title>
          <Filter.Icon src={'filterIcon.svg'} />
        </Filter>
      </Header>
      <Main>
        <MapContainer />
        <RestaurantSection>
          {restaurants &&
            restaurants.slice(0, 6).map((restaurant) => (
              <Restaurant>
                <div className="restaurant__image">
                  {restaurant.photos ? (
                    <Restaurant.Image
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                    />
                  ) : (
                    // <Restaurant.Image src="./assets/mariosdefault.png" />
                    <div
                      style={{
                        textAlign: 'center',
                        fontSize: '12px',
                        color: 'grey',
                      }}
                    >
                      Image Unavailable
                    </div>
                  )}
                </div>
                <div className="restaurant__details">
                  <Restaurant.Title>{restaurant.name}</Restaurant.Title>
                  <Restaurant.Location>
                    {restaurant.vicinity}
                  </Restaurant.Location>
                  <Restaurant.Rating>
                    <StarRating total={restaurant.rating} />
                  </Restaurant.Rating>
                </div>
              </Restaurant>
            ))}
        </RestaurantSection>
      </Main>
    </ThemeProvider>
  );
}
