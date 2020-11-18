import React from 'react';
import { Container, Image, Title, Location, Rating } from './styles/restaurant';

export default function Restaurant({ children, ...rest }) {
  return <Container>{children}</Container>;
}

Restaurant.Image = function RestaurantImage({ ...rest }) {
  return <Image {...rest} />;
};

Restaurant.Title = function RestaurantTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Restaurant.Location = function RestaurantLocation({ children, ...rest }) {
  return <Location {...rest}>{children}</Location>;
};

Restaurant.Rating = function RestaurantRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};
