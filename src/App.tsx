import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ContentDisplayArea } from "./components/ContentDisplayArea/ContentDisplayArea";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div className={"App" + (isDarkMode ? " dark" : "")}>
        <Navbar setIsDarkMode={setIsDarkMode} darkMode={isDarkMode} />
        <ContentDisplayArea />
      </div>
    </>
  );
}

export default App;
