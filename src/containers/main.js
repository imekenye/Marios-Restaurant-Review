import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MapContainer } from '.';
import { Main, RestaurantSection } from '../components';

import PlacesContext from '../contexts/places-context';
import RestaurantContainer from './restaurantContainer';
import ReviewContainer from './reviewContainer';
import ReviewFormContainer from './reviewFormContainer';

export default function MainContainer() {
  return (
    <>
      <Main>
        <MapContainer />
        <RestaurantSection>
          <Switch>
            <Route exact path="/">
              <RestaurantContainer />
            </Route>
            <Route path="/reviews/:id">
              <ReviewContainer />
            </Route>
            <Route path="/reviewform/:id">
              <ReviewFormContainer />
            </Route>
          </Switch>
        </RestaurantSection>
      </Main>
    </>
  );
}
