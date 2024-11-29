import { FunctionComponent } from "react";
import styles from "./CTAContent.module.css";

export type CTAContentType = {
  className?: string;
  rectangle1?: string;
};

const CTAContent: FunctionComponent<CTAContentType> = ({
  className = "",
  rectangle1,
}) => {
  return (
    <div className={[styles.ctaContent, className].join(" ")}>
      <div className={styles.name}>
        <h1 className={styles.minhajSadik}>
          <b>Minhaj Sadik</b>
          <span className={styles.span}>{` `}</span>
        </h1>
        <img
          className={styles.nameChild}
          loading="lazy"
          alt=""
          src={rectangle1}
        />
        <h1 className={styles.h1}>-</h1>
      </div>
      <h1 className={styles.softwareEngineer}>{`Software Engineer &`}</h1>
      <h1 className={styles.devopsSpecialist}>DevOps Specialist</h1>
      <h3 className={styles.buildingScalableAnd}>
        Building scalable and secure architectures for modern applications.
      </h3>
    </div>
  );
};

export default CTAContent;
