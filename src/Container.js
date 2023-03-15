import "./Container.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Container(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      presure: response.data.main.pressure,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: response.data.dt,
    });
  }

  function search() {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Container">
        <div className="SearchEngine">
          <div className="Search">
            <form id="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="Search-input"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
              <input type="image" alt="submit" src="images/search.png" className="Search-icon" />
            </form>
          </div>
          <div className="Current-location">
            <button className="Current-location-button" id="current-location-button">
              Current location
            </button>
          </div>
        </div>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast />
        <Footer />
      </div>
      
    );
  } else {
    search();
    return "Loading..."
  }

  
}








