import React from "react";

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
              <div className="Temperature">
                  <p className="Description" id="description">{props.data.description}</p>
                  <h3 className="Current-temperature">
                    <span id="current-temperature">{Math.round(props.data.temperature)}</span>°
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
                      <span id="feels-like-temp">{Math.round(props.data.feelsLike)}</span>°
                    </strong>
                    feels
                  </h4>
              </div>
            </div>
            <div className="Column2">
              <div className="Image">
              <img
                src={props.data.iconURL}
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