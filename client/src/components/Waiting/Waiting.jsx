import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Waiting = ({ type }) => {
  return (
    <div className={styles.opponent_container}>
      <div
        className={styles.opponent_card}
        style={{ backgroundColor: type === "wait-me" ? "#e48c11" : "#d92212" }}
      >
        <i className="bi bi-person user-icon-bg"></i>
      </div>
      <p className={styles.opponent_text}>
        {type === "fetch" && "waiting for opponent connection.."}
        {type === "wait-op" && "waiting for opponent move.."}
        {type === "wait-me" && "waiting for your move.."}
      </p>
    </div>
  );
};

Waiting.propTypes = {
  type: PropTypes.string,
};

export default Waiting;
