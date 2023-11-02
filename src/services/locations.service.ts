import { httpService } from "./http.service"

const getLocations = async (locationName: string) => {
  const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL
  const apikey = import.meta.env.VITE_WEATHER_API_KEY
  const endpoint = "search.json"
  const getLocationsUrl = `${weatherApiBaseUrl}/${endpoint}?key=${apikey}&q=${locationName}`
  return await httpService.get(getLocationsUrl)
}

export const locationService = {
  getLocations,
}
