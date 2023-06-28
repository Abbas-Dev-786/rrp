import PropTypes from "prop-types";

import rock_right_hand_img from "../../assets/rock_right_hand.png";
import paper_right_hand_img from "../../assets/paper_right_hand.png";
import scissors_right_hand_img from "../../assets/scissors_right_hand.png";
import styles from "./styles.module.css";

const OPTIONS = [
  { move: "rock", img: rock_right_hand_img },
  { move: "paper", img: paper_right_hand_img },
  { move: "scissors", img: scissors_right_hand_img },
];

function Controls({ move, handleClick }) {
  return (
    <div className={styles.control_container}>
      {OPTIONS.map((option) => (
        <button
          key={option.move}
          // disabled={room.players[socket.id].optionLock}
          className={
            move === option.move
              ? `${styles.option_btn} ${styles.option_btn_active}`
              : styles.option_btn
          }
          onClick={() => {
            handleClick(option.move);
          }}
          value={option.move}
        >
          <img
            src={option.img}
            alt={`${option.move}_hand`}
            className={styles.option_btn_img}
          />
        </button>
      ))}
    </div>
  );
}

Controls.propTypes = {
  move: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Controls;
