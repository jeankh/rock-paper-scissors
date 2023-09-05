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
        <div className="overlay" >
          <Rules toggleRules={toggleRules} />
        </div>
      )}
    </div>
  );
}

export default App;
