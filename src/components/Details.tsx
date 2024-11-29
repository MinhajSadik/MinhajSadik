import {
  FunctionComponent,
  memo,
  useCallback,
  type CSSProperties,
} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const DetailsChild = styled.img<{
  groupIconBorderRadius?: CSSProperties["borderRadius"];
}>`
  align-self: stretch;
  height: 368px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: ${(p) => p.groupIconBorderRadius};
`;
const H = styled.h3<{
  h3Height?: CSSProperties["height"];
  h3Display?: CSSProperties["display"];
}>`margin: 0;
  position: relative;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 450px) {
  font-size: var(--font-size-lgi);
  
  }
  height: ${(p) => p.h3Height}
  display: ${(p) => p.h3Display}
`;
const Peragraph = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 24px;
  color: var(--greyscale-400);
`;
const Texts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const DetailsRoot = styled.div<{ detailsWidth?: CSSProperties["width"] }>`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  max-width: 100%;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
  width: ${(p) => p.detailsWidth};
`;

const Details: FunctionComponent<DetailsType> = memo(
  ({
    className = "",
    detailsWidth,
    group469393,
    groupIconBorderRadius,
    h3,
    h3Height,
    h3Display,
    peragraph1,
  }) => {
    const navigate = useNavigate();

    const onDetailsContainerClick = useCallback(() => {
      navigate("/course-view-page");
    }, [navigate]);

    return (
      <DetailsRoot
        onClick={onDetailsContainerClick}
        detailsWidth={detailsWidth}
        className={className}
      >
        <DetailsChild
          alt=""
          src={group469393}
          groupIconBorderRadius={groupIconBorderRadius}
        />
        <Texts>
          <H h3Height={h3Height} h3Display={h3Display}>
            {h3}
          </H>
          <Peragraph>{peragraph1}</Peragraph>
        </Texts>
      </DetailsRoot>
    );
  }
);

export default Details;