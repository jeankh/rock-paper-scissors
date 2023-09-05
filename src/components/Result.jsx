import React, { useEffect, useState } from "react";
import "./result.css";
import paper from "../assets/icon-paper.svg";
import rock from "../assets/icon-rock.svg";
import scissors from "../assets/icon-scissors.svg";
import { stall } from "../utils";

function Result({ userChoice, computerChoice, result, onPlayAgain }) {
  const styles = {
    paper: "pick is-paper",
    rock: "pick is-rock",
    scissors: "pick is-scissors",
  };
  const svg = { paper: paper, rock: rock, scissors: scissors };

  const [showComputerChoice, setShowComputerChoice] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  const animateAIChoice = async () => {
    await stall(1000);
    setShowComputerChoice(true);
    await stall(1000);
    setShowWinner(true);
  };

  useEffect(() => {
    animateAIChoice();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="result">
      <div className="header-titles">
        <h1>you picked</h1>
        <h1>the house picked</h1>
      </div>
      <div className="picks ">
        <div className={styles[userChoice]}>
          <img src={svg[userChoice]} alt={"svg " + userChoice} />
        </div>
        {showComputerChoice ? (
          <div className={styles[computerChoice]}>
            <img src={svg[computerChoice]} alt={"svg " + computerChoice} />
          </div>
        ) : (
          <div className="empty"></div>
        )}
      </div>
      <div className={`winner ${showWinner ? "" : "hidden"}`}>
        <h1>{result}</h1>
        <button onClick={() => onPlayAgain()}>play again</button>
      </div>
    </div>
  );
}

export default Result;
