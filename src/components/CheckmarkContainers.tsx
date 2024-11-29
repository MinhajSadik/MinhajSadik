import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CheckmarkContainers.module.css";

export type CheckmarkContainersType = {
  className?: string;

  /** Style props */
  tick02BackgroundColor?: CSSProperties["backgroundColor"];
};

const CheckmarkContainers: FunctionComponent<CheckmarkContainersType> = ({
  className = "",
  tick02BackgroundColor,
}) => {
  const tick02Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: tick02BackgroundColor,
    };
  }, [tick02BackgroundColor]);

  return (
    <div className={[styles.checkmarkContainers, className].join(" ")}>
      <div className={styles.tick02} style={tick02Style}>
        <img
          className={styles.checkmarkIconSet}
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <div className={styles.peragraph2}>
        Build 16 web development projects for your portfolio, ready to apply for
        junior developer jobs.
      </div>
    </div>
  );
};

export default CheckmarkContainers;
