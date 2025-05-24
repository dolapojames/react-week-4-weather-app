import "./Weather.css";

export function Weather() {
  let weatherData = {
    city: "Lagos",
    date: "Tues 10:00",
    humidity: "12",
    temperature: "12",
    wind: "12",
    description: "cloudy",
  };
  return (
    <div className="Weather">
      <div className="app-container">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              required
              className="search-form-input"
            />
            <input type="submit" value="Search" class="search-form-button" />
          </form>
        </header>

        <div className="weather-app-info">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span>{weatherData.date}</span>,{" "}
              <span>{weatherData.description}</span>
              <br />
              Humidity:
              <span className="weather-strong">{weatherData.humidity}%</span>,
              Wind:
              <span className="weather-strong">{weatherData.wind}km/h</span>
            </p>
          </div>

          <div className="weather-app-temperature">
            <div>
              <img src="" alt="" className="weather-app-temperature-icon" />
            </div>

            <div className="weather-app-temperature-value">
              {weatherData.temperature}
            </div>
            <div className="weather-app-temperature-unit">°C</div>
          </div>
        </div>

        <footer>
          This project was coded by
          <a href="https://github.com/dolapojames" target="_blank">
            Dolapo James
          </a>
          is
          <a
            href="https://github.com/dolapojames/react-week-4-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://weather-in-react-vscode-240525.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
export default Weather;
