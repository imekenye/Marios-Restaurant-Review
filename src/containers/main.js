import React, { useContext } from 'react';
import { MapContainer } from '.';
import { Main, Restaurant, RestaurantSection } from '../components';
import StarRating from '../components/StarRating';
import PlacesContext from '../contexts/places-context';

export default function MainContainer() {
  const { places, filtered } = useContext(PlacesContext);

  return (
    <>
      <Main>
        <MapContainer />
        <RestaurantSection>
          {/* {loading ? 'Loading' : null} */}

          {filtered.length !== 0 || filtered.length == 'undefined'
            ? filtered &&
              filtered.slice(0, 6).map((restaurant, idx) => (
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
                    <Restaurant.Location>
                      {restaurant.vicinity}
                    </Restaurant.Location>
                    <Restaurant.Rating>
                      <StarRating total={restaurant.rating} />
                    </Restaurant.Rating>
                  </div>
                </Restaurant>
              ))
            : places &&
              places.slice(0, 6).map((restaurant, idx) => (
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
    </>
  );
}
