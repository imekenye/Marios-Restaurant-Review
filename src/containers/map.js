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
import PlacesContext from '../context/places-context';
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
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [currentId, setCurrentId] = useState();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleInfoWindow = (id) => {
    setCurrentId(id);
    setShowInfoWindow(!showInfoWindow);
  };

  // global context
  const { places, latitude, longitude } = useContext(PlacesContext);

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  const handleMapClick = (e) => {
    setLat(e.latLng.lat());
    setLong(e.latLng.lng());
    setShowForm(true);
  };

  return (
    <>
      {showForm && (
        <>
          <PlaceFormContainer lat={lat} long={long} setShowform={setShowForm} />
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
          />
        </>
      )}

      <Map>
        {
          <GoogleMap
            onClick={handleMapClick}
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{
              lat: latitude,
              lng: longitude,
            }}
            options={options}
          >
            <Marker
              position={{
                lat: latitude,
                lng: longitude,
              }}
            />

            {places &&
              places
                // .slice(0, 6)
                .map((restaurant, idx) => (
                  <React.Fragment key={idx}>
                    <Marker
                      onClick={(e) => {
                        console.log(e.latLng.lng());
                        // getReviews(restaurant.place_id);
                        // history.push(`/reviews/${restaurant.place_id}`);
                        handleInfoWindow(idx);
                      }}
                      position={{
                        lat: restaurant.geometry.location.lat,

                        lng: restaurant.geometry.location.lng,
                      }}
                      icon={marker}
                    />
                    {currentId === idx && showInfoWindow ? (
                      <InfoWindow
                        // onLoad={onLoad}
                        position={{
                          lat: restaurant.geometry.location.lat,

                          lng: restaurant.geometry.location.lng,
                        }}
                      >
                        <div>
                          <p>{restaurant.name}</p>
                        </div>
                      </InfoWindow>
                    ) : null}
                  </React.Fragment>
                ))}
          </GoogleMap>
        }
      </Map>
    </>
  );
}
