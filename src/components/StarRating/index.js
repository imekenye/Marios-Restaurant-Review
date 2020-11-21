import React from 'react';
import StarIcon from '../StarIcon';

export default function StarRating({ total = 10, length = 3 }) {
  const getNoOfStars = () => {
    const active = Math.round(`${total}` / `${length}`);
    const tot = { total };
    const inActive = 5 - active;
    const stri = 'stringgg!!ffiuc';
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
    return stars;
  };
  return <>{getNoOfStars()}</>;
}
