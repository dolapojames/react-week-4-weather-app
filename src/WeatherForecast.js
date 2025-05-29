import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Monday</div>
          <div className="WeatherForecastIcon"></div>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperature-max">19°</span>
            <span className="WeatherForecastTemperature-min">87°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
