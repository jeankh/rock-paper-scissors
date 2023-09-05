import React, { useState } from "react";
import Choice from "./Choice";
import Header from "./Header";
import "./game.css";
import Result from "./Result";

function Game() {
  const choices = ["rock", "paper", "scissors"];
  const [isChoosed, setIsChoosed] = useState(false);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);

  const toggleChoice = () => {
    setIsChoosed(!isChoosed);
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };
  const determineWinner = (choice1, choice2) => {
    const choices = ["rock", "paper", "scissors"];
    const index1 = choices.indexOf(choice1);
    const index2 = choices.indexOf(choice2);

    if (index1 === index2) {
      return 0;
    }

    return (index1 - index2 + 3) % 3 === 1 ? 1 : -1;
  };

  const handleUserChoise = (choice) => {
    setUserChoice(choice);
    toggleChoice();
    const computerChoice = generateComputerChoice();
    setComputerChoice(computerChoice);
    handleWinner(choice, computerChoice);
  };

  const handleWinner = (choice, computerChoice) => {
    const winner = determineWinner(choice, computerChoice);
    if (winner === 1) {
      setUserScore(userScore + 1);
      setResult("You win");
    } else if (winner === -1) {
      setResult("You lose");
    } else {
      setResult("It's a tie!");
    }
  };
  const handlePlayAgain = () => {
    setComputerChoice("");
    setUserChoice("");
    setResult("");
    setIsChoosed(!isChoosed);
  };

  return (
    <div className={`game ${isChoosed ? "result-visible" : "choice-visible"}`}>
      <Header score={userScore} />
      {isChoosed && computerChoice ? (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          onPlayAgain={handlePlayAgain}
        />
      ) : (
        <Choice handleChoise={handleUserChoise} />
      )}
    </div>
  );
}

export default Game;
