import errorBar from "../components/error";
import close from "./closeError";
import renderSun from "./renderCanvas";
import { homeUI, rightSectionUI } from "./fetchDataTo";

export default async function updateUI(response) {
  const wd = await response;
  const data = await wd.data;
  if ("error" in data) {
    errorBar(data.error.message);
    close(); // Close error box when the close button clicked.
  } else {
    renderSun(wd);
    homeUI(wd);
    rightSectionUI(wd);
  }
}
