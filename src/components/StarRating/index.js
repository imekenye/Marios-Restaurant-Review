import React from 'react';
import HalfStar from '../HalfStar';
import StarIcon from '../StarIcon';

export default function StarRating({ total }) {
  const getNoOfStars = () => {
    const selected = total;
    const totalStars = 5;
    return [...Array(totalStars)].map((el, i) =>
      i < selected && i + 1 > selected ? (
        <HalfStar />
      ) : i < selected ? (
        <StarIcon />
      ) : (
        <StarIcon fill="#A2A1A1" />
      )
    );
  };
  return <>{getNoOfStars()}</>;
}
