import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
  frame4: string;
};

const FrameChild = styled(Image)`
  height: 130.3px;
  width: 239.9px;
  border-radius: var(--br-81xl);
  object-fit: contain;
  @media screen and (max-width: 850px) {
    flex: 1;
  }
`;
const HackerrankIcon = styled(Image)`
  height: 28px;
  width: 28px;
  position: relative;
`;
const Hackerrank = styled.div`
  width: 140px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const HackerRankContainer = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-26xl);
  gap: var(--gap-3xs);
  z-index: 1;
  margin-left: -44px;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
    margin-left: 0;
  }
`;
const FrameParentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  row-gap: 20px;
  max-width: 100%;
  z-index: 1;
  margin-left: -10px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    flex: 1;
    flex-wrap: wrap;
    min-width: 100%;
    margin-left: 0;
  }
`;

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frame4,
}) => {
  return (
    <FrameParentRoot className={className}>
      <FrameChild loading="lazy" width={240} height={130} alt="" src={frame4} />
      <HackerRankContainer>
        <HackerrankIcon width={28} height={28} alt="" src="/hackerrank1.svg" />
        <Hackerrank>HackerRank</Hackerrank>
      </HackerRankContainer>
    </FrameParentRoot>
  );
};

export default FrameComponent;
