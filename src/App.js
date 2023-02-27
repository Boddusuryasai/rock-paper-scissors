import React, { useState } from 'react';
import "./App.css"
function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);

  const choices = ["rock", "paper", "scissors"];

  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  }

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner("Tie");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      setWinner("Player");
    } else {
      setWinner("Computer");
    }
  }

  return (
    <div className='main'>
      <h1>Rock Paper Scissors</h1>
      <div>
        <button  onClick={() => handlePlayerChoice("rock")}>
          <img src='https://res.cloudinary.com/dybiiddob/image/upload/v1677482218/Victory_hand_gesture_-_480x720_ds7rcd.png' alt=''></img>
        </button>
        <button onClick={() => handlePlayerChoice("paper")}>
          <img src='https://res.cloudinary.com/dybiiddob/image/upload/v1677482501/Fist_hand_gesture_-_480x720_baq24x.png' alt=''></img>
        </button>
        <button onClick={() => handlePlayerChoice("scissors")}>
          <img src='https://res.cloudinary.com/dybiiddob/image/upload/v1677482469/Open_Hand_gesture_-_480x720_lapbrx.png' alt=''></img>
        </button>
      </div>
      <div>
        {playerChoice && (
          <>
            <p>You chose: {playerChoice}</p>
            <p>Computer chose: {computerChoice}</p>
            <h3>{winner ? `${winner} wins!` : "Make your choice."}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
