import { useReducer, useState } from 'react';
import { weatherReducer, initialState } from '../store/weatherReducer';
import { fetchCurrentWeather, fetchForecast } from '../services/weatherApi';
import { processForecastData } from '../utils/formatters';
import { API_KEY } from '../services/config';

export const useWeatherData = () => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const [lastCity, setLastCity] = useState('');

  const fetchWeather = async (city) => {
    if (!API_KEY) {
      dispatch({ 
        type: 'FETCH_ERROR', 
        payload: 'Please add your OpenWeatherMap API key to the .env file' 
      });
      return;
    }

    dispatch({ type: 'FETCH_START' });

    try {
      const [currentData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city)
      ]);

      const current = {
        city: currentData.name,
        temp: currentData.main.temp,
        feelsLike: currentData.main.feels_like,
        humidity: currentData.main.humidity,
        windSpeed: currentData.wind.speed,
        description: currentData.weather[0].description,
        icon: currentData.weather[0].icon
      };

      const dailyForecasts = processForecastData(forecastData.list);

      dispatch({ 
        type: 'FETCH_SUCCESS', 
        payload: { current, forecast: dailyForecasts } 
      });
      
      setLastCity(city);
    } catch (err) {
      dispatch({ 
        type: 'FETCH_ERROR', 
        payload: err.message 
      });
    }
  };

  return { state, dispatch, lastCity, fetchWeather };
};
