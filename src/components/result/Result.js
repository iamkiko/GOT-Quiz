import React from "react";
import PropTypes from "prop-types";
import { useResult } from "../../hooks/useResult";
import {
  Image,
  ResultContainer,
  ResultInfo,
  ResultsTitle,
  StartButton,
} from "../styles";

const Result = ({ score, restart }) => {
  const [result, loading] = useResult();
  let percentage = Math.floor((score / 20) * 100);
  const results = result.results;

  // Can be refactored in future
  const getFinalResult = (results, percentage) => {
    if (percentage < 34) {
      const item = results?.filter((element) => element.r_id === 1);

      return item?.map((e) => (
        <ResultContainer key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </ResultContainer>
      ));
    } else if (percentage > 67) {
      const item = results?.filter((element) => element.r_id === 3);

      return item?.map((e) => (
        <ResultContainer key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </ResultContainer>
      ));
    } else {
      const item = results?.filter((element) => element.r_id === 2);

      return item?.map((e) => (
        <ResultContainer key={e?.r_id}>
          <Image src={e?.img} alt={e?.title} />
          <ResultInfo>
            <strong>{e?.title}</strong>
          </ResultInfo>
          <ResultInfo>{e?.message}</ResultInfo>
        </ResultContainer>
      ));
    }
  };
  return (
    <>
      {loading ? (
        <ResultContainer>Loading</ResultContainer>
      ) : (
        <>
          <ResultsTitle>Quiz Results</ResultsTitle>
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

Result.propTypes = {
  restart: PropTypes.func,
  score: PropTypes.number,
};
export default Result;
