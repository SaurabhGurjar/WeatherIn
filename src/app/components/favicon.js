import logo from "../../assets/icons/logo.svg";

const head = document.querySelector("head");
const linkTag = document.createElement("link");

export default function addFavicon() {
  linkTag.rel = "icon";
  linkTag.type = "image/x-icon";
  linkTag.href = logo;
  head.appendChild(linkTag);
}
