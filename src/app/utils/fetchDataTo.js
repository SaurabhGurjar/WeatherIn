import { $ } from "./DOMElements";
import makeChart from "../components/weatherCharts";
import Icons from "../components/weatherIcons";
import renderSun from "./renderCanvas";

export const icons = new Icons();

// Update right section
export async function rightSectionUI(response) {
  const wd = await response;
  if (wd === null) {
    return;
  }

  let astroIcon;
  renderSun(wd);

  if ((await wd.astroIcon()) === "sun") {
    astroIcon = icons.sunIcon;
  } else if ((await wd.astroIcon()) === "star") {
    astroIcon = icons.starIcon;
  } else {
    astroIcon = icons.moonPhase[await wd.astroIcon()];
  }
  $("astro-icon").innerHTML = astroIcon;
  $("day-state").innerText = await wd.dayOrNight();
  $("region").innerText = `${await wd.cityName()}, ${await wd.stateName()}`;
  $("temps").innerText = await wd.currentTemp();

  const uv = await wd.currentUVData();
  $("ris-icon-wrapper").innerHTML = icons.UV[uv];
  $("ris-uv-data").innerText = `${uv}UV`;
  $("ris-ui-tag-text").innerText = await wd.uvLevel();
  $("ris-uv-text").innerText = `${await wd.uvLevel()} risk from UV rays`;

  $("1-ris-weather-card-date").innerText = await wd.date(0);

  $("2-ris-weather-card-date").innerText = await wd.date(1);
  $("3-ris-weather-card-date").innerText = await wd.date(2);

  $("1-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTemp(0)}° / ${await wd.dayMinTemp(0)}°`;
  $("2-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTemp(1)}° / ${await wd.dayMinTemp(1)}°`;
  $("3-ris-weather-card-temps-text").innerText =
    `${await wd.dayMaxTemp(2)}° / ${await wd.dayMinTemp(2)}°`;

  $("1-ris-weather-card-icon").innerHTML =
    icons.conditions[await wd.conditionCode(0)];
  $("2-ris-weather-card-icon").innerHTML =
    icons.conditions[await wd.conditionCode(1)];
  $("3-ris-weather-card-icon").innerHTML =
    icons.conditions[await wd.conditionCode(2)];
  $("1-ris-weather-card-condition").innerText = await wd.condition(0);
  $("2-ris-weather-card-condition").innerText = await wd.condition(1);
  $("3-ris-weather-card-condition").innerText = await wd.condition(2);
}

// Update home page
export async function homeUI(response) {
  const wd = await response;
  if (wd === null) {
    return;
  }
  const [hours, temps] = await wd.hourlyWeather();

  $("wci").innerHTML = icons.conditions[await wd.currentConditionCode()];
  $("place-name").innerText = await wd.city();
  $("country").innerText = await wd.country();
  $("card-temp").innerText = await wd.currentTemp();
  $("max-temp").innerText = await wd.todayMaxTemp();
  $("condition-text").innerText = await wd.currentCondition();
  $("data-pressure").innerText = await wd.currentPressureInmb();
  $("data-visibilty").innerText = await wd.currentVisiblity();
  $("data-humidity").innerText = await wd.currentHumidity();
  $("aqi").innerText = await wd.currentAirQuality();
  $("wind-direction").innerText = await wd.currentWindDirection();
  $("quality-bar-fill").style.width = await wd.airQualityIndicator();
  $("tomorrow-weather-card-icon").innerHTML =
    icons.conditions[await wd.conditionCode(1)];
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
  $("tomorrow-card-temp").innerText = await wd.tomorrowTemp();
  $("tomorrow-weather").innerText = await wd.tomorrowCondition();
}
