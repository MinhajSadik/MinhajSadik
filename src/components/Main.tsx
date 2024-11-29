import { FunctionComponent } from "react";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <div className={[styles.main, className].join(" ")}>
      <div className={styles.callToAction}>
        <h1 className={styles.readyToElevate}>
          Ready to Elevate Your Skills or Start a Project?
        </h1>
        <div className={styles.spesility}>
          <div className={styles.experinced}>
            <img
              className={styles.mail01Icon}
              loading="lazy"
              alt=""
              src="/mail01.svg"
            />
            <div className={styles.supportingText}>+8801781583107</div>
          </div>
          <div className={styles.experinced}>
            <img
              className={styles.mail01Icon}
              loading="lazy"
              alt=""
              src="/smartphone01.svg"
            />
            <div className={styles.supportingText}>
              minhaj@littleprogrammers.org
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.supportingText2}>
          Whether you want to learn new skills or need help with a project,
          Minhaj is here to support you. Check out his courses or reach out for
          a chat about your next project!
        </div>
        <div className={styles.contactButton}>
          <button className={styles.buttonContactUs}>
            <div className={styles.contactMinhaj}>Contact Minhaj</div>
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
    </div>
  );
};

export default Main;
