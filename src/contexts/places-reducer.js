import { FILTER_PLACES, GET_DATA, GET_LOCATION, ERROR } from './places-actions';

function placeReducer(state, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        places: action.payload.places,
        loading: false,
        error: null,
      };
    case GET_LOCATION:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    case FILTER_PLACES:
      return {
        ...state,
        filtered: action.payload.filtered,
        loading: true,
        error: '',
      };
    case ERROR:
      return {
        ...state,
        places: [],
        loading: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
export default placeReducer;
