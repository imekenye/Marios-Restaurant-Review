import React from 'react';
import StarIcon from '../StarIcon';

export default function StarRating({ total = 5 }) {
  const getNoOfStars = () => {
    const active = Math.round(total);

    // const tot = { total };
    const inActive = total - active;

    const starState = [];
    for (let i = 0; i < active; i++) {
      starState.push('active');
    }
    for (let i = 0; i < inActive; i++) {
      starState.push('inActive');
    }
    const stars = starState.map((star) =>
      star === 'active' ? <StarIcon /> : <StarIcon fill="#A2A1A1" />
    );
    // console.log(starState, tot);
    // console.log(stars);
    return stars;
  };
  return <>{getNoOfStars()}</>;
}
