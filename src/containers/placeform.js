import React, { useState, useContext } from 'react';
import { AddPlaceForm } from '../components';
import { uuid } from 'uuidv4';
import PlacesContext from '../context/places-context';

export default function PlaceFormContainer({ lat, long, setShowform }) {
  const { addPlaceReview } = useContext(PlacesContext);
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
  const [restaurants] = useState([]);

  const handlePlaceData = async () => {
    const place_id = uuid;
    setPlaceData({
      name: name,
      vicinity: location,
      geometry: { location: { lat: lat, lng: long } },
      place_id: place_id,
      rating: 0,
    });

    setReviewData({
      formatted_address: location,
      name: name,
      reviews: [],
      place_id: place_id,
      rating: 0,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPlaceReview(
      placeData.place_id,
      placeData.name,
      lat,
      long,
      placeData.vicinity
    );
    setShowform(false);
    console.log(placeData, reviewData);
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
