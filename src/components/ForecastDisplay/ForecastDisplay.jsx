import React from 'react';
import { Calendar } from 'lucide-react';
import ForecastCard from './ForecastCard';

const ForecastDisplay = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar size={24} />
        5-Day Forecast
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {forecast.map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;
