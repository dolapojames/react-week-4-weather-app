import axios from "axios";
import { useState } from "react";

export default function WeatherIcon() {
  const [city, setCity] = useState();
  const [icon, setIcon] = useState();

  function handleResponse(response) {
    setCity((city = response.data.city));
    setIcon((icon = response.data.icon));

    function oya() {
      const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
      const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return;
    }
  }
  return (
    <div>
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`}
        className="temperature-icon"
        alt="weather-icon"
      />
    </div>
  );
}
