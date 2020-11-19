import React from 'react';
import { Container } from './styles/restaurantSection';

export default function RestaurantSection({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
