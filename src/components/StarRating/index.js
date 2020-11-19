import React from 'react';
import StarIcon from '../StarIcon';

export default function StarRating({ total, length }) {
  const getNoOfStars = () => {
    const average = Math.Round(total / length);

    const active = average;
    const inActive = 5 - active;

    const total = [];
    for (i = 0; i < active; i++) {
      total.push(i);
    }
    const activeStars = total.map((star) => <StarIcon />);
  };
  return <div></div>;
}
