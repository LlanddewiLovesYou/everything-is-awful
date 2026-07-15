import React, { useState } from "react";
import { selfCareQuestions } from "../../data";
import "./Question.scss";

interface Props {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
  setActionPlan: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Question: React.FC<Props> = ({
  question,
  setQuestion,
  setActionPlan,
}) => {
  const [answeredNo, setAnsweredNo] = useState(false);
  const currentQuestion = selfCareQuestions[question];

  const isLastQuestion = question === selfCareQuestions.length - 1;

  return (
    <div className="Question">
      <p>{currentQuestion.question}</p>
      <div>
        {currentQuestion.buttons.yes && (
          <button
            onClick={() => setQuestion((prev) => prev + 1)}
            disabled={answeredNo}
            className="yes"
          >
            Yes
          </button>
        )}
        {currentQuestion.buttons.no && (
          <button
            className="no"
            onClick={() => {
              setAnsweredNo(true);
              setActionPlan((prev) => [...prev, currentQuestion.intervention]);
            }}
          >
            No
          </button>
        )}
      </div>
      {answeredNo && (
        <>
          <p>{currentQuestion.intervention}</p>
          <p>Still awful?</p>
          <button
            onClick={() => {
              setAnsweredNo(false);
              setQuestion((prev) => prev + 1);
            }}
          >
            Continue...
          </button>
        </>
      )}
      {currentQuestion.override && (
        <>
          <p>{currentQuestion.intervention}</p>
        </>
      )}
      {currentQuestion.buttons.continue && (
        <button
          onClick={() => {
            setAnsweredNo(false);
            setQuestion((prev) => prev + 1);
          }}
        >
          Continue...
        </button>
      )}
      {isLastQuestion && (
        <button
          onClick={() => {
            setAnsweredNo(false);
            setQuestion(0);
          }}
        >
          Restart...
        </button>
      )}
    </div>
  );
};
