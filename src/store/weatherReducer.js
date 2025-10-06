export const initialState = {
  loading: false,
  error: null,
  currentWeather: null,
  forecast: []
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { 
        ...state, 
        loading: false, 
        error: null, 
        currentWeather: action.payload.current,
        forecast: action.payload.forecast 
      };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};
