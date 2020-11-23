import { useState, useEffect, useReducer } from 'react';
import useCurrentLocation from './useCurrentLocation';
import axios from 'axios';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

const BASE_URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.102310,-118.340027&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, restaurants: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        restaurants: action.payload.restaurants,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        restaurants: [],
      };
    default:
      return state;
  }
}

export default function useFetchPlaces() {
  const [state, dispatch] = useReducer(reducer, {
    restaurants: [],
    loading: true,
  });
  const { location } = useCurrentLocation();

  const BASE_URL2 = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
    location && location.latitude
  },${location && location.longitude}&radius=1500&type=restaurant&key=${
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  }`;

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    axios
      .get(BASE_URL2, { cancelToken: cancelToken1.token })
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_DATA,
          payload: { restaurants: res.data.results },
        });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
    };
  }, []);
  return state;
}
