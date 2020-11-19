import React from 'react';

const getStar = (value) => {
  switch (value) {
    case 0:
      return 'inactiveStar.svg';
    case 50:
      return 'halfStar.svg';
    case 100:
      return 'activeStar.svg';
    default:
      return 'inactiveStar.svg';
  }
};

const getStars = (value) => {
  switch (parseFloat(value)) {
    case 0.0:
      return [0, 0, 0, 0, 0];
    case 0.5:
      return [50, 0, 0, 0, 0];
    case 1:
      return [100, 0, 0, 0, 0];
    case 1.5:
      return [100, 50, 0, 0, 0];
    case 2:
      return [100, 100, 0, 0, 0];
    case 2.5:
      return [100, 100, 50, 0, 0];
    case 3:
      return [100, 100, 100, 0, 0];
    case 3.5:
      return [100, 100, 100, 50, 0];
    case 4:
      return [100, 100, 100, 100, 0];
    case 4.5:
      return [100, 100, 100, 100, 50];
    case 5:
      return [100, 100, 100, 100, 100];
    default:
      return [100, 100, 100, 100, 100];
  }
};

export const StarRating = ({ value }) => {
  return (
    <>
      <div className="stars">
        {getStars(value).map((value) => (
          <img style={{ marginRight: '8px' }} src={getStar(value)} alt="" />
        ))}
      </div>
    </>
  );
};
