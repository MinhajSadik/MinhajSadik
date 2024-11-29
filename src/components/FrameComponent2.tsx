import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.processParent, className].join(" ")}>
      <div className={styles.process}>
        <div className={styles.description}>
          <h3 className={styles.workProcess}>Work Process</h3>
          <h1 className={styles.fromConceptTo}>From Concept to Deployment</h1>
        </div>
      </div>
      <div className={styles.stages}>
        <div className={styles.stage}>
          <img
            className={styles.companyLogoIcon}
            alt=""
            src="/company-logo.svg"
          />
          <div className={styles.supportingText}>Requirement Gathering</div>
          <div className={styles.supportingText1}>
            <span>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</span>
            <span className={styles.more}>More</span>
          </div>
        </div>
        <div className={styles.stage1}>
          <img
            className={styles.companyLogoIcon}
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
          <div
            className={styles.supportingText2}
          >{`Planning & Architecture Design`}</div>
          <div className={styles.supportingText3}>
            <span>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</span>
            <span className={styles.more}>More</span>
          </div>
        </div>
        <div className={styles.stage2}>
          <img
            className={styles.companyLogoIcon}
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
          <div
            className={styles.supportingText2}
          >{`Development & Implementation`}</div>
          <div className={styles.supportingText3}>
            <span>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</span>
            <span className={styles.more}>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
