export function $(id) {
  return document.getElementById(id);
}

export function $$(name, selector) {
    if (selector === "class") return document.querySelectorAll(`.${name}`);
    if (selector === "id") return document.querySelector(`#${name}`);
    return document.querySelector(name);
}
