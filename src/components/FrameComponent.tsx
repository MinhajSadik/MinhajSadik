import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CTAContent from "./CTAContent";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onIconPlayClick = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.backgroundParent}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <img className={styles.frameChild} alt="" src="/group-469388.svg" />
        <div className={styles.frameParent}>
          <header className={styles.leftSideParent}>
            <div className={styles.leftSide}>
              <div className={styles.logoName}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.minhajSadik}>Minhaj Sadik</div>
              </div>
            </div>
            <div className={styles.menuItems}>
              <div className={styles.navigationItems}>
                <a className={styles.home}>Home</a>
              </div>
              <div className={styles.navigationItems1}>
                <a className={styles.services}>Services</a>
              </div>
              <div className={styles.navigationItems1}>
                <a className={styles.courses}>Courses</a>
              </div>
              <div className={styles.navigationItems1}>
                <a className={styles.courses}>Hosting</a>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.buttons}>
                <button className={styles.buttonContactUs}>
                  <div className={styles.resumeDownload}>
                    <img
                      className={styles.download02Icon}
                      alt=""
                      src="/download02.svg"
                    />
                    <a className={styles.resume}>Resume</a>
                  </div>
                </button>
                <button className={styles.iconPlay} onClick={onIconPlayClick}>
                  <a className={styles.contact}>Contact</a>
                </button>
              </div>
            </div>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-1000011793@2x.png"
            />
          </header>
          <div className={styles.titleParent}>
            <div className={styles.title}>
              <CTAContent rectangle1="/rectangle-1@2x.png" />
              <div className={styles.buttonDiv}>
                <div className={styles.frameGroup}>
                  <div className={styles.buttonContactUsParent}>
                    <button className={styles.buttonContactUs1}>
                      <div className={styles.exploreMyWork}>
                        Explore My Work
                      </div>
                    </button>
                    <div className={styles.iconPlay1}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.buttonContactUs2}>
                    <div className={styles.contactMe}>Contact Me</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.followMinhajOnlineParent}>
              <h3 className={styles.followMinhajOnlineContainer}>
                <span>{`Follow `}</span>
                <span className={styles.minhaj}>Minhaj</span>
                <span> online -</span>
              </h3>
              <div className={styles.socialMedia}>
                <button className={styles.github}>
                  <img className={styles.githubIcon} alt="" src="/github.svg" />
                  <div className={styles.github1}>GitHub</div>
                </button>
                <div className={styles.hackerrankLink}>
                  <img
                    className={styles.hackerrankLinkChild}
                    loading="lazy"
                    alt=""
                    src="/frame-4@2x.png"
                  />
                  <button className={styles.hackerrankInner}>
                    <img
                      className={styles.githubIcon}
                      alt=""
                      src="/hackerrank.svg"
                    />
                    <div className={styles.hackerrank}>HackerRank</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
