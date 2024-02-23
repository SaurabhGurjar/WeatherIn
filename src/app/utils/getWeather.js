import WeatherData from "./data";

export default async function getWeatherData(search) {
    const wdData = new WeatherData(4, search);
    return wdData;
  }