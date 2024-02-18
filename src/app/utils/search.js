import WeatherData from "./data";
import updateUI from "./updateUI";

async function getWeatherData() {
  const cityName = document.getElementById("w-search").value;
  const wdData = new WeatherData(cityName);
  updateUI(wdData);
}

export default async function searchBox() {
  const form = document.getElementById("search-form");
  getWeatherData();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherData();
    form.reset();
  });
}
