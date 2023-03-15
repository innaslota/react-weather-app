import React, { useState } from "react";
import axios from "axios";
import "./Image.css";

export default function Image(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleError(error) {
    console.log(error);
  }

  if (weatherData.ready) {
    return (
      <div className="Image">
        <img
          src={weatherData.iconURL}
          alt="Weather condition"
          className="Weather-image"
          id="icon"
        />
      </div>
    );
  } else {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse).catch(handleError);

    return "Loading..."
  }

 
}

