// import { element } from "prop-types";
import React from "react";
import { useResult } from "../../hooks/useResult";
import { Image, ResultInfo, StartButton, StartTitle } from "../styles";

const Result = ({ score, restart }) => {
  const [result, loading] = useResult();
  let percentage = Math.floor((score / 20) * 100);
  const results = result.results;

  const getFinalResult = (results, percentage) => {
    if (percentage < 34) {
      const item = results?.filter((element) => element.r_id === 1);

      return item?.map((e) => (
        <>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </>
      ));
    } else if (percentage > 67) {
      const item = results?.filter((element) => element.r_id === 3);

      return item?.map((e) => (
        <>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </>
      ));
    } else {
      const item = results?.filter((element) => element.r_id === 2);

      return item?.map((e) => (
        <>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </>
      ));
    }
  };
  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <StartTitle>Quiz Results</StartTitle>
          <ResultInfo>
            {" "}
            You scored <strong>{percentage}% </strong>. Your final score was{" "}
            <strong>{score}</strong> out of <strong>20.</strong>
          </ResultInfo>
          {getFinalResult(results, percentage)}

          <StartButton onClick={restart}>Try Again</StartButton>
        </>
      )}
    </>
  );
};

export default Result;
