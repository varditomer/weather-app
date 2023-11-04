import LocationsWeatherList from "../components/LocationsWeatherList";
import SearchBar from "../components/SearchBar";
import { LocationWeather } from "../interfaces/LocationWeather.interface";
import { locationService } from "../services/locations.service";
import { weatherService } from "../services/weather.service";
import { useState } from 'react'

export default function Home({ setUserMessage }: {setUserMessage: React.Dispatch<React.SetStateAction<string>> }) {
  const [locationsWeather, setLocationsWeather] = useState<LocationWeather[]>([])

  const generateLocationWeather = async (locationData: any) => {
    const locationLatLng = locationData.lat + ',' + locationData.lon
    const weatherDetails = await weatherService.getWeather(locationLatLng)
    if (weatherDetails?.hasOwnProperty('message')) {
      setUserMessage(`Failed to retrieve location's weather`)
      return
    }
    const weatherGraphic = weatherService.getWeatherGraphic(weatherDetails.current.condition.code)

    return {
      id: locationData.id,
      name: locationData.name,
      country: locationData.country,
      tempHigh: weatherDetails.forecast.forecastday[0].day.maxtemp_c,
      tempLow: weatherDetails.forecast.forecastday[0].day.mintemp_c,
      temp: weatherDetails.current.temp_c,
      weather: weatherDetails.current.condition.text,
      weatherGraphic: weatherGraphic,
    } as LocationWeather
  }


  const handleUserInput = async (userInput: string) => {
    // Api query must be at least 3 characters, reducing api calls
    if (userInput.length < 3) return setLocationsWeather([])
    const locationsData = await locationService.getLocations(userInput)
    if (locationsData?.hasOwnProperty('message')) {
      setUserMessage('Failed to retrieve location')
      return
    }

    if (!locationsData.length) {
      setUserMessage(`Location not found!`)
      return setLocationsWeather([])
    }

    // cause each of locationWeather returns as a promise - wait for all
    const locationsWeather: LocationWeather[] = await Promise.all(
      locationsData.map((locationData: any) => generateLocationWeather(locationData))
    );
    setLocationsWeather(locationsWeather)

  }

  return (
    <div className="home">
      <SearchBar handleUserInput={handleUserInput} />
      <LocationsWeatherList locationsWeather={locationsWeather} />
    </div>
  )
}
