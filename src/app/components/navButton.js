export default class NavButton {
  static checkInstanceMethodError(arg) {
    if (!arg) throw new Error("Argument is null or undefined.");

    if (typeof arg !== "string" || typeof arg !== "number") {
      throw new TypeError(
        `Invalid argument type ${typeof arg}. Expected string or number`,
      );
    }
  }

  static checkClassMethodError(arg1, arg2) {
    if (!arg1 || !arg2) throw new Error("Arguments are null or undefined.");

    if (!(arg1 instanceof HTMLElement)) {
      throw new TypeError(
        `Invalid argument type: ${arg1}. Expected HtmlElement.`,
      );
    }
    if (typeof arg2 !== "string" && typeof arg2 !== "number") {
      throw new TypeError(
        `Invalid argument type ${typeof arg2}. Expected string or number`,
      );
    }
  }

  static addClass(btn, cls) {
    NavButton.checkClassMethodError(btn, cls);
    btn.classList.add(cls);
  }

  static removeClass(btn, cls) {
    NavButton.checkClassMethodError(btn, cls);
    btn.classList.remove(cls);
  }

  static onClick(btn, callback) {
    if (!btn || !callback) throw new Error("Arguments are null or undefined.");
    if (!(btn instanceof HTMLElement)) {
      throw new TypeError(
        `Invalid argument type: ${btn}. Expected HtmlElement.`,
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(
        `Invalid argument type: ${callback}.Expected function.`,
      );
    }
    btn.addEventListener("click", callback);
  }

  static setButtonActive(btn) {
    if (!btn) throw new Error("Argument is null or undefined.");
    if (!(btn instanceof HTMLElement)) {
      throw new TypeError(`Invalid argument type: ${btn}. Expected `);
    }
    NavButton.addClass(btn, "active");
  }

  static setButtonUnactive(btn) {
    if (!btn) throw new Error("Argument is null or undefined.");
    if (!(btn instanceof HTMLElement)) {
      throw new TypeError(`Invalid argument type: ${btn}. Expected `);
    }
    NavButton.removeClass(btn, "active");
  }

  constructor(content, cls = "", id = "", state = false) {
    this.html = document.createElement("button");
    this.content = content;
    this.id = id;
    this.class = cls;
    this.isActive = state;
  }

  setContent(content) {
    NavButton.checkInstanceMethodError(content);
    this.html.innerHTML = content;
  }

  setClass(cls) {
    NavButton.checkInstanceMethodError(cls);
    this.html.classList.add(cls);
  }

  setId(id) {
    NavButton.checkInstanceMethodError(id);
    this.html.id = id;
  }

  setActive() {
    this.isActive = true;
  }

  appendButton(container) {
    if (!container) throw new Error("Arguments are null or undefined.");
    if (!(container instanceof HTMLElement)) {
      throw new TypeError(
        `Invalid argument type: ${container}. Expected HtmlElement.`,
      );
    }
    container.appendChild(this.html);
  }
}
