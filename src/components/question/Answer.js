import React from "react";
import { AnswerOption, AnswerColumn } from "../styles";

const Answer = ({ index, children, onClick }) => {
  return (
    <AnswerColumn>
      <AnswerOption onClick={() => onClick(index)}>{children}</AnswerOption>
    </AnswerColumn>
  );
};

export default Answer;
