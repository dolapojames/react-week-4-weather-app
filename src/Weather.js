import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data.temperature.current);
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      iconUrl: response.data.icon_url,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="app-container">
          <form className="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  required
                  className="search-form-input"
                  autoFocus="on"
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

          <div className="container mt-3">
            <div className="row justify-content-between">
              <div className="col">
                <h1 className="mb-2">{weatherData.city}</h1>
                <p className=" weather-app-details">
                  <span>
                    <FormattedDate date={weatherData.date} />
                  </span>
                  ,
                  <span className="text-capitalize">
                    {weatherData.description}
                  </span>
                  <br />
                  Humidity:
                  <span className="weather-strong">
                    {weatherData.humidity}%
                  </span>
                  , Wind:
                  <span className="weather-strong">{weatherData.wind}km/h</span>
                </p>
              </div>
              <div className="col ">
                <div className="temperature">
                  <div>
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                      className="temperature-icon"
                    />
                  </div>
                  <div className="temperature-all">
                    <div className="temperature-value">
                      {Math.round(weatherData.temperature)}
                    </div>
                    <div className="temperature-unit">°C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
