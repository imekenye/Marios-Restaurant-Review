import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MapContainer } from '.';
import { Main, RestaurantSection } from '../components';

import { Restaurants, Reviews, FormReview, Home } from '../pages';

export default function MainContainer({ children }) {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
}
