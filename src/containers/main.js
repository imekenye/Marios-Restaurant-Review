import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MapContainer } from '.';
import { Main, RestaurantSection } from '../components';

import PlacesContext from '../contexts/places-context';
import RestaurantContainer from './restaurantContainer';
import ReviewContainer from './reviewContainer';

export default function MainContainer() {
  const { places, filtered, loading } = useContext(PlacesContext);

  return (
    <>
      <Main>
        <MapContainer />
        <RestaurantSection>
          <Switch>
            <Route exact path="/">
              <RestaurantContainer />
            </Route>
            <Route path="/reviews">
              <ReviewContainer />
            </Route>
          </Switch>
        </RestaurantSection>
      </Main>
    </>
  );
}
