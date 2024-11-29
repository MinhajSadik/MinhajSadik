import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styled from "styled-components";

export type FrameComponent2Type = {
  className?: string;
};

const BlogViewPageInnerRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
`;

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <BlogViewPageInnerRoot className={className}>
      <FrameComponent1 emptyRight="/frame-10000117931@2x.png" />
    </BlogViewPageInnerRoot>
  );
};

export default FrameComponent2;
