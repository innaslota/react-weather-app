import "./Container.css";
import React from "react";
import CurrentLocation from "./CurrentLocation";
import Header from "./Header";
import Search from "./Search";
import Row from "./Row";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function Container() {
  return (
    <div className="Container">
      <Search />
      <CurrentLocation />
      <Header defaultCity="Kyiv"/>
      <Row />
      <WeatherForecast />
      <Footer />
    </div>
  );
}
