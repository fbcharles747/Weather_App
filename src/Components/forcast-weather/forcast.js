import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import sunny from "../icons/forecast_sun_sunny_weather_icon.png";
import ForcastCard from "./forcast-card";
import "./forcast.css";
export default function Forcast(props) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dailyData = [];
  const { datas } = props;
  dailyData.push(datas[0]);
  for (let i = 1; 8 * i <= datas.length; i++) {
    console.log(8 * i - 1);
    dailyData.push(datas[8 * i - 1]);
  }
  console.log(dailyData);

  return (
    <div class="card-group group">
      {dailyData.map((data) => (
        <ForcastCard
          dateStr={data.dt_txt}
          detail={data.main}
          weather={data.weather[0]}
          wind={data.wind}
        />
      ))}
    </div>
  );
}
