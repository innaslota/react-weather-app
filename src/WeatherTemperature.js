import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function displayFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    };

    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    };

    if (unit === "celsius") {
        return (
            <div className="Temperature">
                      <p className="Description" id="description">{props.celsius.description}</p>
                      <h3 className="Current-temperature">
                        <span id="current-temperature">{Math.round(props.celsius.temperature)}</span>°
                      </h3>
                      <h4 className="Feels-like">
                        <span className="Unity" id="celsius">
                          C / <a href="/" onClick={displayFahrenheit}>F</a>{" "}
                        </span>
                        <strong>
                          <span id="feels-like-temp">{Math.round(props.celsius.feelsLike)}</span>°{" "}
                        </strong>
                        feels
                      </h4>
                  </div>
        )
    } else {
        let fahrenheit = Math.round((props.celsius.temperature * 9) / 5 + 32);
        let feelLikeFahrenheit = Math.round((props.celsius.feelsLike * 9) / 5 + 32);
        
        return(
        <div className="Temperature">
             <p className="Description" id="description">{props.celsius.description}</p>
             <h3 className="Current-temperature">
                <span id="current-temperature">{fahrenheit}</span>°
             </h3>
             <h4 className="Feels-like">
                <span className="Unity" id="celsius">
                <a href="/" onClick={displayCelsius}> C </a> / F{" "}
                </span>
                <strong>
                    <span id="feels-like-temp">{feelLikeFahrenheit}</span>°{" "}
                </strong>
                feels
             </h4>
        </div>
        );
    }
}