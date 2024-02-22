export default function close() {
  document.getElementById("close-error-btn").onclick = () => {
    document.getElementById("err-div").remove();
  };
}
