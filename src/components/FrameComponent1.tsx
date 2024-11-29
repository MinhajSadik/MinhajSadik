import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featuredProjectTitleParent, className].join(" ")}>
      <div className={styles.featuredProjectTitle}>
        <h1 className={styles.featuredProjects}>Featured Projects</h1>
        <div className={styles.viewWorksButton}>
          <button className={styles.buttonContactUs}>
            <div className={styles.viewWorks}>View Works</div>
          </button>
          <div className={styles.iconPlay}>
            <img
              className={styles.arrowUpLeft01Icon}
              loading="lazy"
              alt=""
              src="/arrowupleft01.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.projectHover}>
        <img
          className={styles.projectHoverChild}
          alt=""
          src="/group-469393.svg"
        />
        <div className={styles.projectHoverCard}>
          <img
            className={styles.projectHoverCardChild}
            alt=""
            src="/rectangle-157@2x.png"
          />
          <div className={styles.hover}>
            <h3 className={styles.supportingText}>Real Estate website</h3>
          </div>
        </div>
        <img
          className={styles.hoverBackgroundIcon}
          loading="lazy"
          alt=""
          src="/rectangle-157-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
