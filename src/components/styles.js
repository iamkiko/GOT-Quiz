import styled from "styled-components";

import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');

  body {
    background: linear-gradient(to right, #eeeff6, #f1fcfd);
    font-family: 'Cinzel', serif;
  }
`;
export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 1500px;
  color: #e6ac00;
  background-color: #13433e;
  font-size: calc(24px + 1vmin);
  box-shadow: 0px 13px 24px 1px rgba(130, 166, 194, 1);
`;

export const StartTitle = styled.h2`
  margin: 0;
  -webkit-text-stroke: 0.5px #664c00;
`;

export const StartButton = styled.button`
  font-family: "Cinzel", serif;
  background-color: #26867d;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #3acabb;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  line-height: 200%;
  text-align: center;
  padding: 12px;
  box-shadow: 0px 0px 287px 23px rgba(188, 245, 229, 1);
  &:hover,
  &:active {
    background-color: #3acabb;
    box-shadow: 0px 0px 287px 3px rgba(188, 245, 229, 1);
  }
`;

export const QuestionTitle = styled.h4`
  text-align: center;
  margin-bottom: 0;
`;

export const Image = styled.img`
  max-width: 600px;
  margin: 16px 0;
  border-radius: 4px;
  box-shadow: 0px 3px 12px 1px #fff2cc;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AnswerOption = styled.button`
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 4px;
  padding: 4px;
  border: 1px solid #bebac7;
  color: white;
  background-color: #fff;
  border-radius: 6px;

  color: #2a1e59;
  line-height: 1.75em;

  &:hover,
  &:active {
    background-color: #fff2cc;
    font-weight: 600;
  }
`;

export const AnswerColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;
  margin-bottom: 12px;
`;

export const SubmitButton = styled.button`
  font-family: "Cinzel", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  padding: 6px 12px;
  border: 1px solid #959594;
  background-color: #f9f8f7;
  border-radius: 6px;

  line-height: 1.75em;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: #f9f8f7;
        `
      : css`
          font-weight: 600;
          background-color: #26867d;
          color: #f9f8f7;

          &:hover,
          &:active {
            cursor: pointer;
            background-color: #3acabb;
            font-weight: 600;
          }
        `}
`;

export const AnswerType = styled.p`
  font-size: 12px;
  font-style: italic;
`;
