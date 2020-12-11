import React from 'react';
import { RestaurantSection } from '../components';

export default function RestaurantContainer({ children, ...rest }) {
  return <RestaurantSection {...rest}>{children}</RestaurantSection>;
}
