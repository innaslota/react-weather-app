import React from "react";
import "./Details.css";

export default function Details() {
  return (
    <div className="Details">
      <p>
        <img
          src="images/gauge.png"
          alt="Atmosphere presure"
          className="Pictogram"
        />
        <span id="atmosphere-presure">1010</span> hPa
      </p>
      <p>
        <img src="images/humidity.png" alt="Humidity" className="Pictogram" />
        <span id="humidity">46</span>% humidity
      </p>
      <p>
        <img src="images/wind.png" alt="Wind" className="Pictogram" />
        <span id="wind">2</span> m/s NW
      </p>
    </div>
  );
}
