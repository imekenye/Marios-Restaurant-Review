import { transform, useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  FilterRatingWrapper,
  FilterContainer,
  Button,
  RatingBar,
  Rate,
} from './FilterRating.styled';

export const FilterRating = () => {
  const handleDrag = (e, info) => {
    // console.log(info.point.x);
  };
  const x1 = useMotionValue(0);
  const x2 = useMotionValue(0);

  const [rateValue, setRateValue] = useState();
  const [rateValue2, setRateValue2] = useState();
  const rv = transform(rateValue, [0, 60], [0, 5]);
  const rv2 = transform(rateValue2, [0, 60], [0, 5]);
  //   console.log(rateValue);

  useEffect(
    () =>
      x1.onChange((latest) => {
        setRateValue(latest);
      }),
    x2.onChange((latest) => {
      setRateValue2(latest);
    }),
    []
  );
  return (
    <FilterRatingWrapper>
      <FilterContainer bg="primary">
        <p className="filterbyrating">Filter by rating:</p>
        <RatingBar bg="secondary">
          <Rate
            style={{ x: x1 }}
            dragMomentum={false}
            drag="x"
            dragConstraints={{ left: 0, right: 60 }}
            dragElastic={false}
            onDragEnd={handleDrag}
          >
            {Math.floor(rv) >= 0 ? Math.floor(rv) : 0}
          </Rate>
        </RatingBar>
        <span>-</span>
        <RatingBar bg="secondary">
          <Rate
            style={{ x: x2 }}
            dragMomentum={false}
            drag="x"
            dragConstraints={{ left: 0, right: 60 }}
            dragElastic={false}
            onDragEnd={handleDrag}
          >
            {Math.floor(rv2) >= 0 ? Math.floor(rv2) : 0}
          </Rate>
        </RatingBar>
        <Button bg="secondary2" color="primary">
          Apply
        </Button>
      </FilterContainer>
    </FilterRatingWrapper>
  );
};
