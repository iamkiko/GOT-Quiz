import React, { useState } from "react";
import { markSelected } from "../../../utils/utils";
import Answer from "../Answer";

const SingleAnswer = ({ question, onAnswersSubmit }) => {
  const [numOfSelectedAnswers, setNumOfSelectedAnswers] = useState(0); // to enable/disable submit button if none selected
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
            : { ...answer, selected: false }
        )
      );
      setNumOfSelectedAnswers(1);
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
      setNumOfSelectedAnswers(0);
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
      <button
        onClick={() => onAnswersSubmit(answers)}
        disabled={!numOfSelectedAnswers}
      >
        Submit Answer
      </button>
    </>
  );
};

export default SingleAnswer;
