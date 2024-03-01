import getWeatherData from "./getWeather";
import { $ } from "./DOMElements";
import { homeUI, rightSectionUI } from "./fetchDataTo";
import { getStoreData, storeData } from "./dataObj";

export default async function searchBox() {
  const form = $("search-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    storeData(getWeatherData(form.q.value));
    const response = getStoreData();
    homeUI(response);
    rightSectionUI(response);
    form.reset();
  });
}
