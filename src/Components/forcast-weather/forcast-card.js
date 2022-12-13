import sunny from "../icons/forecast_sun_sunny_weather_icon.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./forcast.css";
export default function ForcastCard(props) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { dateStr } = props;
  const { temp, humidity } = props.detail;
  const { main, icon } = props.weather;
  const { speed } = props.wind;
  const d = new Date(dateStr);
  let day = d.getDay();
  return (
    <div className="card forcast-card border-light">
      <div className="card-header weekday">{weekday[day]}</div>
      <img
        src={`icons/${icon}.png`}
        class="card-img-top weatherIcon"
        alt="weather"
      />
      <div class="card-body text-secondary">
        <h5>{main}</h5>
        <h5 class="card-title forcast-temp">{Math.floor(temp - 273.15)}°C</h5>
        <div className="weather-detail-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{humidity}%</span>
        </div>
        <div className="weather-detail-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{speed} m/s</span>
        </div>
      </div>
    </div>
  );
}
