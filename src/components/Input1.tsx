import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Input1.module.css";

export type Input1Type = {
  className?: string;
  email?: string;

  /** Style props */
  emailTextDecoration?: CSSProperties["textDecoration"];
};

const Input1: FunctionComponent<Input1Type> = ({
  className = "",
  email,
  emailTextDecoration,
}) => {
  const emailStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: emailTextDecoration,
    };
  }, [emailTextDecoration]);

  return (
    <div className={[styles.input, className].join(" ")}>
      <a className={styles.email} style={emailStyle}>
        {email}
      </a>
    </div>
  );
};

export default Input1;
