import { httpService } from "./http.service"

const getLocations = async (locationName: string) => {
  const apikey = import.meta.env.VITE_WEATHER_API_KEY
  console.log(`apikey:`, apikey)
  const getLocationsUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${locationName}`
  const locations = await httpService.get(getLocationsUrl)
  console.log(`locations:`, locations)
}

export const locationService = {
  getLocations,
}
