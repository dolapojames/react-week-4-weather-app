import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container mt-3">
      <div className="row justify-content-between">
        <div className="col">
          <h1 className="mb-2">{props.data.city}</h1>
          <p className=" weather-app-details mb-4">
            <span>
              <FormattedDate date={props.data.date} />
            </span>
            ,
            <span className="text-capitalize ms-2">
              {props.data.description}
            </span>
            <br />
            Humidity:
            <span className="weather-strong ms-1">{props.data.humidity}%</span>,
            Wind:
            <span className="weather-strong ms-1">{props.data.wind}km/h</span>
          </p>
        </div>
        <div className="col ">
          <div className="temperature">
            <div>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="temperature-icon"
              />
            </div>
            <div className="temperature-all">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
