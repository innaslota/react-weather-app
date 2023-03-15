import React, { useState } from "react";
import axios from "axios";
import "./Details.css";

export default function Details(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      humidity: response.data.main.humidity,
      presure: response.data.main.pressure,
      wind: response.data.wind.speed
    });
  }

  if (weatherData.ready) {
    return (
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
    );
  } else {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

    return "Loading..."
  }

 
}

