import logo from "../../assets/icons/logo.svg";

const img = document.createElement("img");
const span = document.createElement("span");
const logoWrapper = document.getElementById("logo-w");

export default function addLogo() {
  span.id = "logo-text";
  span.textContent = "WeathIn";
  img.alt = "weaIn";
  img.src = logo;
  img.id = "logo-fig";
  logoWrapper.appendChild(img);
  logoWrapper.appendChild(span);
}
