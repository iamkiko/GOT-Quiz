import React, { useState } from "react";
import Start from "./start/Start";
import Question from "./question/Question";
import Result from "./result/Result";
import { GlobalStyle, QuizContainer } from "./styles";

const Quiz = ({ questions }) => {
  const [displaySection, setDisplaySection] = useState("start"); // which section of app to render
  const [questionIndex, setQuestionIndex] = useState(0); // index of question to show
  const [score, setScore] = useState(0); // store the score

  // start the quiz
  const handleQuizInitialization = () => {
    setDisplaySection("questions");
    setScore(0);
  };

  // handling submission of answers and figuring out which type they are
  const handleAnswerSubmission = (answers) => {
    let question = questions[questionIndex];
    let correctAnswer = question.correct_answer;
    let points = question.points;

    // need to update this to figure out if it's correct or not
    // check a_id vs correct answer
    answers.filter((answer) => {
      if (answer.selected === true && answer.a_id === correctAnswer) {
        setScore(score + points);
      }
    });

    // Keep showing questions until quiz ends & reset in case user opts to start
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setDisplaySection("results");
      setQuestionIndex(0);
    }
  };

  return (
    <QuizContainer>
      <GlobalStyle />
      {displaySection === "start" ? (
        <Start onStartQuiz={handleQuizInitialization} />
      ) : displaySection === "questions" ? (
        <Question
          key={questionIndex}
          question={questions[questionIndex]}
          onAnswersSubmit={handleAnswerSubmission}
          score={score}
          setScore={setScore}
        />
      ) : (
        <Result restart={() => setDisplaySection("start")} score={score} />
      )}
    </QuizContainer>
  );
};

export default Quiz;
