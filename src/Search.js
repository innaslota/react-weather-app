import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [paragraph, setParagraph] = useState("");
  let [city, setCity] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "bdad5baf17a5f89219e6f1fedb3153de";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then((response) => {
      setParagraph(
        `It is currently ${Math.round(response.data.main.temp)}° in ${city}`
      );
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="Search-input"
          autofocus="on"
          autocomplete="off"
          onChange={updateCity}
        />
        <input type="image" alt="submit" src="images/search.png" class="Search-icon" />
      </form>
      <p>{paragraph}</p>
    </div>
  );
}
