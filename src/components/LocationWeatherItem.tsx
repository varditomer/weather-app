import { LocationWeather } from "../interfaces/LocationWeather.interface"
import weatherImg from '../assets/elements/weather/moon_cloud_mid _rain.png'

type LocationWeatherItemProps = {
  location: LocationWeather
}

export default function LocationWeatherItem({ location }: LocationWeatherItemProps) {
  return (
    <li
      className="location-weather-item"
      key={location.id}
    >
      <div className="info-section">
        <div className="curr-temp">{location.temp.toFixed()}°</div>
        <div className="details">
          <div className="temp-range">
            <span className="max-temp">H:{location.tempHigh.toFixed()}°</span>
            <span>L:{location.tempLow.toFixed()}°</span>
          </div>
          <div className="location-details">
            <span className="city">{location.name}</span>
            <span>, </span>
            <span className="country">{location.country}</span>
          </div>
        </div>

      </div>

      <div className="weather-type-section">
        <img src={weatherImg} alt="" className="weather-element"/>
        <div className="weather-desc">{location.weather}</div>
      </div>
    </li>
  )
}