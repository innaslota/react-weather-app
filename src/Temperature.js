import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <p className="Description" id="description"></p>
      <h3 className="Current-temperature">
        <span id="current-temperature"></span>°
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
          <span id="feels-like-temp"></span>°
        </strong>{" "}
        feels
      </h4>
    </div>
  );
}
