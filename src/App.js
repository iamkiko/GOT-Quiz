import React, { useState } from "react";
import { useQuiz } from "./hooks/useQuiz";
import Quiz from "./components/Quiz";

const App = () => {
  const [id, setId] = useState(1); // set id for quiz
  const [quiz, loading] = useQuiz(); // helper hook for quiz
  return (
    <>
      {loading ? (
        <span>Loading, please be patient...</span>
      ) : (
        <Quiz key={id} restartQuiz={() => setId(id + 1)} {...quiz} />
      )}
    </>
  );
};

export default App;
