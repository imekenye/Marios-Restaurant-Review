import { useState, useEffect } from 'react';

export default function useCurrentLocation(options = {}) {
  // store error message in state
  const [error, setError] = useState();
  // store location in state
  const [location, setLocation] = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = async (position) => {
    const { latitude, longitude } = await position.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    // If the geolocation is not defined in the used browser you can handle it as an error
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    // Call the Geolocation API
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options
    );
  }, [options, location]);

  return { location, error };
}
