import "./Container.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Container(props) {
  let [paragraph, setParagraph] = useState("");
  let [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      presure: response.data.main.pressure,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: response.data.dt,
    });
  }
  
  function formatDate(timestamp) {
    let newDate = new Date(timestamp);
    let hours = newDate.getHours();
    let minutes = ("0" + newDate.getMinutes()).slice(-2);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = newDate.getDay();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = newDate.getMonth();
    let date = newDate.getDate();
    return `${days[day]} (${months[month]}, ${date}), ${hours}:${minutes}`;
  }

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
      setParagraph(
        `It is currently ${Math.round(response.data.main.temp)}° in ${city}`
      );
    });
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
            <p>{paragraph}</p>
          </div>
          <div className="Current-location">
            <button className="Current-location-button" id="current-location-button">
              Current location
            </button>
          </div>
        </div>
        <div className='Body'>
          <div className="Header">
            <h1 className="City-name" id="city-name">{weatherData.city}</h1>
            <h2 className="Current-date">
              Last update: <span id="current-date">{formatDate(weatherData.date * 1000)}</span>
            </h2>
          </div>
          <div className="Row">
            <div className="Column1">
              <div className="Temperature">
                  <p className="Description" id="description">{weatherData.description}</p>
                  <h3 className="Current-temperature">
                    <span id="current-temperature">{Math.round(weatherData.temperature)}</span>°
                  </h3>
                  <h4 className="Feels-like">
                    <span className="Unity active" id="celsius">
                      C
                    </span>
                    /
                    <span className="Unity" id="fahrenheit">
                      F
                    </span>
                    <strong>
                      <span id="feels-like-temp">{Math.round(weatherData.feelsLike)}</span>°
                    </strong>
                    feels
                  </h4>
              </div>
            </div>
            <div className="Column2">
              <div className="Image">
              <img
                src={weatherData.iconURL}
                alt="Weather condition"
                className="Weather-image"
                id="icon"
              />
              </div>
            </div>
            <div className="Column3">
              <div className="Details">
                <p>
                  <img
                    src="images/gauge.png"
                    alt="Atmosphere presure"
                    className="Pictogram"
                  />
                  <span id="atmosphere-presure">{weatherData.presure}</span> hPa
                </p>
                <p>
                  <img src="images/humidity.png" alt="Humidity" className="Pictogram" />
                  <span id="humidity">{weatherData.humidity}</span>% humidity
                </p>
                <p>
                  <img src="images/wind.png" alt="Wind" className="Pictogram" />
                  <span id="wind">{weatherData.wind}</span> m/s NW
                </p>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast />
        <Footer />
      </div>
      
    );
  } else {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

    return "Loading..."
  }

  
}








