import React, { useState } from "react";
import { isEqual, markSelected } from "../../../utils/utils";
import Answer from "../Answer";
import {
  AnswerContainer,
  AnswerType,
  Image,
  QuestionTitle,
  SubmitButton,
} from "../../styles";

const MultiAnswer = ({ question, onAnswersSubmit, score, setScore }) => {
  const [numOfSelectedAnswers, setNumOfSelectedAnswers] = useState(0); // how many options selected
  const [answers, setAnswers] = useState(
    markSelected(question.possible_answers)
  );
  const [multipleAnswers, setMultipleAnswers] = useState([]);
  const correctAnswerArr = question.correct_answer;
  const points = question.points;
  const comparison = isEqual(correctAnswerArr, multipleAnswers);

  const handleAnswerClick = (answerIndex) => {
    let clickedAnswer = answers[answerIndex];
    let answerId = clickedAnswer.a_id;
    // upon clicking, need to get the a_id of option selected
    if (clickedAnswer.selected === false) {
      // push new answer (i.e. what was just selected) to a temp array
      // setMultipleAnswers to the temp array // update state to this for comparison later
      setMultipleAnswers((tempArr) =>
        tempArr.includes(answerId) ? [...tempArr] : [...tempArr, answerId]
      );
      setAnswers(
        answers.map((answer, index) => {
          return answerIndex === index
            ? {
                ...clickedAnswer,
                selected: true,
              }
            : answer;
        })
      );
      setNumOfSelectedAnswers(numOfSelectedAnswers + 1);
    } else {
      setMultipleAnswers((tempArr) =>
        tempArr.filter((selection) => selection !== answerId)
      );
      setAnswers(
        answers.map((answer, index) => {
          return answerIndex === index
            ? {
                ...clickedAnswer,
                selected: false,
              }
            : answer;
        })
      );
      setNumOfSelectedAnswers(numOfSelectedAnswers - 1);
    }
  };

  // helper function to execute logic of if all correct & updating score
  const onSubmitMulti = () => {
    if (comparison === true) {
      setScore(score + points);
      onAnswersSubmit(answers);
    } else {
      onAnswersSubmit(answers);
    }
  };

  return (
    <>
      <QuestionTitle>{question.title}</QuestionTitle>
      <AnswerType>
        Please select multiple answers - they all need to be correct (no
        pressure!)
      </AnswerType>
      <Image src={question.img} alt={question.title} />
      <AnswerContainer>
        {answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            type={question.question_type}
            onClick={handleAnswerClick}
          >
            {answer?.caption}
          </Answer>
        ))}
      </AnswerContainer>
      <SubmitButton
        onClick={() => onSubmitMulti()}
        disabled={!numOfSelectedAnswers}
      >
        Submit Answer
      </SubmitButton>
    </>
  );
};
export default MultiAnswer;
