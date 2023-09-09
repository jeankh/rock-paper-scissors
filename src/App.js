import React, { useState } from "react";
import "./reset.css";
import "./app.css";
import Rules from "./components/Rules";
import Game from "./components/Game";

function App() {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="app">
      <button id="rules-btn" onClick={toggleRules}>
        Rules
      </button>
      <Game />
      {showRules && (
        <div className="overlay">
          <Rules toggleRules={toggleRules} />
        </div>
      )}
      <footer>
        <p>
          © 2023
          <a href="https://jean.khoge.fr/" target="_blank" rel="noreferrer">
            Jean KHOGE
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
