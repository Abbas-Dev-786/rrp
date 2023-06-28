import PropTypes from "prop-types";

import Button from "../Button/Button";
import win_background_img from "../../assets/win_background.png";
import rock_left_hand_img from "../../assets/rock_left_hand.png";
import scissors_right_hand_img from "../../assets/scissors_right_hand.png";
import win_board_img from "../../assets/win_board.png";
import lose_board_3_img from "../../assets/lose_board_3.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Board = ({ result }) => {
  // const [boardImg, setBoardImg] = useState("");

  const boardImg = result === "win" ? win_board_img : lose_board_3_img;

  return (
    <div className={styles.container}>
      {boardImg === win_board_img && (
        <img
          src={win_background_img}
          alt="win_background_img"
          className={styles.win_background_img}
        />
      )}
      <img
        src={rock_left_hand_img}
        alt="rock_left_hand_img"
        className={styles.rock_hand}
      />
      <img
        src={scissors_right_hand_img}
        alt="scissors_right_hand_img"
        className={styles.scissors_hand}
      />
      <img src={boardImg} alt="boardImg" className={styles.board_img} />
      <div className={styles.btn_container}>
        <Link to="/online/stranger">
          <Button name="Play with stranger" />
        </Link>
        <Link to="/computer">
          <Button name="Play with computer" />
        </Link>
        <Link to="/online/friend">
          <Button name="play with friend" />
        </Link>
      </div>
    </div>
  );
};

Board.propTypes = {
  result: PropTypes.string,
};

export default Board;
