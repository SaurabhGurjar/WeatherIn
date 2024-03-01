import checkError from "./errorUtil";

let wd;
export async function storeData(dobj) {
  wd = dobj;
}

export async function getStoreData() {
  return checkError(wd);
}
