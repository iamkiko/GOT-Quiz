import { useState, useEffect } from "react";
import { getQuiz } from "../api/getQuiz";

const useQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(true);

  const loadQuiz = async () => {
    const quizObj = await getQuiz();

    setQuiz(quizObj);
    setLoading(false);
  };

  useEffect(() => {
    loadQuiz();
  }, []);
  // console.log("quiz", quiz); // this returns the whole quiz for us to get the title and show on start page
  return [quiz, loading];
};

export { useQuiz };
