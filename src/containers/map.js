import React, { useContext } from 'react';
import { Map } from '../components';

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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // global context
  const { places, latitude, longitude, getReviews } = useContext(PlacesContext);
  const history = useHistory();

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
                        history.push('/reviews');
                      }}
                      position={{
                        lat: restaurant.geometry.location.lat,
                        lng: restaurant.geometry.location.lng,
                      }}
                      icon="marker.svg"
                    />
                  </>
                ))}
          </GoogleMap>
        }
      </Map>
    </>
  );
}
