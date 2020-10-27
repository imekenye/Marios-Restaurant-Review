// styled components
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { MapContainer } from './components/MapContainer/MapContainer.styled';
import { AppWrapper, GlobalStyle } from './theme/globalStyle';
// custom hooks
import { useCurrentLocation } from './hooks/useCurrentLocation';
// goggle maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './mapStyles';
import { RestaurantList } from './components/RestaurantList/RestaurantList';
import { FilterRating } from './components/FilterRating/FilterRating';

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

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // geolocation api hook
  const { location, error } = useCurrentLocation(geolocationOptions);

  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppWrapper>
        {location && (
          <MapContainer bg="primary" m="none" height="100vh">
            <FilterRating />
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
          </MapContainer>
        )}
        {location && <RestaurantList />}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
