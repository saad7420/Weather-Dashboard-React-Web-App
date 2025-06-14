import React, { useEffect, useState } from 'react';
import InputField from './components/InputField';
import SearchButton from './components/SearchButton';
import WeatherCard from './components/WeatherCard';
import useWeather from './hooks/useWeather';
import './styles/App.css'; // Assuming you have a CSS file for styles

function App() {
  const {
    city,
    setCity,
    weatherData,
    loading,
    error,
    fetchWeather
  } = useWeather();

 

  return (
    <div className="app-container">
      <header className="app-header">Weather Dashboard</header>

      <div className="search-section">
        <InputField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
/>

        <SearchButton onClick={fetchWeather} />
      </div>

      {loading && <div className="loading">Fetching Weather...</div>}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {weatherData && <WeatherCard data={weatherData} />}

      <footer className="app-footer">
        Created by Muhammad Saad Mehmood | &copy; 2025 all rights reserved.
      </footer>
    </div>
  );
}

export default App;