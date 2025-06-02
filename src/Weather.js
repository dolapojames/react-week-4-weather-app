import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);

  function handleResponse(response) {
    setError(null);
    setWeatherData({
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    setReady(true);
  }

  function handleError() {
    setError("Enter a city name!");
    setReady(true);
  }

  function search() {
    const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="app-container">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  required
                  className="search-form-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                {" "}
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100 mt-2"
                />
              </div>
            </div>
          </form>
          {error ? (
            <div className="error-message">{error} </div>
          ) : (
            <WeatherInfo data={weatherData} />
          )}
          {error ? (
            <div className="error-message">{} </div>
          ) : (
            <WeatherForecast coordinates={weatherData.coordinates} />
          )}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
