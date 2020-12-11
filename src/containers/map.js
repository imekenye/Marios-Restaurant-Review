import React, { useContext, useState } from 'react';
import { Map } from '../components';
import marker from '../assets/marker.svg';

// google maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import mapStyles from '../mapStyles';
import PlacesContext from '../contexts/places-context';
import { Link, useHistory } from 'react-router-dom';
import PlaceFormContainer from './placeform';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapContainer() {
  const [showForm, setShowForm] = useState(false);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // global context
  const { places, latitude, longitude, getReviews } = useContext(PlacesContext);
  const history = useHistory();

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  const handleMapClick = (e) => {
    setShowForm(true);
    setLat(e.latLng.lat());
    setLong(e.latLng.lng());
  };
  console.log(lat, long);
  return (
    <>
      {showForm && (
        <>
          <PlaceFormContainer lat={lat} long={long} />
          <div
            className="overlay"
            onClick={() => setShowForm(false)}
            style={{
              position: 'absolute',
              zIndex: '11',
              background:
                'radial-gradient(97.56% 242.6% at 0% 3.08%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);',
              backdropFilter: 'blur(5px)',
              width: '100%',
              height: '100%',
            }}
          ></div>
        </>
      )}
      <Map>
        {
          <GoogleMap
            onClick={handleMapClick}
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{
              lat: latitude ? latitude : 51.507351,
              lng: longitude ? longitude : -0.127758,
            }}
            options={options}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />

            {places &&
              places
                // .slice(0, 6)
                .map((restaurant, idx) => (
                  <>
                    <Marker
                      key={idx}
                      onClick={() => {
                        getReviews(restaurant.place_id);
                        history.push(`/reviews/${restaurant.place_id}`);
                      }}
                      position={{
                        lat: restaurant.geometry.location.lat,

                        lng: restaurant.geometry.location.lng,
                      }}
                      icon={marker}
                    />
                  </>
                ))}
          </GoogleMap>
        }
      </Map>
    </>
  );
}
