import React from 'react';
import { Map } from '../components';
// custom hook
import { useCurrentLocation } from '../hooks/useCurrentLocation';

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

const Places_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyBPxkRp-CqFSs5hVW4TdAZICPdwWZLvGFI'

export default function MapContainer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // geolocation api hook
  const { location } = useCurrentLocation(geolocationOptions);

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <>
      <Map>
        {location && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={{ lat: location.latitude, lng: location.longitude }}
            options={options}
          >
            <Marker
              position={{ lat: location.latitude, lng: location.longitude }}
            />
          </GoogleMap>
        )}
      </Map>
    </>
  );
}
