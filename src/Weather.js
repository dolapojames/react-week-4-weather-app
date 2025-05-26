import "./Weather.css";

export default function Weather() {
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
                <span>{weatherData.date}</span>,{" "}
                <span>{weatherData.description}</span>
                <br />
                Humidity:
                <span className="weather-strong">{weatherData.humidity}%</span>,
                Wind:
                <span className="weather-strong">{weatherData.wind}km/h</span>
              </p>
            </div>
            <div className="col ">
              <div className="temperature">
                <div>
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                    alt=""
                    className="temperature-icon"
                  />
                </div>
                <div className="temperature-all">
                  <div className="temperature-value">
                    {weatherData.temperature}
                  </div>
                  <div className="temperature-unit">°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          This project was coded by
          <a
            href="https://github.com/dolapojames"
            target="_blank"
            rel="noreferrer"
          >
            Dolapo James
          </a>
          is
          <a
            href="https://github.com/dolapojames/react-week-4-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://weather-in-react-vscode-240525.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
