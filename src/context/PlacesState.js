import React, { useReducer, useEffect } from "react";
import axios from "axios";
import PlacesContext from "./places-context";
import placesReducer from "./places-reducer";

import {
  GET_LOCATION,
  GET_DATA,
  GET_REVIEWS,
  ERROR,
  FILTER_PLACES,
} from "./places-actions";

const PlacesState = ({ children }) => {
  const intialState = {
    places: [],
    loading: false,
    filtered: [],
    error: "",
    reviews: [],
    latitude: 51.507351,
    longitude: -0.127758,
  };

  const [state, dispatch] = useReducer(placesReducer, intialState);

  // fetch places function
  const fetchPlacesData = async () => {
    // check if localStorage['places'] exist
    let { latitude, longitude } = state;

    // create store for places in local storage
    try {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        )
        .then((res) => {
          localStorage.setItem("places", JSON.stringify(res.data.results));
          const placesData = JSON.parse(localStorage.getItem("places"));
          dispatch({
            type: GET_DATA,
            payload: { places: placesData },
          });

          /**
           * Get Places Reviews
           */
          fetchReviewsData();
        });
      dispatch({
        type: GET_LOCATION,
        payload: { latitude: latitude, longitude: longitude },
      });
    } catch (error) {
      dispatch({ type: ERROR, payload: { error: error } });
    }
  };

  // fetch reviews function
  const fetchReviewsData = async () => {
    const placesData = JSON.parse(localStorage.getItem("places"));

    // eslint-disable-next-line no-lone-blocks
    {
      placesData &&
        Promise.all(
          placesData.map((result) => {
            return axios
              .get(
                `https://maps.googleapis.com/maps/api/place/details/json?place_id=${result.place_id}&fields=place_id,name,rating,reviews,formatted_address&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
              )
              .then(({ data }) => {
                return data.result;
              });
          })
        ).then((values) => {
          return localStorage.setItem("reviews", JSON.stringify(values));
        });
    }

    const reviewsData = JSON.parse(localStorage.getItem("reviews"));
    dispatch({
      type: GET_REVIEWS,
      payload: { reviews: reviewsData },
    });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        function (position) {
          let { latitude, longitude } = position.coords;
          // fetchPlacesData(latitude, longitude);
          dispatch({
            type: GET_LOCATION,
            payload: { latitude: latitude, longitude: longitude },
          });
          fetchPlacesData();
        },
        function (error) {
          console.log(error.code);
          if (
            error.code === error.PERMISSION_DENIED ||
            error.code === error.POSITION_UNAVAILABLE ||
            error.code === error.TIMEOUT
          )
            console.log("Default location places already loaded.");
        }
      );
    } else {
      console.log("NO GEOLOCATION API");
    }

    fetchPlacesData();

    /**
     * Get places reviews.
     * Statically, set to 5s until we get places
     * TODO: This has to be a callback function to be executed once the places loaded
     */
    /*
    setTimeout(() => {
      
    }, 5000);
    */
  }, [state.latitude, state.longitude]);

  //   filter places
  const filterPlaces = (results) => {
    dispatch({
      type: FILTER_PLACES,
      payload: { filtered: results, places: results },
    });
  };
  // get reviews
  const getReviews = () => {
    const reviewsData = JSON.parse(localStorage.getItem("reviews"));
    dispatch({
      type: GET_REVIEWS,
      payload: { reviews: reviewsData },
    });
  };
  //  Add reviews
  const addReview = (id, authName, rating, text) => {
    let reviews = JSON.parse(window.localStorage.getItem("reviews"));
    const modifiedReviews = reviews.map((review) => {
      if (review.place_id === id) {
        return {
          formatted_address: review.formatted_address,
          name: review.name,
          place_id: id,
          rating: review.rating,
          reviews: [
            ...review.reviews,
            {
              author_name: authName,
              rating: rating,
              text: text,
            },
          ],
        };
      }
      return review;
    });
    window.localStorage.setItem(
      "reviews",
      JSON.stringify(modifiedReviews.flat())
    );
    const reviewsData = JSON.parse(window.localStorage.getItem("reviews"));
    dispatch({
      type: GET_REVIEWS,
      payload: { reviews: reviewsData },
    });
  };

  //Add place review

  const addPlaceReview = (id, name, lat, long, vicinity) => {
    let places = JSON.parse(window.localStorage.getItem("places"));
    let reviews = JSON.parse(window.localStorage.getItem("reviews"));
    let newPlace = {
      geometry: {
        location: {
          lat: lat,
          lng: long,
        },
      },
      name: name,
      place_id: id,
      rating: 0,
      vicinity: vicinity,
    };

    let newReviews = {
      formatted_address: vicinity,
      name: name,
      place_id: id,
      rating: 0,
      reviews: [],
    };

    const modifiedPlaces = [...places, newPlace];

    const modifiedReviews = [...reviews, newReviews];

    window.localStorage.setItem(
      "places",
      JSON.stringify(modifiedPlaces.flat())
    );
    window.localStorage.setItem(
      "reviews",
      JSON.stringify(modifiedReviews.flat())
    );
    const placesData = JSON.parse(window.localStorage.getItem("places"));
    const reviewsData = JSON.parse(window.localStorage.getItem("reviews"));
    dispatch({
      type: GET_DATA,
      payload: { places: placesData },
    });
    dispatch({
      type: GET_REVIEWS,
      payload: { reviews: reviewsData },
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

        getReviews,
        filterPlaces,
        addReview,
        addPlaceReview,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesState;
