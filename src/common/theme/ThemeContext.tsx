import { createContext } from "react";

export type ThemeVerstion = "dark" | "light";

export interface Theme {
  foreground: string;
  background: string;
  themeVersion: ThemeVerstion;
}

type Themes = {
  light: Theme;
  dark: Theme;
};

export const themes: Themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    themeVersion: "light",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    themeVersion: "dark",
  },
};

export interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

// default values that will be used if no provider was created above a component that uses useContext
export const ThemeContext = createContext<Context>({
  theme: themes.dark,
  toggleTheme: () => {},
});
