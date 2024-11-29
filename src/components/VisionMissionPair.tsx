import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VisionMissionPair.module.css";

export type VisionMissionPairType = {
  className?: string;
  minhajVision?: string;
  vision1?: string;

  /** Style props */
  visionMissionPairMinWidth?: CSSProperties["minWidth"];
};

const VisionMissionPair: FunctionComponent<VisionMissionPairType> = ({
  className = "",
  visionMissionPairMinWidth,
  minhajVision,
  vision1,
}) => {
  const visionMissionPairStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: visionMissionPairMinWidth,
    };
  }, [visionMissionPairMinWidth]);

  return (
    <div
      className={[styles.visionMissionPair, className].join(" ")}
      style={visionMissionPairStyle}
    >
      <div className={styles.visionGoal}>
        <h2 className={styles.minhajVision}>{minhajVision}</h2>
        <img
          className={styles.vision1Icon}
          loading="lazy"
          alt=""
          src={vision1}
        />
      </div>
      <div className={styles.iAmMinhaj}>
        I am Minhaj Sadik, a passionate Software Engineer and DevOps Specialist
        based in Sylhet, Bangladesh. With expertise in microservices, system
        design, and infrastructure automation,
      </div>
    </div>
  );
};

export default VisionMissionPair;
