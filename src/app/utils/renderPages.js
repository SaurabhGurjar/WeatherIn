import homePage from "../views/home";
import { $ } from "./DOMElements";

export function renderHome() {
  $("main-c").innerHTML = homePage();
}

