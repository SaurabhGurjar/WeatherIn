import Sun, { drawSunPath } from "../components/sunCanvas";

export default async function renderSun(response) {
  const wd = await response;
  const data = await wd.data;
  const [, currentTime] = data.current.last_updated.split(" ");
  const sunTime = await wd.astro();
  const sunCanvas = new Sun(
    "sun-canvas",
    sunTime.sunrise,
    sunTime.sunset,
    320,
    100,
    currentTime,
  );
  drawSunPath(sunTime.sunrise, sunTime.sunset);
  sunCanvas.refreshPerMin();
}
