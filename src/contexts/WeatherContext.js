import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { mockWeatherData, mockForecastData } from '../data/mockData';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const { currentUser } = useUser();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({
    lat: -1.9403, // Default to Kigali, Rwanda
    lon: 29.8739
  });

  // Fetch weather data when user or location changes
  useEffect(() => {
    if (currentUser) {
      fetchWeatherData();
      fetchForecastData();
    }
  }, [currentUser, location]);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would fetch from an API
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`);
      // const data = await response.json();
      
      // Using mock data for the prototype
      const data = { ...mockWeatherData };
      
      setCurrentWeather(data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchForecastData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would fetch from an API
      // const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${API_KEY}`);
      // const data = await response.json();
      
      // Using mock data for the prototype
      const data = { ...mockForecastData };
      
      setForecast(data);
    } catch (err) {
      console.error('Error fetching forecast data:', err);
      setError('Failed to fetch forecast data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const value = {
    currentWeather,
    forecast,
    loading,
    error,
    location,
    updateLocation,
    refreshWeather: fetchWeatherData
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
