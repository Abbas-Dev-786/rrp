import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Score = ({ p1Score, p2Score }) => {
  return (
    <div className={styles.scores_container}>
      <div className={styles.player_info}>
        <div id={styles.person1}>
          <i className="bi bi-person user-icon-sm"></i>
        </div>

        <div className={styles.star_container}>
          {[...Array(3).keys()].map((ele, index) =>
            index + 1 <= p1Score ? (
              <i
                key={index}
                className={`bi bi-star-fill ${styles.star} ${styles.active_star}`}
              ></i>
            ) : (
              <i key={index} className={`bi bi-star ${styles.star}`}></i>
            )
          )}
        </div>
      </div>

      <div className={styles.player_info}>
        <div id={styles.person2}>
          <i className="bi bi-person user-icon-sm"></i>
        </div>

        <div className={styles.star_container}>
          {[...Array(3).keys()].map((ele, index) =>
            index + 1 <= p2Score ? (
              <i
                key={index}
                className={`bi bi-star-fill ${styles.star} ${styles.active_star}`}
              ></i>
            ) : (
              <i key={index} className={`bi bi-star ${styles.star}`}></i>
            )
          )}
        </div>
      </div>
    </div>
  );
};

Score.propTypes = {
  p1Score: PropTypes.number,
  p2Score: PropTypes.number,
};

export default Score;
