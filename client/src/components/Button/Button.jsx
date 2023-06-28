import PropTypes from "prop-types";

import btn_background_img from "../../assets/btn_background.png";
import styles from "./styles.module.css";

const Button = ({ name }) => {
  return (
    <button className={styles.btn}>
      <img
        src={btn_background_img}
        alt="btn_background_img"
        className={styles.btn_background_img}
        // className={`${styles.btn_background_img} ${
        //   size === "sm" ? styles.sm : styles.bg
        // }`}
      />
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
