import React from 'react';
import {
  Container,
  Header,
  Button,
  Body,
  Title,
  Rating,
  Text,
} from './styles/review';

export default function Review({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Review.Header = function ReviewHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Review.Button = function ReviewButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Review.Body = function ReviewBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Review.Title = function ReviewTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Review.Rating = function ReviewRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

Review.Text = function ReviewText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};
