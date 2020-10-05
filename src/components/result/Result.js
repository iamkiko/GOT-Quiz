// import { element } from "prop-types";
import React from "react";
import { useResult } from "../../hooks/useResult";
import { Image, ResultInfo, StartButton, StartTitle } from "../styles";

const Result = ({ score, restart }) => {
  const [result, loading] = useResult();
  let percentage = Math.floor((score / 20) * 100);
  const results = result.results;

  // Hard coded, could probably refactor
  const getFinalResult = (results, percentage) => {
    if (percentage < 34) {
      const item = results?.filter((element) => element.r_id === 1);

      return item?.map((e) => (
        <div key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </div>
      ));
    } else if (percentage > 67) {
      const item = results?.filter((element) => element.r_id === 3);

      return item?.map((e) => (
        <div key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </div>
      ));
    } else {
      const item = results?.filter((element) => element.r_id === 2);

      return item?.map((e) => (
        <div key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </div>
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
