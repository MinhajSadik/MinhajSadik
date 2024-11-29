import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CourseModule.module.css";

export type CourseModuleType = {
  className?: string;
  aroowUp?: string;
  h3?: string;
  showModuleDurationHeader?: boolean;
  h31?: string;
  h32?: string;

  /** Style props */
  courseModuleBorderBottom?: CSSProperties["borderBottom"];
  h3TextDecoration?: CSSProperties["textDecoration"];
};

const CourseModule: FunctionComponent<CourseModuleType> = ({
  className = "",
  courseModuleBorderBottom,
  aroowUp,
  h3,
  h3TextDecoration,
  showModuleDurationHeader,
  h31,
  h32,
}) => {
  const courseModuleStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: courseModuleBorderBottom,
    };
  }, [courseModuleBorderBottom]);

  const h31Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: h3TextDecoration,
    };
  }, [h3TextDecoration]);

  return (
    <div
      className={[styles.courseModule, className].join(" ")}
      style={courseModuleStyle}
    >
      <div className={styles.moduleContent}>
        <div className={styles.moduleHeader}>
          <img
            className={styles.aroowUpIcon}
            loading="lazy"
            alt=""
            src={aroowUp}
          />
          <a className={styles.h3} style={h31Style}>
            {h3}
          </a>
        </div>
        {showModuleDurationHeader && (
          <div className={styles.moduleDurationHeader}>
            <a className={styles.h3}>{h31}</a>
          </div>
        )}
      </div>
      <div className={styles.duration}>
        <div className={styles.durationHourContainers}>
          <div className={styles.h32}>{h32}</div>
        </div>
        <div className={styles.durationHourContainers}>
          <div className={styles.h32}>1hr</div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
