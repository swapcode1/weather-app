import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { getWeatherIcon, formatTemperature } from '../../utils/formatters';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const iconUrl = getWeatherIcon(weather.icon);

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{weather.city}</h2>
          <p className="text-gray-500 capitalize">{weather.description}</p>
        </div>
        <img src={iconUrl} alt={weather.description} className="w-24 h-24" />
      </div>
      
      <div className="text-6xl font-bold text-gray-800 mb-8">
        {formatTemperature(weather.temp)}°C
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
          <Cloud className="text-blue-500" size={24} />
          <div>
            <p className="text-xs text-gray-500">Feels Like</p>
            <p className="font-semibold">{formatTemperature(weather.feelsLike)}°C</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
          <Droplets className="text-blue-500" size={24} />
          <div>
            <p className="text-xs text-gray-500">Humidity</p>
            <p className="font-semibold">{weather.humidity}%</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl">
          <Wind className="text-blue-500" size={24} />
          <div>
            <p className="text-xs text-gray-500">Wind</p>
            <p className="font-semibold">{formatTemperature(weather.windSpeed)} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
