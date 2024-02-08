import addFavicon from "./components/favicon";
import addLogo from "./components/logo";
import "../main.scss";
import nav from "./components/nav";

export default function render() {
  addFavicon();
  addLogo();
  nav();
}
