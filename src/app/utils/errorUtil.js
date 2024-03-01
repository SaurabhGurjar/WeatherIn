import errorBar from "../components/error";
import close from "./closeError";

export default async function checkError(response) {
  const wd = await response;
  const data = await wd.data;
  if (data === null) {
    errorBar("Network error. Check connection.");
    close();
    return null;
  }
  if ("error" in data) {
    errorBar(data.error.message);
    close(); // Close error box when the close button clicked.
    return null;
  }
  return response;
}
