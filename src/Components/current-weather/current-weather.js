import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./current-weather.css";
import sunnyIcon from "../icons/forecast_sun_sunny_weather_icon.png";
export default function CurrentWeather() {
  return (
    <div className="weather-card">
      <div className="weather-top">
        <div>
          <h5 className="city">Hsinchu</h5>
          <p className="weather-decription">Sunny</p>
        </div>
        <div>
          <img src={sunnyIcon} className="weatherIcon" />
        </div>
      </div>
      <div className="weather-bottom">
        <p className="temperature">18°C</p>
        <div className="weather-detail">
          <div className="weather-detail-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="weather-detail-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value"> 22°C</span>
          </div>
          <div className="weather-detail-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value"> 2 m/s</span>
          </div>
          <div className="weather-detail-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value"> 15%</span>
          </div>
          <div className="weather-detail-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-value"> 15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
