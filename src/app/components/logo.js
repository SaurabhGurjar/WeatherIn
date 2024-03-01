import logo from "../../assets/icons/logo.svg";

const span = document.createElement("span");
const logoWrapper = document.getElementById("logo-w");

export default function addLogo() {
  span.id = "logo-text";
  span.textContent = "WEAIN";
  logoWrapper.innerHTML = logo;
  logoWrapper.appendChild(span);
}
