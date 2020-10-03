import { handleResponse, handleError } from "./apiHelpers";

const resultUrl = "https://proto.io/en/jobs/candidate-questions/result.json";

export function getResult() {
  return fetch(resultUrl).then(handleResponse).catch(handleError);
}
