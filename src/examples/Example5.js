import { useState, createContext } from "react";
import { Paragraph } from "../utils/Paragraph";

export const ThemeContext = createContext();

export function Example5() {
  const [theme, setTheme] = useState("blue");

  const toggleTheme = () => {
    setTheme(theme === "blue" ? "red" : "blue");
  };
  return (
    <>
      <h3>--- Context ---</h3>
      <ThemeContext.Provider value={theme}>
        <Paragraph />
        <button className="btn btn-primary" onClick={toggleTheme}>Toggle</button>
      </ThemeContext.Provider>
    </>
  );
}
