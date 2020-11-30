import React, { useState, useEffect } from 'react';
// components
import { Main, Restaurant, RestaurantSection } from './components';
// theme & global styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyle } from './theme/globalStyle';
// restaurant list (JSON)
// import restaurants from './restaurants.json';
import StarRating from './components/StarRating';
import { HeaderContainer, MapContainer } from './containers';
import { useGetPlaces } from './hooks/useGetPlaces';

export default function App() {
  const { isLoading, error, data, execute } = useGetPlaces();
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        execute(position.coords.latitude, position.coords.longitude);
      });
    } catch (err) {}
  }, []);

  console.log(data);
  console.log(filteredPlaces);

  const renderFiltered = () => (
    <>
      {console.log('rendered!')}
      {filteredPlaces &&
        filteredPlaces.slice(0, 6).map((restaurant, idx) => (
          <Restaurant key={idx}>
            <div className="restaurant__image">
              {/* {restaurant.photos ? (
              <Restaurant.Image
                src={getImageUrl(restaurant.photos[0].photo_reference)}
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
            )} */}
            </div>
            <div className="restaurant__details">
              <Restaurant.Title>{restaurant.name}</Restaurant.Title>
              <Restaurant.Location>{restaurant.vicinity}</Restaurant.Location>
              <Restaurant.Rating>
                <StarRating total={restaurant.rating} />
              </Restaurant.Rating>
            </div>
          </Restaurant>
        ))}
    </>
  );
  const renderPlaces = () => (
    <>
      {console.log('rendered!')}
      {data &&
        data.slice(0, 6).map((restaurant, idx) => (
          <Restaurant key={idx}>
            <div className="restaurant__image">
              {/* {restaurant.photos ? (
              <Restaurant.Image
                src={getImageUrl(restaurant.photos[0].photo_reference)}
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
            )} */}
            </div>
            <div className="restaurant__details">
              <Restaurant.Title>{restaurant.name}</Restaurant.Title>
              <Restaurant.Location>{restaurant.vicinity}</Restaurant.Location>
              <Restaurant.Rating>
                <StarRating total={restaurant.rating} />
              </Restaurant.Rating>
            </div>
          </Restaurant>
        ))}
    </>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HeaderContainer data={data} setFilteredPlaces={setFilteredPlaces} />
      <Main>
        <MapContainer restaurants={data} />
        <RestaurantSection>
          {isLoading}

          {filteredPlaces.length !== 0 ? renderFiltered() : renderPlaces()}
        </RestaurantSection>
      </Main>
    </ThemeProvider>
  );
}
