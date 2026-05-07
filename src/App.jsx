import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="card">
        <h1>Theme Management App</h1>

        <p>
          Current Theme:
          <strong> {theme.toUpperCase()}</strong>
        </p>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <div className="links">
          <h2>Vite Social Links</h2>

          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Vite Official Website
          </a>

          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://twitter.com/vite_js"
            target="_blank"
            rel="noreferrer"
          >
            Twitter / X
          </a>

          <a
            href="https://discord.gg/vite"
            target="_blank"
            rel="noreferrer"
          >
            Discord Community
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;