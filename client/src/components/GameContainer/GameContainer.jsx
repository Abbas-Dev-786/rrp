import PropTypes from "prop-types";

import styles from "./styles.module.css";

const GameContainer = ({ children }) => {
  return <div className={styles.game_container}>{children}</div>;
};

GameContainer.propTypes = {
  children: PropTypes.any,
};

export default GameContainer;
