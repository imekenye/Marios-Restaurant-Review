import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlacesState from './context/PlacesState';

ReactDOM.render(
  <React.StrictMode>
    <PlacesState>
      <App />
    </PlacesState>
  </React.StrictMode>,
  document.getElementById('root')
);
