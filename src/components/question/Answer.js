import React from "react";
import { AnswerOption, AnswerColumn, Radio } from "../styles";

const Answer = ({ selected, index, children, onClick }) => {
  return (
    <AnswerColumn>
      <AnswerOption onClick={() => onClick(index)}>{children}</AnswerOption>
    </AnswerColumn>
  );
};

export default Answer;
