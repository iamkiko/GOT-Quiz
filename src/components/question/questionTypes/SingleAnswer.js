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

const SingleAnswer = ({ question, onAnswersSubmit }) => {
  const [numOfSelectedAnswers, setNumOfSelectedAnswers] = useState(0); // to enable/disable submit button if none selected
  const [answers, setAnswers] = useState(
    sanitizeData(question.possible_answers, question.correct_answer)
  );

  const handleAnswerClick = (answerIndex) => {
    let clickedAnswer = answers[answerIndex];

    if (clickedAnswer.selected === false) {
      setAnswers(
        answers.map((answer, index) => {
          return answerIndex === index
            ? {
                ...clickedAnswer,
                selected: true,
              }
            : { ...answer, selected: false };
        })
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
      <QuestionTitle>{question.title}</QuestionTitle>
      <AnswerType>Pick one correct answer.</AnswerType>
      <Image src={question.img} alt={question.title} />
      <AnswerContainer>
        {answers.map((answer, index) => (
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
        ))}
      </AnswerContainer>
      <SubmitButton
        onClick={() => onAnswersSubmit(answers)}
        disabled={!numOfSelectedAnswers}
      >
        Submit Answer
      </SubmitButton>
    </>
  );
};

SingleAnswer.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswersSubmit: PropTypes.func.isRequired,
};

export default SingleAnswer;
