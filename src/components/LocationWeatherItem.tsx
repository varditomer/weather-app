import { LocationWeather } from "../interfaces/LocationWeather.interface"

type LocationWeatherItemProps = {
  location: LocationWeather
}

export default function LocationWeatherItem({ location }: LocationWeatherItemProps) {
  const generateAcronym = (country: string) => {
    const words = country.split(' ');

    // If country name is a single word, return it as is
    if (words.length === 1) {
      return country;
    }

    // Otherwise, generate an acronym from the first letter of each word,
    // excluding the word 'of'
    const acronym = words.map((word: string) => {
      if (word.toLowerCase() !== 'of') {
        return word.charAt(0).toUpperCase()
      }
    })
    return acronym.join('');
  }


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
            <span className="country">{generateAcronym(location.country)}</span>
          </div>
        </div>

      </div>

      <div className="weather-type-section">
        <img src={location.weatherGraphic} alt="" className="weather-element" />
        <div className="weather-desc">{location.weather}</div>
      </div>
    </li>
  )
}