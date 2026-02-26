"use client";
import { THEMES } from "@/lib/theme";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ themeId: initialThemeId, previewTheme, children }) {
  const [themeId, setThemeId] = useState(initialThemeId);
  
  useEffect(() => {
    if (previewTheme) {
      setThemeId(previewTheme);
      sessionStorage.setItem("previewTheme", previewTheme);
    } else {
      const stored = sessionStorage.getItem("previewTheme");
      if (stored) {
        setThemeId(stored);
      }
    }
  }, [previewTheme]);

  const theme = THEMES[themeId] || THEMES.time;

  return (
    <ThemeContext.Provider value={{ themeId, theme, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}


