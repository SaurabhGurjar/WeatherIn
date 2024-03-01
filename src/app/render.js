import addFavicon from "./components/favicon";
import addLogo from "./components/logo";
import "../main.scss";
import nav from "./components/nav";
import searchBox from "./utils/search";
import { renderHome } from "./utils/renderPages";
import makeChart from "./components/weatherCharts";
import refreshApp from "./utils/refresh";
import getWeatherData from "./utils/getWeather";
import settingsHandler from "./utils/settingsUtil";
import { homeUI, rightSectionUI } from "./utils/fetchDataTo";
import pageRoutes from "./utils/routes";
import { storeData, getStoreData } from "./utils/dataObj";

export default function render() {
  storeData(getWeatherData());
  const response = getStoreData();
  addFavicon();
  addLogo();
  nav();
  renderHome();
  searchBox();
  makeChart();
  refreshApp();
  settingsHandler();
  homeUI(response);
  rightSectionUI(response);
  pageRoutes(response);
}
