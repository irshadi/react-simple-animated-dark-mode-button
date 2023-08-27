import React from "react";
import { ThemeIconButton } from "./components/ThemeIconButton";

const Exampler = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <React.Fragment>
      <h1>Test Dark Mode: {isDarkMode ? "Dark" : "Light"}</h1>
      <ThemeIconButton
        isDarkMode={isDarkMode}
        onClick={() => setIsDarkMode((_isDarkMode) => !_isDarkMode)}
        color={{
          light: "#5628EE",
          dark: "rgb(238 177 40)",
        }}
      />
    </React.Fragment>
  );
};

export default Exampler;
