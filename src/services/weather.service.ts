import { httpService } from "./http.service"

const getWeather = async (latLng: string) => {
    const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL
    const apikey = import.meta.env.VITE_WEATHER_API_KEY
    const endpoint = "forecast.json"
    const getLocationsUrl = `${weatherApiBaseUrl}/${endpoint}?key=${apikey}&q=${latLng}&days=1&aqi=no&alerts=no`
    return await httpService.get(getLocationsUrl)
}

export const weatherService = {
  getWeather,
}
