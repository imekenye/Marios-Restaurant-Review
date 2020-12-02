import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import PlacesContext from './places-context';
import placesReducer from './places-reducer';

import {
  GET_LOCATION,
  GET_DATA,
  GET_REVIEWS,
  ERROR,
  FILTER_PLACES,
} from './places-actions';

const PlacesState = ({ children }) => {
  const intialState = {
    places: [],
    loading: false,
    filtered: [],
    error: '',
    reviews: [],
    latitude: '',
    longitude: '',
  };

  const [state, dispatch] = useReducer(placesReducer, intialState);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    let mounted = true;
    if (localStorage.getItem('places') === null) {
      navigator.geolocation.getCurrentPosition((position) => {
        let { latitude, longitude } = position.coords;
        axios
          .get(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
            { cancelToken: cancelToken.token }
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
    } else if (mounted) {
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
    return () => {
      cancelToken.cancel();
      mounted = false;
    };
  }, []);

  //   filter places
  const filterPlaces = (results) => {
    dispatch({ type: FILTER_PLACES, payload: { filtered: results } });
  };
  // get reviews
  const getReviews = (id) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,reviews,formatted_address&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      )
      .then((res) =>
        dispatch({ type: GET_REVIEWS, payload: { reviews: res.data.result } })
      );
    console.log('clicked!!!!');
  };

  return (
    <PlacesContext.Provider
      value={{
        places: state.places,
        reviews: state.reviews,
        loading: state.loading,
        error: state.error,
        latitude: state.latitude,
        longitude: state.longitude,
        filtered: state.filtered,
        filterPlaces,
        getReviews,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesState;
