import React from 'react';
import { Header } from '../Header/Header';
import { RestaurantListWrapper } from './RestaurantList.styled';
import data from '../../restaurants.json';
import { Restaurant } from './Restaurant/Restaurant';

export const RestaurantList = () => {
  console.log(data);
  return (
    <>
      <RestaurantListWrapper bg="secondary2">
        <Header />
        <Restaurant rating={4} />
        <Restaurant rating={3} />
      </RestaurantListWrapper>
    </>
  );
};
