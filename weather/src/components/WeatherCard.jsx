import React from 'react';
import '../styles/WeatherCard.css';

export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2 className="weather-title">
        {data.name}, {data.sys.country}
      </h2>
      <p className="weather-desc">
        {data.weather[0].description.toUpperCase()}
      </p>
      <p className="weather-temp">
        {Math.round(data.main.temp)}°C
      </p>
      <div className="weather-details">
        <span>Humidity: {data.main.humidity}%</span>
        <span>Wind: {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}