import { httpService } from "./http.service"
// Import the images
import midRain from "../assets/elements/weather/mid_rain.png";
import fastWind from "../assets/elements/weather/fast_wind.png";
import showers from "../assets/elements/weather/showers.png";
import tornado from "../assets/elements/weather/tornado.png";
import midRainSun from "../assets/elements/weather/mid_rain_sun.png";


const getWeather = async (latLng: string) => {
  const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL
  const apikey = import.meta.env.VITE_WEATHER_API_KEY
  const endpoint = "forecast.json"
  const getLocationsUrl = `${weatherApiBaseUrl}/${endpoint}?key=${apikey}&q=${latLng}&days=1&aqi=no&alerts=no`
  return await httpService.get(getLocationsUrl)
}

const _weatherGraphicMapping = {
  "mid rain": [
    1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240,
    1243, 1246, 1273, 1276,
  ],
  "fast wind / partly cloudy": [1003],
  showers: [1063, 1240, 1243, 1246],
  tornado: [1087, 1114, 1117, 1279, 1282],
  "mid rain and sun": [
    1000, 1003, 1006, 1009, 1030, 1063, 1066, 1069, 1072, 1087, 1114, 1117,
    1135, 1147, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1252,
    1255, 1258, 1261, 1264,
  ],
}

type GraphicUrls = {
  [key: string]: string
}

const _figmaGraphicUrls: GraphicUrls = {
  "mid rain": midRain,
  "fast wind / partly cloudy": fastWind,
  showers: showers,
  tornado: tornado,
  "mid rain and sun": midRainSun,
};

const getWeatherGraphic = (weatherCode: number): string => {
  console.log(`weatherCode:`, weatherCode)
  for (const [graphic, codes] of Object.entries(_weatherGraphicMapping)) {
    console.log(`graphic:`, graphic)
    console.log(`codes:`, codes)
    if (codes.includes(weatherCode)) {
      return _figmaGraphicUrls[graphic]
    }
  }
  return "../assets/elements/weather/mid_rain_sun.png" // Return an empty string or a default graphic URL if no match is found.
}

export const weatherService = {
  getWeather,
  getWeatherGraphic,
}
