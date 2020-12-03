import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import PlacesContext from './places-context';
import placesReducer from './places-reducer';

import Localbase from 'localbase';

import {
  GET_LOCATION,
  GET_DATA,
  GET_REVIEWS,
  GET_REVIEW,
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

  let db = new Localbase('places');

  const fetchApiData = async () => {
    // check if indexDB database exist

    const dbName = 'places';
    const databases = await window.indexedDB.databases();
    const isExisting = databases.map((db) => db.name).includes(dbName);
    if (!isExisting) {
      // if indexDB database does not exist....

      navigator.geolocation.getCurrentPosition(async (position) => {
        let { latitude, longitude } = position.coords;

        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        );

        // Get reviews via place_id field

        response.data.results.map(async (result) => {
          const response2 = await axios.get(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${result.place_id}&fields=place_id,name,rating,reviews,formatted_address&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
          );

          // create reviews indexDB database table

          db.collection('reviews').add(
            response2.data.result,
            response2.data.result.place_id
          );
        });

        // get places indexDB database table

        db.collection('places')
          .get()
          .then((review) => {
            dispatch({ type: GET_REVIEWS, payload: { reviews: review } });
          });

        try {
          // create places indexDB database table

          response.data.results.map((result) =>
            db.collection('places').add(result)
          );
          dispatch({
            type: GET_LOCATION,
            payload: { latitude: latitude, longitude: longitude },
          });
          // localStorage.setItem('places', JSON.stringify(res.data.results));
          //  const placesData = JSON.parse(localStorage.getItem('places'));
        } catch (error) {
          dispatch({ type: ERROR, payload: { error: error } });
        }
      });
    } else {
      // if database is present...

      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        dispatch({
          type: GET_LOCATION,
          payload: { latitude: latitude, longitude: longitude },
        });
      });

      const data = await db
        .collection('places')
        .get()
        .then((place) => {
          return place;
        });
      // const placesData = JSON.parse(localStorage.getItem('places'));
      dispatch({ type: GET_DATA, payload: { places: data } });

      db.collection('reviews')
        .get()
        .then((review) => {
          dispatch({ type: GET_REVIEWS, payload: { reviews: review } });
        });
    }

    db.collection('places')
      .get()
      .then((place) => {
        dispatch({ type: GET_DATA, payload: { places: place } });
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  //   filter places
  const filterPlaces = (results) => {
    dispatch({ type: FILTER_PLACES, payload: { filtered: results } });
  };
  // get reviews
  const getReviews = (id) => {
    db.collection('reviews')
      .doc(id)
      .get()
      .then((document) => {
        dispatch({ type: GET_REVIEW, payload: { reviews: document, id: id } });
      });
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
