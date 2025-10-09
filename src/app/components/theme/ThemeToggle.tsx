"use client";

import { FaLaptop, FaMoon, FaSun } from "react-icons/fa";
import { Theme, useTheme } from "./ThemeProvider";
import { Component } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  const toggleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  if (!mounted) {
    return (
      <button
        className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700'
        aria-label='Loading theme'
      >
        <div className='w-5 h-5'></div>
      </button>
    );
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <FaMoon />;
      case "light":
        return <FaSun />;
      case "system":
        return <FaLaptop />;
      default:
        return <FaLaptop />;
    }
  };

  const getThemeLabel = (): string => {
    switch (theme) {
      case "dark":
        return "Switch to light mode";
      case "light":
        return "Switch to system preference";
      case "system":
        return "Switch to dark mode";
      default:
        return "Toggle theme";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-lg  dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors duration-200'
      aria-label={getThemeLabel()}
    >
      <span className='text-lg'>{getThemeIcon()}</span>
    </button>
  );
}
