import React, { useState, useEffect, useContext } from "react";
import { GlobeConfig, ThemeContext } from "../context";

function ThemeProvider({ children }) {
  const { toggleConfig } = useContext(GlobeConfig);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");

    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
