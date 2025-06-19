import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather || weather.cod !== 200) return <div className="error">City not found.</div>;
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h3>{Math.round(weather.main.temp)}°C</h3>
      <p>{weather.weather[0].description}</p>
      <div className="details">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>Wind: {weather.wind.speed} m/s</span>
      </div>
    </div>
  );
}
