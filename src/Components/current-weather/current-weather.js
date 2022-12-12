import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./current-weather.css";

export default function CurrentWeather(props) {
  const city = props.city;
  // console.log(city);
  const { main, icon } = props.weather;
  // console.log(weather);
  const { feels_like, humidity, pressure, temp } = props.main;
  // console.log(humidity);
  const { speed } = props.wind;
  // console.log(speed);
  return (
    <div className="weather-card">
      <div className="weather-top container">
        <div className="row gx-5">
          <div className="col">
            <h5 className="city">{city}</h5>
            <p className="weather-decription">{main}</p>
          </div>
          <div className="col">
            <img
              src={`http://openweathermap.org/img/wn/${icon}.png`}
              className="weatherIcon"
            />
          </div>
        </div>
      </div>
      <div className="weather-bottom container">
        <div className="row">
          <div className="col">
            <p className="temperature ">{Math.floor(temp - 273.15)}°C</p>
          </div>
          <div className="col">
            <div className="weather-detail">
              <div className="weather-detail-row">
                <span className="parameter-label">Details</span>
              </div>
              <div className="weather-detail-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">
                  {Math.floor(feels_like - 273.15)}°C
                </span>
              </div>
              <div className="weather-detail-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value"> {speed} m/s</span>
              </div>
              <div className="weather-detail-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value"> {humidity}%</span>
              </div>
              <div className="weather-detail-row">
                <span className="parameter-label">pressure</span>
                <span className="parameter-value"> {pressure} hpa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
