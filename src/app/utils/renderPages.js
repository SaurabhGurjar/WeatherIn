import homePage from "../views/home";
import settingsPage from "../views/settings";
import { $ } from "./DOMElements";

export function renderHome() {
  $("main-c").innerHTML = homePage();
}

export function renderSettings() {
  $("main-c").innerHTML = settingsPage();
}
