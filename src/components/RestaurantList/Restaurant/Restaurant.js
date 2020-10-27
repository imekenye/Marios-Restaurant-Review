import React from 'react';
import { StarRating } from '../../Rating/StarRating';
import { RestaurantWrapper } from './Restaurant.styled';

export const Restaurant = ({ rating }) => {
  return (
    <>
      <RestaurantWrapper p="36px" color="primary">
        <div className="name__location">
          <h2>Avinach Fast Food</h2>
          <p>Embakasi South</p>
        </div>
        <StarRating value={rating} />
      </RestaurantWrapper>
    </>
  );
};
