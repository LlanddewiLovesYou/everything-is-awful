import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ActionPlan } from "./components/ActionPlan/ActionPlan";
import { ContentDisplayArea } from "./components/ContentDisplayArea/ContentDisplayArea";
import "./App.css";

function App() {
  if (window.localStorage.getItem("EIA-darkMode") === null) {
    window.localStorage.setItem("EIA-darkMode", "false");
  }
  const [isDarkMode, setIsDarkMode] = useState(
    window.localStorage.getItem("EIA-darkMode") === "true" || false,
  );
  const [actionPlan, setActionPlan] = useState([] as string[]);
  const [isActionPlanOpen, setIsActionPlanOpen] = useState(false);
  return (
    <>
      <div className={"App" + (isDarkMode ? " dark" : "")}>
        <Navbar
          setIsDarkMode={setIsDarkMode}
          darkMode={isDarkMode}
          actionPlan={actionPlan}
          setIsActionPlanOpen={setIsActionPlanOpen}
        />
        {isActionPlanOpen && (
          <ActionPlan
            actionPlan={actionPlan}
            setIsActionPlanOpen={setIsActionPlanOpen}
          />
        )}
        <ContentDisplayArea setActionPlan={setActionPlan} />
      </div>
    </>
  );
}

export default App;
