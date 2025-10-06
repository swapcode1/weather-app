import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch, lastCity }) => {
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
        >
          <Search size={20} />
        </button>
      </div>
      {lastCity && (
        <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
          <MapPin size={14} /> Last searched: {lastCity}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
