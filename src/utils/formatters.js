export const formatTemperature = (temp) => Math.round(temp);

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return {
    dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
    dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  };
};

export const getWeatherIcon = (iconCode, size = '4x') => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

export const processForecastData = (list) => {
  const dailyForecasts = [];
  const processedDates = new Set();

  list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateStr = date.toDateString();
    
    if (!processedDates.has(dateStr) && dailyForecasts.length < 5) {
      processedDates.add(dateStr);
      dailyForecasts.push({
        date: item.dt * 1000,
        temp: item.main.temp,
        tempMin: item.main.temp_min,
        tempMax: item.main.temp_max,
        description: item.weather[0].description,
        icon: item.weather[0].icon
      });
    }
  });

  return dailyForecasts;
};
