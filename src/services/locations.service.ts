import { httpService } from "./http.service"

const getLocations = async (locationName: string) => {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY
  const getLocationsUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationName}`
  const locations = await httpService.get(getLocationsUrl)
  console.log(`locations:`, locations)
}

export const locationService = {
  getLocations,
}
