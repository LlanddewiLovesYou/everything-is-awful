import Switch from "react-switch";

import "./Navbar.scss";

interface Props {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

export const Navbar: React.FC<Props> = ({ setIsDarkMode, darkMode }) => {
  return (
    <div className="Navbar">
      <div>Everything Is Awful... </div>
      <div className="toggle">
        ☀️
        <Switch
          onChange={() => {
            setIsDarkMode(!darkMode);
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
  );
};
