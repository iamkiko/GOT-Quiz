// Helper function file for logic and calculations

// Add the key of selected false so we can track which answer has been selected
export const markSelected = (arr) =>
  arr.map((obj) => ({ ...obj, selected: false }));

// Check if current option is correct or not
export const markStatus = (answers, suffix) => {
  return answers.map((answer) => {
    let status =
      answer["correct" + suffix] === answer["selected" + suffix] &&
      answer.selected === true
        ? "Selected Correctly"
        : answer["correct" + suffix] !== answer["selected" + suffix] &&
          answer.selected === true
        ? "Incorrectly Selected"
        : answer["correct" + suffix] !== answer["selected" + suffix] &&
          answer.selected === false
        ? "Correct Answer"
        : "";
    return { ...answer, status };
  });
};
