import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme } from './theme/defaultTheme';
import { MapContainer } from './components/MapContainer/MapContainer.styled';
import { AppWrapper, GlobalStyle } from './theme/globalStyle';

// goggle maps
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: -1.292066,
  lng: 36.821945,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return 'Error loading Maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppWrapper>
        <MapContainer bg="primary" m="none" height="100vh">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            options={options}
          ></GoogleMap>
        </MapContainer>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
