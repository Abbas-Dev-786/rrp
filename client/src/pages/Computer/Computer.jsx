import { useEffect, useState } from "react";

import Controls from "../../components/Controls/Controls";
import Move from "../../components/Move/Move";
import Score from "../../components/Score/Score";
import GameContainer from "../../components/GameContainer/GameContainer";
import Board from "../../components/Board/Board";
import Result from "../../components/Result/Result";

import gameLogic from "../../gameLogic";
import styles from "./styles.module.css";

const OPTIONS = ["rock", "paper", "scissors"];

const Computer = () => {
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [playerMove, setPlayerMove] = useState();
  const [computerMove, setComputerMove] = useState();
  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);

  const createComputerMove = () => {
    const randomChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    setComputerMove(randomChoice);
  };

  const calculateScore = () => {
    const result = gameLogic(playerMove, computerMove);

    if (result === "player1") {
      setResult("win");
      setP1Score((prev) => prev + 1);
    } else if (result === "player2") {
      setResult("lose");
      setP2Score((prev) => prev + 1);
    }
  };

  const checkWin = () => {
    if (p1Score === 3) {
      setWinner("win");
    } else if (p2Score === 3) {
      setWinner("lose");
    }
  };

  const handleClick = (value) => {
    setPlayerMove(value);
    createComputerMove();
  };

  useEffect(() => {
    checkWin();
    calculateScore(playerMove, computerMove);

    const interval = setInterval(() => {
      setPlayerMove();
      setComputerMove();
      setResult(null);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

    //eslint-disable-next-line
  }, [playerMove, computerMove]);

  // useEffect(() => {
  //   winner && alert(winner);
  // }, [winner]);

  return (
    <GameContainer>
      <Score p1Score={p1Score} p2Score={p2Score} />
      <div className={styles.action_container}>
        <Move option={playerMove} direction="left" />
        <Move option={computerMove} direction="right" />
      </div>
      {result && <Result resultText={result} />}

      {winner && <Board result={winner} />}
      <div></div>
      <div></div>
      {!winner && !playerMove && (
        <Controls move={playerMove} handleClick={handleClick} />
      )}
    </GameContainer>
  );
};

export default Computer;
