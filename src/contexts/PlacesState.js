import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import PlacesContext from './places-context';
import placesReducer from './places-reducer';

import { GET_LOCATION, GET_DATA, ERROR, FILTER_PLACES } from './places-actions';

const PlacesState = ({ children }) => {
  const intialState = {
    places: [],
    loading: false,
    filtered: [],
    error: '',
    latitude: '',
    longitude: '',
  };

  const [state, dispatch] = useReducer(placesReducer, intialState);

  useEffect(() => {
    if (localStorage.getItem('places') === null) {
      navigator.geolocation.getCurrentPosition((position) => {
        let { latitude, longitude } = position.coords;
        axios
          .get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
          )
          .then((res) => {
            console.log('calling api!!');
            console.log(res.data);
            localStorage.setItem('places', JSON.stringify(res.data.results));
            const placesData = JSON.parse(localStorage.getItem('places'));
            dispatch({ type: GET_DATA, payload: { places: placesData } });
            dispatch({
              type: GET_LOCATION,
              payload: { latitude: latitude, longitude: longitude },
            });
          })
          .catch((err) => {
            dispatch({ type: ERROR, payload: { error: err } });
          });
      });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        dispatch({
          type: GET_LOCATION,
          payload: { latitude: latitude, longitude: longitude },
        });
      });
      const placesData = JSON.parse(localStorage.getItem('places'));
      dispatch({ type: GET_DATA, payload: { places: placesData } });
    }
  }, []);

  //   filter places
  const filterPlaces = (results) => {
    dispatch({ type: FILTER_PLACES, payload: { filtered: results } });
  };

  return (
    <PlacesContext.Provider
      value={{
        places: state.places,
        loading: state.loading,
        error: state.error,
        latitude: state.latitude,
        longitude: state.longitude,
        filtered: state.filtered,
        filterPlaces,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesState;
