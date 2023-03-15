import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

export default function Header(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
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

  if (weatherData.ready) {
    return (
      <div className="Header">
        <h1 className="City-name" id="city-name">{weatherData.city}</h1>
        <h2 className="Current-date">
          Last update: <span id="current-date">{formatDate(weatherData.date * 1000)}</span>
        </h2>
      </div>
    );
  } else {
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(handleResponse);

    return "Loading..."
  }

 
}



