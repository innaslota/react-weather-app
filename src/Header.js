import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="City-name" id="city-name"></h1>
      <h2 className="Current-date">
        Last update: <span id="current-date"></span>
      </h2>
    </div>
  );
}
