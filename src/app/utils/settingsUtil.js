import { $, $$ } from "./DOMElements";
import { rightSectionUI } from "./fetchDataTo";

// Remove Active class from buttons
function removeActiveClass(cls, activeCls) {
  $$(cls, "class").forEach((btn) => btn.classList.remove(activeCls));
}

function activeClassToBtn(btn) {
  btn.classList.add("tdactive");
}

async function getUnit(response) {
  const wd = await response;
  if (await wd.getTempInC()) {
    const btn = $("cel-btn");
    activeClassToBtn(btn);
  } else {
    const btn = $("fah-btn");
    activeClassToBtn(btn);
  }
  if (await wd.getDisInKm()) {
    const btn = $("km-btn");
    activeClassToBtn(btn);
  } else {
    const btn = $("mi-btn");
    activeClassToBtn(btn);
  }
}

async function changeTempUnit(btnId, response) {
  const wd = await response;
  await wd.setTempInC(btnId === "cel-btn");
}

async function changeDisUnit(btnId, response) {
  const wd = await response;
  await wd.setDisInKm(btnId === "km-btn");
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
  getUnit(response);
  getClickEvent("tbtn", response);
  getClickEvent("dbtn", response);
}
