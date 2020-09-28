import React from "react";
import SingleAnswer from "./questionTypes/SingleAnswer";
import MultiAnswer from "./questionTypes/MultiAnswer";
import TrueFalse from "./questionTypes/TrueFalse";

// Need to get the answer types to find the type of question and render accordingly, the correct component
const answerTypes = {
  "mutiplechoice-single": SingleAnswer,
  "mutiplechoice-multiple": MultiAnswer,
  truefalse: TrueFalse,
};

const Question = ({ question, onAnswersSubmit }) => {
  const RenderQuestion = answerTypes[question.question_type];

  return (
    // <div>Question comp</div>
    <RenderQuestion question={question} onAnswersSubmit={onAnswersSubmit} />
  );
};

export default Question;
