import getWeatherData from "./getWeather";
import updateUI from "./updateUI";

export default function refreshApp() {
  setInterval(() => {
    updateUI(getWeatherData());
  }, 900000);
}
