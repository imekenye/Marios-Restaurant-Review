import React, { useMemo } from 'react';
import StarIcon from '../StarIcon';

export default function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = useMemo(() => {
    return hoverRating >= index
      ? '#454444'
      : !hoverRating && rating >= index
      ? '#454444'
      : '#A2A1A1';
  }, [rating, hoverRating, index]);
  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
