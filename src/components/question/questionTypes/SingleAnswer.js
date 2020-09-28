import React, { useState } from "react";
import { markSelected } from "../../../utils/utils";
import Answer from "../Answer";

const SingleAnswer = ({ question, onAnswersSubmit }) => {
  console.log("question in singleAnswer", question);
  const [numSelected, setNumSelected] = useState(0);
  const [answers, setAnswers] = useState(
    markSelected(question.possible_answers)
  );
  const handleAnswerClick = (answerIndex) => {
    let clickedAnswer = answers[answerIndex];
    console.log("clickedAnswer", clickedAnswer);

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
      setNumSelected(1);
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
      setNumSelected(0);
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

export default SingleAnswer;
