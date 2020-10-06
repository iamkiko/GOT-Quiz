import React, { useState } from "react";
import PropTypes from "prop-types";
import { sanitizeData } from "../../../utils/utils";
import Answer from "../Answer";
import {
  AnswerContainer,
  AnswerType,
  Image,
  QuestionTitle,
  SubmitButton,
} from "../../styles";

const TrueFalse = ({ question, onAnswersSubmit }) => {
  // spread object and append possible_answers to be uniform with other answer formats i.e. store the possible_answers
  const fullQuestion = {
    ...question,
    possible_answers: [
      { a_id: true, caption: "True" },
      { a_id: false, caption: "False" },
    ],
  };
  const [numSelected, setNumSelected] = useState(0);
  const [answers, setAnswers] = useState(
    sanitizeData(fullQuestion.possible_answers, fullQuestion.correct_answer)
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
      <QuestionTitle>{question.title}</QuestionTitle>
      <AnswerType>True or not?</AnswerType>
      <Image src={question.img} alt={question.title} />
      <AnswerContainer>
        {answers.map((answer, index) => {
          return (
            <Answer
              key={answer.a_id}
              index={index}
              type={question.question_type}
              onClick={handleAnswerClick}
              selected={answer.selected}
              isCorrect={answer.isCorrect}
            >
              {answer.caption}
            </Answer>
          );
        })}
      </AnswerContainer>
      <SubmitButton
        onClick={() => onAnswersSubmit(answers)}
        disabled={!numSelected}
      >
        Submit Answer
      </SubmitButton>
    </>
  );
};

TrueFalse.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswersSubmit: PropTypes.func.isRequired,
};
export default TrueFalse;
