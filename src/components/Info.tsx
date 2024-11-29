import { FunctionComponent } from "react";
import styles from "./Info.module.css";

export type InfoType = {
  className?: string;
};

const Info: FunctionComponent<InfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.info, className].join(" ")}>
      <div className={styles.leftSideParent}>
        <div className={styles.leftSide}>
          <div className={styles.content}>
            <img
              className={styles.brandingIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.minhajSadik}>Minhaj Sadik</div>
          </div>
        </div>
        <div className={styles.menuItems}>
          <div className={styles.navigationItems}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.navigationItems1}>
            <a className={styles.services}>Services</a>
          </div>
          <div className={styles.navigationItems1}>
            <div className={styles.home}>Courses</div>
          </div>
          <div className={styles.navigationItems}>
            <a className={styles.hosting}>Hosting</a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.iconSocialMediaParent}>
            <div className={styles.iconSocialMedia}>
              <img
                className={styles.githubIcon}
                loading="lazy"
                alt=""
                src="/github-1.svg"
              />
            </div>
            <div className={styles.iconSocialMedia}>
              <img
                className={styles.githubIcon}
                loading="lazy"
                alt=""
                src="/linkedin02.svg"
              />
            </div>
            <div className={styles.iconSocialMedia}>
              <img
                className={styles.githubIcon}
                loading="lazy"
                alt=""
                src="/hackerrank-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.supportingText}>
          © 2024 Minhaj Sadik. All rights reserved. | Designed by Dipu Paul
        </div>
        <div className={styles.links}>
          <div className={styles.supportingText1}>Terms of services</div>
          <div className={styles.supportingText2}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
