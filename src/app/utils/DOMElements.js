export function $(id) {
  try {
    return document.getElementById(id);
  } catch (e) {
    throw new Error(e);
  }
}

export function $$(name, selector) {
  try {
    if (selector === "class") return document.querySelectorAll(`.${name}`);
    if (selector === "id") return document.querySelector(`#${name}`);
    return document.querySelector(name);
  } catch (e) {
    throw new Error(e);
  }
}
