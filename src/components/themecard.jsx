function ThemeCard({ theme, toggleTheme }) {
  return (
    <div className="card">
      <h1>Theme Management App</h1>

      <p>
        Current Theme: <strong>{theme.toUpperCase()}</strong>
      </p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

