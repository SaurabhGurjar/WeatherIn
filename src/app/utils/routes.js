import { $$ } from "./DOMElements";
import { getStoreData } from "./dataObj";
import { homeUI } from "./fetchDataTo";
import { renderSettings, renderHome } from "./renderPages";
import searchBox from "./search";
import settingsHandler from "./settingsUtil";

export default async function pageRoutes() {
  $$("nav-btns", "class").forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.id) {
        case "home":
          renderHome();
          searchBox();
          homeUI(getStoreData());
          break;
        case "week":
          break;
        case "settings":
          renderSettings();
          settingsHandler(getStoreData());
          break;
        default:
          return null;
      }
    });
  });
}
