import React, { useState } from "react";

const Quiz = ({ questions, title, startMessage, restart }) => {
  const [view, setView] = useState("start"); // which part of app to render
  const [displaySection, setDisplaySection] = useState("start"); // which section of app to render
  const [questionIndex, setQuestionIndex] = useState(0); // index of question to show
  const [results, setResults] = useState([]); // store the results

  // const questions = quizData?.questions;
  console.log("questions", questions);
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
      setView("results");
    }
  };

  const calculateResult = (results) => {
    let totalCorrectAnswers = results.filter((answer) => answer === true)
      .length;
    return totalCorrectAnswers;
  };
  return (
    <>
      {view === "intro" ? (
        <Intro
          title={title}
          introMessage={startMessage}
          onStartQuiz={handleQuizInitialization}
        />
      ) : view === "questions" ? (
        <Question
          key={questionIndex}
          question={questions[questionIndex]}
          onAnswersSubmit={handleAnswerSubmission}
        />
      ) : (
        <Result restart={restart} {...calculateResult(results)} />
      )}
    </>
  );
};

export default Quiz;
