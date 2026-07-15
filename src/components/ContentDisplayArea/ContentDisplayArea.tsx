import React, { useState } from "react";
import { Question } from "../Question/Question";
import "./ContentDisplayArea.scss";

interface Props {
  setActionPlan: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ContentDisplayArea: React.FC<Props> = ({ setActionPlan }) => {
  const [question, setQuestion] = useState(0);
  return (
    <div className="ContentDisplayArea">
      <Question
        question={question}
        setQuestion={setQuestion}
        setActionPlan={setActionPlan}
      />
    </div>
  );
};
