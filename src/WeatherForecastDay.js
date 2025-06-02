export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let iconUrl = props.data.condition.icon_url;
    return `${iconUrl}`;
  }
  function description() {
    let description = props.data.condition.description;
    return `${description}`;
  }

  return (
    <div>
      <div className="WeatherForecast-Day">{day()}</div>
      <div className="WeatherIcon">
        <img src={icon()} className="img-fluid" alt={description()}></img>
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-high">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-low">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
