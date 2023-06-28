import PropTypes from "prop-types";

import winImg from "../../assets/win.png";
import loseImg from "../../assets/lose.png";
import tieImg from "../../assets/tie.png";
import styles from "./styles.module.css";

const Result = ({ resultText }) => {
  return (
    <>
      {resultText === "win" && (
        <img src={winImg} alt="win_img" className={styles.win_img} />
      )}
      {resultText === "lose" && (
        <img src={loseImg} alt="lose_img" className={styles.lose_img} />
      )}
      {resultText === "tie" && (
        <img src={tieImg} alt="tie_img" className={styles.tie_img} />
      )}
    </>
  );
};

Result.propTypes = {
  resultText: PropTypes.string,
};

export default Result;
