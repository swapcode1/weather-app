import React from 'react';
import { getWeatherIcon, formatTemperature, formatDate } from '../../utils/formatters';

const ForecastCard = ({ day }) => {
  const iconUrl = getWeatherIcon(day.icon, '2x');
  const { dayName, dateStr } = formatDate(day.date);

  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center min-w-[140px]">
      <p className="font-semibold text-gray-800 mb-1">{dayName}</p>
      <p className="text-xs text-gray-500 mb-2">{dateStr}</p>
      <img src={iconUrl} alt={day.description} className="w-16 h-16 mx-auto" />
      <p className="text-xs text-gray-600 capitalize mb-2">{day.description}</p>
      <p className="text-lg font-bold text-gray-800">
        {formatTemperature(day.temp)}°C
      </p>
      <p className="text-xs text-gray-500">
        {formatTemperature(day.tempMin)}° / {formatTemperature(day.tempMax)}°
      </p>
    </div>
  );
};

export default ForecastCard;
