import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature-all">
          <div className="temperature-value">{Math.round(props.celsius)}</div>
          <div className="temperature-unit">
            °C |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    return (
      <div className="WeatherTemperature">
        <div className="temperature-all">
          <div className="temperature-value">{Math.round(fahrenheit)}</div>
          <div className="temperature-unit">
            <a href="/" onClick={showCelsius}>
              °F
            </a>
            | °C
          </div>
        </div>
      </div>
    );
  }
}
