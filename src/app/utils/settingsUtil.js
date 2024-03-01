import { $, $$ } from "./DOMElements";
import WeatherData from "./data";
import { rightSectionUI } from "./fetchDataTo";

// Remove Active class from buttons
function removeActiveClass(cls, activeCls) {
  $$(cls, "class").forEach((btn) => btn.classList.remove(activeCls));
}

function activeClassToBtn(btn) {
  if (btn === null) return;
  btn.classList.add("tdactive");
}

async function getUnit() {
  if (WeatherData.getTempInC()) {
    const btn = $("cel-btn");
    activeClassToBtn(btn);
  } else {
    const btn = $("fah-btn");
    activeClassToBtn(btn);
  }
  if (WeatherData.getDisInKm()) {
    const btn = $("km-btn");
    activeClassToBtn(btn);
  } else {
    const btn = $("mi-btn");
    activeClassToBtn(btn);
  }
}

function changeTempUnit(btnId) {
  WeatherData.setTempInC(btnId === "cel-btn");
}

function changeDisUnit(btnId) {
  WeatherData.setDisInKm(btnId === "km-btn");
}

// Get button click event
function getClickEvent(cls, response) {
  const buttons = $$(cls, "class");
  buttons.forEach((btn) => {
    btn.classList.remove("tdbtn-active");
    btn.addEventListener("click", () => {
      removeActiveClass(cls, "tdactive");
      if (!btn.classList.contains("tdactive")) {
        if (btn.classList.contains("tbtn")) changeTempUnit(btn.id, response);
        if (btn.classList.contains("dbtn")) changeDisUnit(btn.id, response);
        activeClassToBtn(btn);
        rightSectionUI(response);
      }
    });
  });
}

export default function settingsHandler(response) {
  getUnit();
  getClickEvent("tbtn", response);
  getClickEvent("dbtn", response);
}
