import errorBar from "../components/error";
import makeChart from "../components/weatherCharts";
import close from "./closeError";

// Returns DOM element
function getElement(id) {
  return document.getElementById(id);
}

// getElement("wci");
// img.id = "weather-state";
// const img = document.createElement("img");

export default async function updateUI(response) {
  const wd = await response;
  const data = await wd.data;
  if ("error" in data) {
    errorBar(data.error.message);
    close(); // Close error box when close button clicks.
  } else {
    getElement("place-name").innerText = await wd.city();
    getElement("country").innerText = await wd.country();
    getElement("card-temp").innerText = await wd.currentTempInCelsius();
    getElement("max-temp").innerText = await wd.todayMaxTempInCelsius();
    getElement("condition-text").innerText = await wd.currentCondition();
    getElement("data-pressure").innerText = await wd.currentPressureInmb();
    getElement("data-visibilty").innerText = await wd.currentVisiblityInKm();
    getElement("data-humidity").innerText = await wd.currentHumidity();
    getElement("aqi").innerText = await wd.currentAirQuality();
    getElement("wind-direction").innerText = await wd.currentWindDirection();
    getElement("quality-bar-fill").style.width = await wd.airQualityIndicator();
    const [hours, temps] = await wd.hourlyWeatherInCelsius();
    if (getElement("chart") !== null) {
      getElement("chart").remove();
      getElement("temp-chart-wrapper").appendChild(
        makeChart(temps, hours, "Temperature in °C"),
      );
    } else {
      getElement("temp-chart-wrapper").appendChild(
        makeChart(temps, hours, "Temperature in °C"),
      );
    }
    getElement("tomorrow-card-temp").innerText = await wd.tomorrowTempInCelsius();
    getElement("tomorrow-weather").innerText = await wd.tomorrowCondition();
  }
}
