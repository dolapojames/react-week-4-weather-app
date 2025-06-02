import { useState } from "react";
import axios from "axios";

export default function WeatherIcon() {
  const [icon, setIcon] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [city, setCity] = useState("");

  function displayIcon(response) {
    setIcon(response.data.condition.icon);
    setCity(response.data.city);
    setIconUrl(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
    );
  }

  function search() {
    const apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayIcon);

    return;
  }

  search();

  return <div className="WeatherIcon">iconUrl</div>;
}
