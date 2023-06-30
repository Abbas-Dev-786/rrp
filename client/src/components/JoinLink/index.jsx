import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const URL = import.meta.env.PROD
  ? "https://rrp-amb.netlify.com"
  : "http://localhost:5173";

const PATH = "/online/friend/room/";

const JoinLink = ({ roomID }) => {
  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(true);
    navigator.clipboard.writeText(`${URL}${PATH}${roomID}`);
  };

  return (
    <div className={styles.join_link_container}>
      <div className={styles.copy_link} onClick={handleChange}>
        {active ? "Copied !" : "Click to copy !"}
      </div>
      <button
        className={
          active
            ? `${styles.join_link} ${styles.join_link_active}`
            : styles.join_link
        }
        onClick={handleChange}
      >
        {`${URL}${PATH}${roomID}`}
      </button>
      <h2 className={styles.join_link_text}>
        Send this link to your friend to connect.
      </h2>
    </div>
  );
};

JoinLink.propTypes = { roomID: PropTypes.any };

export default JoinLink;
