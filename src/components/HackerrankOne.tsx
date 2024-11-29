import { FunctionComponent } from "react";
import styles from "./HackerrankOne.module.css";

export type HackerrankOneType = {
  className?: string;
  frame4?: string;
};

const HackerrankOne: FunctionComponent<HackerrankOneType> = ({
  className = "",
  frame4,
}) => {
  return (
    <div className={[styles.hackerrankOne, className].join(" ")}>
      <img
        className={styles.hackerrankOneChild}
        loading="lazy"
        alt=""
        src={frame4}
      />
      <div className={styles.hackerrankLinkOne}>
        <img
          className={styles.hackerrankIcon}
          loading="lazy"
          alt=""
          src="/hackerrank.svg"
        />
        <div className={styles.hackerrank}>HackerRank</div>
      </div>
    </div>
  );
};

export default HackerrankOne;
