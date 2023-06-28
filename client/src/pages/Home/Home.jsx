import Button from "../../components/Button/Button";
import logo_img from "../../assets/logo.png";
import scissors_right_hand_img from "../../assets/scissors_right_hand.png";
import rock_left_hand_img from "../../assets/rock_left_hand.png";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.left}>
        <img src={logo_img} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.right}>
        <img
          src={scissors_right_hand_img}
          alt="scissor_hand"
          className={styles.scissor_hand}
        />
        <img
          src={rock_left_hand_img}
          alt="rock_hand"
          className={styles.rock_hand}
        />
        <div className={styles.btn_container}>
          <Link to="/online/stranger">
            <Button name="Play with stranger" />
          </Link>
          <Link to="/computer">
            <Button name="play with Computer" />
          </Link>
          <Link to="/online/friend">
            <Button name="play with friend" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
