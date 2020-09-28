import React, { useState, useEffect } from "react";

const QUIZ_URL = "https://proto.io/en/jobs/candidate-questions/quiz.json";

const Question = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    fetch(QUIZ_URL)
      .then((res) => res.json())
      .then((data) => setQuizData(data))
      .catch((err) => console.error(err));
  }, []);

  const questions = quizData?.questions;

  //   const renderQuestions = questions?.map((q) => q.title);
  //   console.log("renderQuestions", renderQuestions);

  // return data from json
  // logic for answers
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <h2>{quizData.title}</h2>
      <h3>{quizData.description}</h3>
      {!!questions ? (
        <>
          <div>{questions[currentQuestion].title}</div>{" "}
          <div>{questions[currentQuestion].q_id}</div>{" "}
          {console.log("type of", typeof questions[3].correct_answer)}
          {/* map here through questions of current question to render answers and then a button beneath */}
          {/* <div>
            {if(!!questions[currentQuestion].possible_answers) {
              questions[currentQuestion]?.possible_answers?.map((option) => (
                <button>{option.caption}</button>
              ))
            } else if(!!questions[currentQuestion].correct_answer.length > 1)
              <div>
                <button>True</button>
                <button>False</button>
              </div>
            )}
          </div> */}
        </>
      ) : (
        <p>No</p>
      )}
      {/* {!!questions &&
        questions.map((q) => {
          return (
            <>
              <div>{q.title}</div>
              <div>Question #{q.q_id}</div>
              <div>
                {!!q.possible_answers ? (
                  q?.possible_answers?.map((option) => (
                    <button>{option.caption}</button>
                  ))
                ) : (
                  <div>
                    <button>True</button>
                    <button>False</button>
                  </div>
                )}
              </div>
            </>
          );
        })} */}
    </>
  );
};

export default Question;
