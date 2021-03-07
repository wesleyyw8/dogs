import { handleResponse, handleError } from "./apiUtils";
export const baseUrl = "https://random.dog/";

export function getDogs() {
  return fetch(`${baseUrl}doggos`).then(handleResponse).catch(handleError);
}
