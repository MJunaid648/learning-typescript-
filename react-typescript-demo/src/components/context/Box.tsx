import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  const [currTheme, setCurrTheme] = useState(theme.primary);
  
  function themeChangeHandler() {
    setCurrTheme((prevTheme) => {
      if (prevTheme === theme.primary) return theme.secondary;
      else return theme.primary;
    });
  }

  return (
    <div
      style={{
        backgroundColor: currTheme.main,
        color: currTheme.text,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "8px",
      }}
    >
      <p>Box</p>
      <button onClick={themeChangeHandler}>Change Theme</button>
    </div>
  );
};

export default Box;
