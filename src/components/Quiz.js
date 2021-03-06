import React, { useState } from "react";
import PropTypes from "prop-types";
import Start from "./start/Start";
import Question from "./question/Question";
import Result from "./result/Result";
import { SolutionContext } from "./SolutionContext";
import { GlobalStyle, QuizContainer } from "./styles";

const Quiz = ({ questions }) => {
  const [displaySection, setDisplaySection] = useState("start"); // which section of app to render
  const [questionIndex, setQuestionIndex] = useState(0); // index of question to show
  const [score, setScore] = useState(0); // store the score
  const [showSolution, setShowSolution] = useState(false); // to show the correct answer upon submission

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

    // check a_id vs correct answer to update score
    answers.filter((answer) => {
      if (answer.selected === true && answer.a_id === correctAnswer) {
        setScore(score + points);
      }
      return null; // to avoid 'Expected to return a value at the end of arrow func' warning
    });

    setShowSolution(true);

    // Keep showing questions until quiz ends & reset in case user opts to start
    setTimeout(() => {
      setShowSolution(false);
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setDisplaySection("results");
        setQuestionIndex(0);
      }
    }, 3000);
  };

  return (
    <QuizContainer>
      <GlobalStyle />
      {displaySection === "start" ? (
        <Start onStartQuiz={handleQuizInitialization} />
      ) : displaySection === "questions" ? (
        <SolutionContext.Provider value={showSolution}>
          <Question
            key={questionIndex}
            question={questions[questionIndex]}
            onAnswersSubmit={handleAnswerSubmission}
            score={score}
            setScore={setScore}
          />
        </SolutionContext.Provider>
      ) : (
        <Result restart={() => setDisplaySection("start")} score={score} />
      )}
    </QuizContainer>
  );
};

Quiz.propTypes = {
  questions: PropTypes.array,
};

export default Quiz;
