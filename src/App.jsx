import React from 'react';
import { useWeatherData } from './hooks/useWeatherData';
import { 
  SearchBar, 
  WeatherDisplay, 
  ForecastDisplay, 
  LoadingSpinner, 
  ErrorMessage 
} from './components';
import { Cloud } from 'lucide-react';

const App = () => {
  const { state, dispatch, lastCity, fetchWeather } = useWeatherData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Weather App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Get current weather and 5-day forecast for any city
        </p>

        <SearchBar onSearch={fetchWeather} lastCity={lastCity} />

        {state.error && (
          <ErrorMessage 
            message={state.error} 
            onDismiss={() => dispatch({ type: 'CLEAR_ERROR' })} 
          />
        )}

        {state.loading && <LoadingSpinner />}

        {!state.loading && state.currentWeather && (
          <>
            <WeatherDisplay weather={state.currentWeather} />
            <ForecastDisplay forecast={state.forecast} />
          </>
        )}

        {!state.loading && !state.currentWeather && !state.error && (
          <div className="text-center py-12">
            <Cloud size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Search for a city to see the weather</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
