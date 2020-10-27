import React from 'react';
import { Header } from '../Header/Header';
import { RestaurantListWrapper } from './RestaurantList.styled';
import restaurants from '../../restaurants.json';
import { Restaurant } from './Restaurant/Restaurant';

export const RestaurantList = () => {
  //   console.log(data);
  const findAverage = (value) => {
    const total = [];
    value.map((val) => total.push(val.stars));
    let totalLength = total.length;
    let sum = total.reduce(function (a, b) {
      return a + b;
    }, 0);
    let average = sum / totalLength;

    return average;
  };
  return (
    <>
      <RestaurantListWrapper bg="secondary2">
        <Header />
        {restaurants.map((restaurant) => (
          <>
            <Restaurant
              rating={findAverage(restaurant.ratings)}
              restName={restaurant.restaurantName}
              address={restaurant.address}
            />
          </>
        ))}
      </RestaurantListWrapper>
    </>
  );
};
