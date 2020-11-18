import React from 'react';
import {
  Container,
  Title,
  Rating,
  Button,
  FirstName,
  LastName,
  Review,
} from './styles/review';

export default function ReviewForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ReviewForm.Title = function ReviewFormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ReviewForm.Rating = function ReviewFormRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

ReviewForm.FirstName = function ReviewFormFirstName({ ...rest }) {
  return <FirstName {...rest} />;
};

ReviewForm.LastName = function ReviewFormLastName({ ...rest }) {
  return <LastName {...rest} />;
};

ReviewForm.Review = function ReviewFormReview({ ...rest }) {
  return <Review {...rest} />;
};

ReviewForm.Button = function ReviewFormButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
