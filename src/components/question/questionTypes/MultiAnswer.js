import React, { useState } from "react";
import { markSelected } from "../../../utils/utils";
import Answer from "../Answer";

const MultiAnswer = ({ question, onAnswersSubmit }) => {
  const [numSelected, setNumSelected] = useState(0);
  const [answers, setAnswers] = useState(
    markSelected(question.possible_answers)
  );

  const handleAnswerClick = (answerIndex) => {
    let clickedAnswer = answers[answerIndex];
    if (clickedAnswer.selected === false) {
      setAnswers(
        answers.map((answer, index) =>
          answerIndex === index
            ? {
                ...clickedAnswer,
                selected: true,
              }
            : answer
        )
      );
      setNumSelected(numSelected + 1);
    } else {
      setAnswers(
        answers.map((answer, index) =>
          answerIndex === index
            ? {
                ...clickedAnswer,
                selected: false,
              }
            : answer
        )
      );
      setNumSelected(numSelected - 1);
    }
  };

  return (
    <>
      <div>{question.title}</div>
      <img src={question.img} />
      {answers.map((answer, index) => (
        <Answer
          key={answer.a_id}
          index={index}
          type={question.question_type}
          onClick={handleAnswerClick}
        >
          {answer.caption}
        </Answer>
      ))}
      <button onClick={() => onAnswersSubmit(answers)} disabled={!numSelected}>
        Submit Answer
      </button>
    </>
  );
};

export default MultiAnswer;
