import { handleResponse, handleError } from "./apiHelpers";

const quizUrl = "https://proto.io/en/jobs/candidate-questions/quiz.json";

export function getQuiz() {
  return fetch(quizUrl).then(handleResponse).catch(handleError);
}
