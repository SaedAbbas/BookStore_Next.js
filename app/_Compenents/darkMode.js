"use client";
import { useState, useEffect } from "react";

export function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); //documentElement === html element
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)} className="cursor-pointer">
        {
            isDarkMode ? (<span className="text-2xl">🌙</span>):(<span className="text-2xl">☀️</span>)
        }
        
        
      </button>
    </div>
  );
}
