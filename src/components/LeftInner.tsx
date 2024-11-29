import { FunctionComponent } from "react";
import LeftContent from "./LeftContent";
import styles from "./LeftInner.module.css";

export type LeftInnerType = {
  className?: string;
};

const LeftInner: FunctionComponent<LeftInnerType> = ({ className = "" }) => {
  return (
    <div className={[styles.leftInner, className].join(" ")}>
      <LeftContent />
    </div>
  );
};

export default LeftInner;
