import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchWeather } from '../services/weatherService';

function Weather() {
  const [city, setCity] = useState('Mumbai');
  const { data, isLoading, error } = useQuery(['weather', city], () => fetchWeather(city));

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-card-light to-background-light dark:from-card-dark dark:to-background-dark rounded-xl shadow-xl dark:shadow-2xl p-8 transition-all duration-300">
      <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-6 text-center">
        Weather Forecast
      </h2>
      
      <div className="relative mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-primary-light/20 dark:border-primary-dark/20 
          bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark
          focus:border-primary-light dark:focus:border-primary-dark focus:outline-none transition-colors"
          placeholder="Enter city name"
        />
        <span className="absolute right-3 top-3 text-primary-light dark:text-primary-dark">
          🔍
        </span>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-light dark:border-primary-dark border-t-transparent"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-400 p-4 rounded">
          <p className="font-medium">Unable to fetch weather data</p>
        </div>
      )}

      {data && (
        <div className="bg-card-light dark:bg-card-dark rounded-lg p-6 shadow-inner transition-colors duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">{data.name}</h3>
              <p className="text-secondary-light dark:text-secondary-dark">Today's Weather</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold text-primary-light dark:text-primary-dark">
                {Math.round(data.main.temp)}°C
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background-light dark:bg-background-dark rounded-lg p-4 transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <span className="text-primary-light dark:text-primary-dark">💧</span>
                <p className="text-secondary-light dark:text-secondary-dark">Humidity</p>
              </div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark mt-2">
                {data.main.humidity}%
              </p>
            </div>

            <div className="bg-background-light dark:bg-background-dark rounded-lg p-4 transition-colors duration-300">
              <div className="flex items-center space-x-2">
                <span className="text-primary-light dark:text-primary-dark">💨</span>
                <p className="text-secondary-light dark:text-secondary-dark">Wind Speed</p>
              </div>
              <p className="text-2xl font-bold text-text-light dark:text-text-dark mt-2">
                {data.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
