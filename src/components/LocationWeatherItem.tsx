import { LocationWeather } from "../interfaces/LocationWeather.interface"
import rectangleElement from '../assets/elements/rectangle.svg'

type LocationWeatherItemProps = {
    location: LocationWeather
}

export default function LocationWeatherItem({ location }: LocationWeatherItemProps) {
  return (
      <li
        className="location-weather-item"
        key={location.id}
      >
        
        {/* <img src={rectangleElement} alt="" className="rectangle" /> */}
        <span>{location.name}</span>
      </li>
  )
}