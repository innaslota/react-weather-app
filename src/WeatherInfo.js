import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
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

    return (
        <div className='WeatherInfo'>
          <div className="Header">
            <h1 className="City-name" id="city-name">{props.data.city}</h1>
            <h2 className="Current-date">
              Last update: <span id="current-date">{formatDate(props.data.date * 1000)}</span>
            </h2>
          </div>
          <div className="Row">
            <div className="Column1">
              <WeatherTemperature celsius={props.data}/>
            </div>
            <div className="Column2">
              <div className="Image">
              <WeatherIcon code={props.data.icon}/>
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
                  <span id="atmosphere-presure">{props.data.presure}</span> hPa
                </p>
                <p>
                  <img src="images/humidity.png" alt="Humidity" className="Pictogram" />
                  <span id="humidity">{props.data.humidity}</span>% humidity
                </p>
                <p>
                  <img src="images/wind.png" alt="Wind" className="Pictogram" />
                  <span id="wind">{props.data.wind}</span> m/s NW
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}