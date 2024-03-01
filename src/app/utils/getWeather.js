import WeatherData from "./data";

export default async function getWeatherData(search) {
  return new WeatherData(4, search);
}
