import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like
    });
  }

  if (weatherData.ready) {
    return (
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
    );
  } else {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

    return "Loading..."
  }

 
}
