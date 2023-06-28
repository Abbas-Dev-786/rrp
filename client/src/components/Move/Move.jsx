import PropTypes from "prop-types";

import rock_left_hand_img from "../../assets/rock_left_hand.png";
import paper_left_hand_img from "../../assets/paper_left_hand.png";
import scissors_left_hand_img from "../../assets/scissors_left_hand.png";
import rock_right_hand_img from "../../assets/rock_right_hand.png";
import paper_right_hand_img from "../../assets/paper_right_hand.png";
import scissors_right_hand_img from "../../assets/scissors_right_hand.png";
import styles from "./styles.module.css";

const Move = ({ option, direction }) => {
  const condition = direction === "left";
  const balanceClass = condition ? styles.left : styles.right;

  return (
    <>
      {option === "rock" && (
        <img
          src={condition ? rock_left_hand_img : rock_right_hand_img}
          alt="rock_left_hand_img"
          className={`${styles.rock_left_hand_img} ${balanceClass}`}
        />
      )}
      {option === "paper" && (
        <img
          src={condition ? paper_left_hand_img : paper_right_hand_img}
          alt="paper_left_hand_img"
          className={`${styles.paper_left_hand_img} ${balanceClass}`}
        />
      )}
      {option === "scissors" && (
        <img
          src={condition ? scissors_left_hand_img : scissors_right_hand_img}
          alt="scissors_left_hand_img"
          className={`${styles.scissors_left_hand_img} ${balanceClass}`}
        />
      )}
    </>
  );
};

Move.propTypes = {
  option: PropTypes.string,
  direction: PropTypes.string,
};

export default Move;
