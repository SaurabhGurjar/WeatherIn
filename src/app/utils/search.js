import updateUI from "./updateUI";
import getWeatherData from "./getWeather";
import { $ } from "./DOMElements";


export default async function searchBox() {
  const form = $("search-form");
  updateUI(getWeatherData());
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUI(getWeatherData($("w-search").value));
    form.reset();
  });
}
