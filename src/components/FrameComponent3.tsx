import { FunctionComponent } from "react";
import VisionMissionPair from "./VisionMissionPair";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contentAboutUsWrapper, className].join(" ")}>
      <div className={styles.contentAboutUs}>
        <div className={styles.nameDescription}>
          <h1 className={styles.minhaj}>Minhaj</h1>
          <div className={styles.experience}>
            <div className={styles.experienceIcons}>
              <img
                className={styles.experienceIconList}
                loading="lazy"
                alt=""
                src="/rectangle-158@2x.png"
              />
              <img
                className={styles.experienceIconList1}
                loading="lazy"
                alt=""
                src="/rectangle-159@2x.png"
              />
              <img
                className={styles.experienceIconList}
                loading="lazy"
                alt=""
                src="/rectangle-160@2x.png"
              />
              <img
                className={styles.experienceIconList3}
                loading="lazy"
                alt=""
                src="/rectangle-161@2x.png"
              />
              <img
                className={styles.experienceIconList}
                loading="lazy"
                alt=""
                src="/rectangle-162@2x.png"
              />
            </div>
            <div className={styles.visionMission}>
              <VisionMissionPair
                minhajVision="Minhaj Vision"
                vision1="/vision-1.svg"
              />
              <VisionMissionPair
                visionMissionPairMinWidth="485px"
                minhajVision="Minhaj Goal"
                vision1="/targeticon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
