import React, { useState } from "react";
import { markSelected } from "../../../utils/utils";
import Answer from "../Answer";

const TrueFalse = ({ question, onAnswersSubmit }) => {
  // spread object and append possible_answers to be uniform with other answer formats
  const fullQuestion = {
    ...question,
    possible_answers: [
      { a_id: true, caption: "True" },
      { a_id: false, caption: "False" },
    ],
  };
  const [numSelected, setNumSelected] = useState(0);
  const [answers, setAnswers] = useState(
    markSelected(fullQuestion.possible_answers)
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
      {answers.map((answer, index) => {
        return (
          <Answer
            key={answer.a_id}
            index={index}
            type={question.question_type}
            onClick={handleAnswerClick}
          >
            {answer.caption}
          </Answer>
        );
      })}
      <button onClick={() => onAnswersSubmit(answers)} disabled={!numSelected}>
        Submit Answer
      </button>
    </>
  );
};

export default TrueFalse;
