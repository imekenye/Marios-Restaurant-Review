import React, { useEffect, useState } from 'react';
import { Map } from '../components';
// custom hooks
import { useCurrentLocation, useFetchPlaces } from '../hooks';

// google maps
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from '../mapStyles';

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

const geolocationOptions = {
  enableHighAccuracy: true,
  // Using this option you can define when should the location request timeout and
  // call the error callback with timeout message.
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
};

export default function MapContainer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // custom hooks
  const { location } = useCurrentLocation(geolocationOptions);
  const { restaurants } = useFetchPlaces();

  console.log(restaurants);
  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <Map>
        {
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{
              lat: location ? location.latitude : 51.507351,
              lng: location ? location.longitude : -0.127758,
            }}
            options={options}
          >
            {location && (
              <Marker
                position={{ lat: location.latitude, lng: location.longitude }}
              />
            )}
            {restaurants &&
              restaurants
                // .slice(0, 6)
                .map((restaurant) => (
                  <Marker
                    position={{
                      lat: restaurant.geometry.location.lat,
                      lng: restaurant.geometry.location.lng,
                    }}
                    icon="marker.svg"
                  />
                ))}
          </GoogleMap>
        }
      </Map>
    </>
  );
}
