import { getStoreData } from "./dataObj";
import { homeUI, rightSectionUI } from "./fetchDataTo";

export default function refreshApp() {
  setInterval(() => {
    const response = getStoreData();
    homeUI(response);
    rightSectionUI(response);
  }, 900000);
}
