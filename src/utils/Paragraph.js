import React, { useContext } from "react";
import { ThemeContext } from "../examples";

export function Paragraph() {
  const theme = useContext(ThemeContext);

  return <h1 style={{ color: theme }}>{theme}</h1>;
}
