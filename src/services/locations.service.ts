const getLocations = async (locationName: string) => {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY
  const getLocationsUrl = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=lon`
}

export const locationService = {
  getLocations,
}
