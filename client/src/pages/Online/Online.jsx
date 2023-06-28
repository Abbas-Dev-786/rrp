import { useEffect, useState } from "react";

import Controls from "../../components/Controls/Controls";
import Move from "../../components/Move/Move";
import Score from "../../components/Score/Score";
import GameContainer from "../../components/GameContainer/GameContainer";
import Board from "../../components/Board/Board";
import Result from "../../components/Result/Result";
import Waiting from "../../components/Waiting/Waiting";

import { socket } from "../../socket";
import gameLogic from "../../gameLogic";
import styles from "./styles.module.css";

// const OPTIONS = ["rock", "paper", "scissors"];

const Online = () => {
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [playerMove, setPlayerMove] = useState();
  const [computerMove, setComputerMove] = useState();
  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);

  const [waiting, setWaiting] = useState(true);
  //eslint-disable-next-line
  const [anchor, setAnchor] = useState("");

  const calculateScore = () => {
    const result = gameLogic(playerMove, computerMove);

    if (result === "player1") {
      setResult("win");
      setP1Score((prev) => prev + 1);
    } else if (result === "player2") {
      setResult("lose");
      setP2Score((prev) => prev + 1);
    } else {
      setResult("test");
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

    socket.emit("move", { player: socket.id, move: value });

    socket.on("move", (moves) => {
      moves.forEach((move) => {
        move.player === socket.id
          ? setPlayerMove(move.move)
          : setComputerMove(move.move);
      });
    });
  };

  useEffect(() => {
    socket.connect();
    socket.emit("init:stranger");

    socket.on("fetch", (waiting) => {
      setWaiting(waiting);
    });

    socket.on("startGame", (anchor) => {
      setAnchor(anchor);
    });

    socket.on("disconnect", () => {
      alert("user disconnected");
    });
  }, []);

  useEffect(() => {
    checkWin();
    calculateScore(playerMove, computerMove);

    //eslint-disable-next-line
  }, [computerMove]);

  useEffect(() => {
    let interval;
    if (result) {
      interval = setInterval(() => {
        setPlayerMove();
        setComputerMove();
        setResult(null);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [result]);

  return (
    <GameContainer>
      <Score p1Score={p1Score} p2Score={p2Score} />
      <div className={styles.action_container}>
        {!playerMove && waiting ? (
          <Move option={playerMove} direction="left" />
        ) : (
          <Waiting type="wait-me" />
        )}
        {!computerMove && waiting ? (
          <Move option={computerMove} direction="right" />
        ) : (
          <Waiting type="wait-op" />
        )}
      </div>
      {result && <Result resultText={result} />}
      {waiting && <Waiting type="fetch" />}
      {winner && <Board result={winner} />}
      <div></div>
      <div></div>
      {!winner && !waiting && !playerMove && (
        <Controls move={playerMove} handleClick={handleClick} />
      )}
    </GameContainer>
  );
};

export default Online;
