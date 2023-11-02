import { LocationWeather } from "../interfaces/LocationWeather.interface"
import LocationWeatherItem from "./LocationWeatherItem"

type LocationsWeatherListProps = {
  locationsWeather: LocationWeather[]
}

export default function LocationsWeatherList({ locationsWeather }: LocationsWeatherListProps) {
  return (
    <ul className="locations-weather-list">
      {locationsWeather.map(location => <LocationWeatherItem
        key={location.id}
        location={location}
      />
      )}
    </ul>
  )
}