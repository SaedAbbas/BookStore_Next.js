"use client";
import { useState, useEffect } from "react";
import { FaMoon , FaRegMoon } from "react-icons/fa6";

export function DarkMode({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="absolute top-0 right-4">
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {
            isDarkMode ? (<span className="text-2xl absolute top-4 right-4">🌙</span>):(<span className="text-2xl absolute top-4 right-4">☀️</span>)
        }
        
        
      </button>
    </div>
  );
}
