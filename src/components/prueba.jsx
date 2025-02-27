import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useContexto } from "./contexto"
import "./Header.css"

export function Header() {
  const { dispatch } = useContexto()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Efecto para sincronizar el estado del tema con la clase en el documento
  useEffect(() => {
    // Verificar si el tema actual es oscuro
    const isDark = document.body.classList.contains("dark-theme")
    setIsDarkMode(isDark)
  }, [])

  const toggleTheme = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    // Actualizar la clase 'dark-theme' en el body
    if (newMode) {
      document.body.classList.add("dark-theme")
      dispatch({ type: "CHANGE", payload: "dark" })
    } else {
      document.body.classList.remove("dark-theme")
      dispatch({ type: "CHANGE", payload: "light" })
    }
  }

  // Rutas de navegación
  const routes = [
    { to: "/", text: "Home" },
    { to: "/contact", text: "Contact" },
    { to: "/favs", text: "Favs" },
  ]

  return (
    <nav className="header-nav">
      <ul className="nav-links">
        {routes.map((route) => (
          <li key={route.to}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "#747bff",
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        className="theme-toggle-button"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg
            className="sun-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        ) : (
          <svg
            className="moon-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        )}
      </button>
    </nav>
  )
}