import React, { useState, useEffect } from 'react';
import useCurrentLocation from './useCurrentLocation';
import axios from 'axios';

export default function useFetchPlaces() {
  const [restaurants, setRestaurants] = useState();
  const { location } = useCurrentLocation();

  const Places_url = location
    ? `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        location && location.latitude
      },${location && location.longitude}&radius=1500&type=restaurant&key=${
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }`
    : `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.102310,-118.340027&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const fetchPlaces = async () => {
    const res = await axios.get(Places_url);
    setRestaurants(res.data.results);
  };
  useEffect(() => {
    fetchPlaces();
  }, [Places_url]);
  return { restaurants };
}
