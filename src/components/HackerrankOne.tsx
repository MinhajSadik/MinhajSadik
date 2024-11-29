import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type HackerrankOneType = {
  className?: string;
  frame4?: string;
};

const HackerrankOneChild = styled.img`
  height: 130.3px;
  width: 239.9px;
  border-radius: var(--br-81xl);
  object-fit: contain;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const HackerrankIcon = styled.img`
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
const HackerrankLinkOne = styled.div`
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
const HackerrankOneRoot = styled.div`
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
  @media screen and (max-width: 825px) {
    flex: 1;
    min-width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const HackerrankOne: FunctionComponent<HackerrankOneType> = memo(
  ({ className = "", frame4 }) => {
    return (
      <HackerrankOneRoot className={className}>
        <HackerrankOneChild loading="lazy" alt="" src={frame4} />
        <HackerrankLinkOne>
          <HackerrankIcon loading="lazy" alt="" src="/hackerrank.svg" />
          <Hackerrank>HackerRank</Hackerrank>
        </HackerrankLinkOne>
      </HackerrankOneRoot>
    );
  }
);

export default HackerrankOne;