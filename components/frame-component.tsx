import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  tick02BackgroundColor?: CSSProperties["backgroundColor"];
};

const VectorIcon = styled(Image)`
  width: 14px;
  height: 11px;
  position: relative;
`;
const Tick = styled.div<{
  tick02BackgroundColor?: CSSProperties["backgroundColor"];
}>`
  border-radius: var(--br-31xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) var(--padding-8xs);
  background-color: ${(p) => p.tick02BackgroundColor};
`;
const Peragraph = styled.div`
  flex: 1;
  position: relative;
  line-height: 21px;
  display: inline-block;
  min-width: 185px;
`;
const Tick02ParentRoot = styled.div`
  width: 324px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--greyscale-400);
  font-family: var(--font-inter);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  tick02BackgroundColor,
}) => {
  return (
    <Tick02ParentRoot className={className}>
      <Tick tick02BackgroundColor={tick02BackgroundColor}>
        <VectorIcon
          loading="lazy"
          width={14}
          height={11}
          alt=""
          src="/vector-11.svg"
        />
      </Tick>
      <Peragraph>
        Build 16 web development projects for your portfolio, ready to apply for
        junior developer jobs.
      </Peragraph>
    </Tick02ParentRoot>
  );
};

export default FrameComponent;
