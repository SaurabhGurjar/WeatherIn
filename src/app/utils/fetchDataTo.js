import { $ } from "./DOMElements";
import makeChart from "../components/weatherCharts";

export async function rightSectionUI(response) {
  const wd = await response;
  // Right side update
  $("day-state").innerText = await wd.dayOrNight();
  $("region").innerText = `${await wd.cityName()}, ${await wd.stateName()}`;
  $("temps").innerText = await wd.currentTempInCelsius();

  const uv = await wd.todayUVData();
  $("ris-uv-data").innerText = `${uv}UV`;
  $("ris-ui-tag-text").innerText = await wd.uvLevel();
  $("ris-uv-text").innerText = `${await wd.uvLevel()} risk from UV rays`;

  $("1-ris-weather-card-date").innerText = await wd.date(0);

  $("2-ris-weather-card-date").innerText = await wd.date(1);
  $("3-ris-weather-card-date").innerText = await wd.date(2);

  $("1-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTempInCelsius(0)}° / ${await wd.dayMinTempInCelsius(0)}°`;
  $("2-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTempInCelsius(1)}° / ${await wd.dayMinTempInCelsius(1)}°`;
  $("3-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTempInCelsius(2)}° / ${await wd.dayMinTempInCelsius(2)}°`;

  $("1-ris-weather-card-condition").innerText = await wd.condition(0);
  $("2-ris-weather-card-condition").innerText = await wd.condition(1);
  $("3-ris-weather-card-condition").innerText = await wd.condition(2);
}

export async function homeUI(response) {
  const wd = await response;
  const [hours, temps] = await wd.hourlyWeatherInCelsius();
  $("place-name").innerText = await wd.city();
  $("country").innerText = await wd.country();
  $("card-temp").innerText = await wd.currentTempInCelsius();
  $("max-temp").innerText = await wd.todayMaxTempInCelsius();
  $("condition-text").innerText = await wd.currentCondition();
  $("data-pressure").innerText = await wd.currentPressureInmb();
  $("data-visibilty").innerText = await wd.currentVisiblityInKm();
  $("data-humidity").innerText = await wd.currentHumidity();
  $("aqi").innerText = await wd.currentAirQuality();
  $("wind-direction").innerText = await wd.currentWindDirection();
  $("quality-bar-fill").style.width = await wd.airQualityIndicator();

  if ($("chart") !== null) {
    $("chart").remove();
    $("temp-chart-wrapper").appendChild(
      makeChart(temps, hours, "Temperature in °C"),
    );
  } else {
    $("temp-chart-wrapper").appendChild(
      makeChart(temps, hours, "Temperature in °C"),
    );
  }
  $("tomorrow-card-temp").innerText = await wd.tomorrowTempInCelsius();
  $("tomorrow-weather").innerText = await wd.tomorrowCondition();
}
