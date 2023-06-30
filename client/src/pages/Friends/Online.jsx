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
import JoinLink from "../../components/JoinLink";
import { useParams } from "react-router-dom";

const Online = () => {
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [myMove, setMyMove] = useState();
  const [oppMove, setOppoMove] = useState();
  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);

  const [waiting, setWaiting] = useState(true);
  //eslint-disable-next-line
  const [anchor, setAnchor] = useState("");

  const { roomid } = useParams();

  const calculateScore = () => {
    const result = gameLogic(myMove, oppMove);

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
    setMyMove(value);

    socket.emit("move", { player: socket.id, move: value });

    socket.on("move", (moves) => {
      moves.forEach((move) => {
        move.player === socket.id
          ? setMyMove(move.move)
          : setOppoMove(move.move);
      });
    });
  };

  useEffect(() => {
    socket.connect();
    socket.emit("init:friend", roomid);

    socket.on("fetch", (waiting) => {
      setWaiting(waiting);
    });

    socket.on("startGame", (anchor) => {
      setAnchor(anchor);
    });

    socket.on("disconnect", () => {
      alert("user disconnected");
    });
  }, [roomid]);

  useEffect(() => {
    checkWin();
    calculateScore(myMove, oppMove);

    //eslint-disable-next-line
  }, [oppMove]);

  useEffect(() => {
    let interval;
    if (result) {
      interval = setInterval(() => {
        setMyMove();
        setOppoMove();
        setResult(null);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [result]);

  return (
    <GameContainer>
      <Score p1Score={p1Score} p2Score={p2Score} />
      {!waiting && !winner && (
        <div className={styles.action_container}>
          {myMove ? (
            <Move option={myMove} direction="left" />
          ) : (
            <Waiting type="wait-me" />
          )}
          {oppMove ? (
            <Move option={oppMove} direction="right" />
          ) : (
            <Waiting type="wait-op" />
          )}
        </div>
      )}
      {result && <Result resultText={result} />}
      {waiting && <JoinLink roomID={roomid} />}
      {waiting && <Waiting type="fetch" />}
      {winner && <Board result={winner} />}
      <div></div>
      <div></div>
      {!winner && !waiting && !myMove && (
        <Controls move={myMove} handleClick={handleClick} />
      )}
    </GameContainer>
  );
};

export default Online;
