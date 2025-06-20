import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import ThreeDBackground from "./components/ThreeDBackground";

const API_KEY = "9ab5ed8e2431b96808a0715ecdd215ba"; // Replace with your API key

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="app-container">
      <ThreeDBackground weather={weather}/>
      <div className="overlay">
        <h1>3D Weather App</h1>
        <form onSubmit={fetchWeather} className="city-form">
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
