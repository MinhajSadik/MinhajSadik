import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Details.module.css";

export type DetailsType = {
  className?: string;
  group469393?: string;
  h3?: string;
  peragraph1?: string;

  /** Style props */
  detailsWidth?: CSSProperties["width"];
  groupIconBorderRadius?: CSSProperties["borderRadius"];
  h3Height?: CSSProperties["height"];
  h3Display?: CSSProperties["display"];
};

const Details: FunctionComponent<DetailsType> = ({
  className = "",
  detailsWidth,
  group469393,
  groupIconBorderRadius,
  h3,
  h3Height,
  h3Display,
  peragraph1,
}) => {
  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: groupIconBorderRadius,
    };
  }, [groupIconBorderRadius]);

  const h3Style: CSSProperties = useMemo(() => {
    return {
      height: h3Height,
      display: h3Display,
    };
  }, [h3Height, h3Display]);

  const navigate = useNavigate();

  const onDetailsContainerClick = useCallback(() => {
    navigate("/course-view-page");
  }, [navigate]);

  return (
    <div
      className={[styles.details, className].join(" ")}
      onClick={onDetailsContainerClick}
      style={detailsStyle}
    >
      <img
        className={styles.detailsChild}
        alt=""
        src={group469393}
        style={groupIconStyle}
      />
      <div className={styles.texts}>
        <h3 className={styles.h3} style={h3Style}>
          {h3}
        </h3>
        <div className={styles.peragraph1}>{peragraph1}</div>
      </div>
    </div>
  );
};

export default Details;
