export default function errorBar(message) {
  const errorDiv = document.createElement("div");
  const errorText = document.createElement("p");
  const closeErrorBtn = document.createElement("Button");
  closeErrorBtn.id = "close-error-btn";
  closeErrorBtn.innerText = "x";
  errorDiv.id = "err-div";
  errorDiv.classList.add("error");
  errorText.innerText = `${message}`;
  errorDiv.appendChild(errorText);
  errorDiv.appendChild(closeErrorBtn);
  const parentElement = document.querySelector("#main-c");
  parentElement.insertBefore(errorDiv, parentElement.firstChild);
  // Close error bar after 5sec.
  setTimeout(() => {
    if (document.getElementById("err-div") !== null) {
      document.getElementById("err-div").remove();
    }
  }, 5000);
}
