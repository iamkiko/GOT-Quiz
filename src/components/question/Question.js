import React, { useState } from "react";
import SingleAnswer from "./questionTypes/SingleAnswer";
import MultiAnswer from "./questionTypes/MultiAnswer";
import TrueFalse from "./questionTypes/TrueFalse";

// Need to get the answer types to find the type of question and render accordingly, the correct component
const answerTypes = {
  "mutiplechoice-single": SingleAnswer,
  "mutiplechoice-multiple": MultiAnswer,
  truefalse: TrueFalse,
};

const Question = ({ question, onAnswersSubmit, score, setScore }) => {
  const RenderQuestion = answerTypes[question.question_type];

  return (
    <RenderQuestion
      question={question}
      onAnswersSubmit={onAnswersSubmit}
      score={score}
      setScore={setScore}
    />
  );
};

export default Question;
