import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        background: "transparent",
        color: "var(--text)",
        border: "1px solid var(--muted)",
        cursor: "pointer",
        fontWeight: 600
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
