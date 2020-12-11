import React, { useState, useContext } from 'react';
import { AddPlaceForm } from '../components';
import uuidv4 from 'uuid/v4';
import PlacesContext from '../contexts/places-context';

export default function PlaceFormContainer({ lat, long }) {
  const { db } = useContext(PlacesContext);
  let placeInfo = {
    name: '',
    vicinity: '',
    geometry: {
      location: { lat: 0, lng: 0 },
    },
    place_id: '',
    rating: 0,
  };
  let reviewInfo = {
    formatted_address: '',
    name: '',
    reviews: [],
    place_id: '',
    rating: 0,
  };
  const [placeData, setPlaceData] = useState(placeInfo);
  const [reviewData, setReviewData] = useState(reviewInfo);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const place_id = placeData.place_id;

  const handlePlaceData = async () => {
    setPlaceData({
      name: name,
      vicinity: location,
      geometry: { location: { lat: lat, lng: long } },
      place_id: uuidv4(),
      rating: 0,
    });
    // setReviewData({
    //   formatted_address: location,
    //   name: name,
    //   reviews: [],
    //   place_id: place_id,
    //   rating: 0,
    // });
  };

  const onSubmit = (e) => {
    db.collection('places').add(placeData, placeData.place_id);
    //   .then(db.collection('reviews').add(reviewData, placeData.place_id));
  };
  console.log(restaurants);
  return (
    <AddPlaceForm onSubmit={onSubmit}>
      <AddPlaceForm.Name
        placeholder="Enter restaurant name"
        onChange={(e) => setName(e.target.value)}
      />

      <AddPlaceForm.Location
        placeholder="Enter Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <AddPlaceForm.Button type="submit" onClick={handlePlaceData}>
        Submit restaurant
      </AddPlaceForm.Button>
    </AddPlaceForm>
  );
}
