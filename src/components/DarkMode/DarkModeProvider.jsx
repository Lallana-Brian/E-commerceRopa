import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const DarkModeProvider = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
};

export default DarkModeProvider;
