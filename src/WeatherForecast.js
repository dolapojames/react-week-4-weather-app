import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const city = props.city;
  const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
  const apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thursday</div>
          <div className="WeatherIcon">
            <img src={props.data.iconUrl} className="img-fluid"></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-high">19°</span>
            <span className="WeatherForecast-temperature-low">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-Day">Thursday</div>
          <div className="WeatherIcon">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="img-fluid"
            ></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-high">19°</span>
            <span className="WeatherForecast-temperature-low">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-Day">Thursday</div>
          <div className="WeatherIcon">
            {" "}
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="img-fluid"
            ></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-high">19°</span>
            <span className="WeatherForecast-temperature-low">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-Day">Thursday</div>
          <div className="WeatherIcon">
            {" "}
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="img-fluid"
            ></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-high">19°</span>
            <span className="WeatherForecast-temperature-low">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="WeatherForecast-Day">Thursday</div>
          <div className="WeatherIcon">
            {" "}
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="img-fluid"
            ></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-high">19°</span>
            <span className="WeatherForecast-temperature-low">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
