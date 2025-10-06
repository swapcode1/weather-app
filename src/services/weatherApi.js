import { API_KEY, BASE_URL } from './config';

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  
  if (!response.ok) {
    throw new Error('City not found. Please check the spelling and try again.');
  }
  
  return response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  
  return response.json();
};
