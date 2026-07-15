import React, { useState } from "react";
import { Question } from "../Question/Question";
import "./ContentDisplayArea.scss";

export const ContentDisplayArea: React.FC = () => {
  const [question, setQuestion] = useState(0);
  return (
    <div className="ContentDisplayArea">
      <Question question={question} setQuestion={setQuestion} />
    </div>
  );
};
