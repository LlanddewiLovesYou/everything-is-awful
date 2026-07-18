import Switch from "react-switch";

import "./Navbar.scss";

interface Props {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  actionPlan: string[];
  setIsActionPlanOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({
  setIsDarkMode,
  darkMode,
  actionPlan,
  setIsActionPlanOpen,
}) => {
  return (
    <div className="Navbar">
      <div>Everything Is Awful... </div>
      <div className="navbar-right">
        {actionPlan.length > 0 && (
          <button onClick={() => setIsActionPlanOpen((open) => !open)}>
            Action Plan
          </button>
        )}
        <div className="toggle">
          ☀️
          <Switch
            onChange={() => {
              setIsDarkMode(!darkMode);
              window.localStorage.setItem("EIA-darkMode", String(!darkMode));
            }}
            checked={darkMode}
            offColor="#000"
            offHandleColor="#888"
            onHandleColor="#888"
            onColor="#fff"
            checkedIcon={false}
            uncheckedIcon={false}
          />
          🌛
        </div>
      </div>
    </div>
  );
};
