import { ThemeContext, themes, Context } from "common/theme/ThemeContext";
import { ReactNode, useState } from "react";

export interface ThemeWrapperProps {
  children: ReactNode;
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [currentTheme, setCurrentTheme] = useState<Context["theme"]>(
    themes.dark
  );

  const handleSetCurrentTheme = () =>
    setCurrentTheme((prev) =>
      prev.themeVersion === "dark" ? themes.light : themes.dark
    );

  const context: Context = {
    theme: currentTheme,
    toggleTheme: handleSetCurrentTheme,
  };

  return (
    <>
      <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    </>
  );
};

export default ThemeWrapper;
