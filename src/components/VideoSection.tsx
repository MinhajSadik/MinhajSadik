import { FunctionComponent } from "react";
import Details from "./Details";
import styles from "./VideoSection.module.css";

export type VideoSectionType = {
  className?: string;
};

const VideoSection: FunctionComponent<VideoSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.videoSection, className].join(" ")}>
      <div className={styles.videoContent}>
        <h1 className={styles.learnWithMinhaj}>
          Learn with Minhaj – Practical Skills, Real-World Knowledge
        </h1>
        <div className={styles.videoActions}>
          <button className={styles.buttonContactUs}>
            <div className={styles.viewCourses}>View courses</div>
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
      <div className={styles.videoDetails}>
        <Details
          group469393="/group-469393-1.svg"
          h3="Mastering Microservices Architecture"
          peragraph1="Duration: 4 hours | Certification: $1"
        />
        <Details
          detailsWidth="unset"
          group469393="/rectangle-155@2x.png"
          groupIconBorderRadius="24px"
          h3={`Deploying with Docker & Kubernetes`}
          h3Height="58px"
          h3Display="inline-block"
          peragraph1="Duration: 5 hours | Certification: $1"
        />
        <Details
          detailsWidth="420px"
          group469393="/rectangle-155-1@2x.png"
          groupIconBorderRadius="24px"
          h3={`CI/CD Automation with Jenkins & GitLab CI`}
          h3Height="unset"
          h3Display="unset"
          peragraph1="Duration: 3 hours | Certification: $1"
        />
      </div>
    </section>
  );
};

export default VideoSection;
