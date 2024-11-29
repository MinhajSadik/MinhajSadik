import { FunctionComponent, memo } from "react";
import LeftContent from "./LeftContent";
import styled from "styled-components";

export type LeftInnerType = {
  className?: string;
};

const LeftInnerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xl) var(--padding-6xs);
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
`;

const LeftInner: FunctionComponent<LeftInnerType> = memo(
  ({ className = "" }) => {
    return (
      <LeftInnerRoot className={className}>
        <LeftContent />
      </LeftInnerRoot>
    );
  }
);

export default LeftInner;