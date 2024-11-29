import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LeftContent.module.css";

export type LeftContentType = {
  className?: string;

  /** Style props */
  leftContentFlex?: CSSProperties["flex"];
  leftContentPosition?: CSSProperties["position"];
  leftContentWidth?: CSSProperties["width"];
  leftContentMargin?: CSSProperties["margin"];
  leftContentTop?: CSSProperties["top"];
  leftContentLeft?: CSSProperties["left"];
};

const LeftContent: FunctionComponent<LeftContentType> = ({
  className = "",
  leftContentFlex,
  leftContentPosition,
  leftContentWidth,
  leftContentMargin,
  leftContentTop,
  leftContentLeft,
}) => {
  const leftContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: leftContentFlex,
      position: leftContentPosition,
      width: leftContentWidth,
      margin: leftContentMargin,
      top: leftContentTop,
      left: leftContentLeft,
    };
  }, [
    leftContentFlex,
    leftContentPosition,
    leftContentWidth,
    leftContentMargin,
    leftContentTop,
    leftContentLeft,
  ]);

  return (
    <header
      className={[styles.leftContent, className].join(" ")}
      style={leftContentStyle}
    >
      <div className={styles.leftSide}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.minhajSadik}>Minhaj Sadik</div>
        </div>
      </div>
      <nav className={styles.menuItems}>
        <div className={styles.navigationItems}>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.navigationItems1}>
          <a className={styles.services}>Services</a>
        </div>
        <div className={styles.navigationItems1}>
          <a className={styles.home}>Courses</a>
        </div>
        <div className={styles.navigationItems1}>
          <a className={styles.home}>Hosting</a>
        </div>
      </nav>
      <div className={styles.rightSide}>
        <div className={styles.rightContent}>
          <div className={styles.buttonContactUs}>
            <div className={styles.resumeButton}>
              <input className={styles.download02} type="checkbox" />
              <a className={styles.resume}>Resume</a>
            </div>
          </div>
          <div className={styles.iconPlay}>
            <a className={styles.contact}>Contact</a>
          </div>
        </div>
      </div>
      <img
        className={styles.leftContentChild}
        alt=""
        src="/frame-1000011793@2x.png"
      />
    </header>
  );
};

export default LeftContent;
