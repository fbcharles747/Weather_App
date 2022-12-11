import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/search/search";
import CurrentWeather from "./Components/current-weather/current-weather";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);
  function handleOnSearchChange(searchData) {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forcastWeatherResponse = await response[1].json();
        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setForcastWeather({
          city: searchData.label,
          ...forcastWeatherResponse,
        });
      })
      .catch((err) => console.error("Error: " + err));
    console.log(currentWeather);
    console.log(forcastWeather);
  }
  return (
    <div className="container ">
      <div className="row ">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="row justify-content-md-center">
        <div className="col-4">
          <CurrentWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
