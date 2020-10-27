import React from 'react';
import { StarRating } from '../../Rating/StarRating';
import { RestaurantWrapper } from './Restaurant.styled';

export const Restaurant = ({ rating, restName, address }) => {
  return (
    <>
      <RestaurantWrapper p="36px" color="primary">
        <div className="name__location">
          <h2>{restName}</h2>
          <p>{address}</p>
        </div>
        <StarRating value={rating} />
      </RestaurantWrapper>
    </>
  );
};
