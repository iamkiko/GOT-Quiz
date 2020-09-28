import React, { useState } from "react";
import Start from "./start/Start";
// import Question from "./question/Question";
// import Result from "./result/Result";

const Quiz = ({ questions, title, startMessage, restart }) => {
  const [displaySection, setDisplaySection] = useState("start"); // which section of app to render
  const [questionIndex, setQuestionIndex] = useState(0); // index of question to show
  const [results, setResults] = useState([]); // store the results

  // start the quiz
  const handleQuizInitialization = () => {
    setDisplaySection("questions");
  };

  // handling submission of answers and figuring out which type they are
  const handleAnswerSubmission = (answers) => {
    let question = questions[questionIndex];
    let suffix = question.question_type === "TRUE_FALSE" ? "Boolean" : "";

    let answerResult = answers.every(
      (answer) => answer["correct" + suffix] === answer["selected" + suffix]
    );

    setResults([...results, answerResult]);

    // Keep showing questions until quiz ends
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setDisplaySection("results");
    }
  };

  const calculateResult = (results) => {
    let totalCorrectAnswers = results.filter((answer) => answer === true)
      .length;
    return totalCorrectAnswers;
  };
  return (
    <>
      <Start onStartQuiz={handleQuizInitialization} />
      {/* {displaySection === "start" ? (
        <Start onStartQuiz={handleQuizInitialization} />
      ) 
      : displaySection === "questions" ? (
        <Question
          key={questionIndex}
          question={questions[questionIndex]}
          onAnswersSubmit={handleAnswerSubmission}
        />
      ) : (
        <Result restart={restart} {...calculateResult(results)} />
      )} */}
    </>
  );
};

export default Quiz;
