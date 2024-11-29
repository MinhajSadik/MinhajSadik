import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Image from "next/image";
import styled from "styled-components";

export type VisionGoalItemsType = {
  className?: string;
  minhajVision?: string;
  vision1: string;

  /** Style props */
  visionGoalItemsMinWidth?: CSSProperties["minWidth"];
  minhajVisionMargin?: CSSProperties["margin"];
};

const MinhajVision = styled.h2<{
  minhajVisionMargin?: CSSProperties["margin"];
}>`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
  margin: ${(p) => p.minhajVisionMargin};
`;
const Vision1Icon = styled(Image)`
  height: 32px;
  width: 32px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const VisionGoalPair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const IAmMinhaj = styled.div`
  width: 583px;
  position: relative;
  font-size: var(--font-size-lg);
  color: var(--color-gray-500);
  display: inline-block;
  max-width: 100%;
`;
const VisionGoalItemsRoot = styled.div<{
  visionGoalItemsMinWidth?: CSSProperties["minWidth"];
}>`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-13xl) var(--padding-xl) var(--padding-13xl)
    var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-base);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
  min-width: ${(p) => p.visionGoalItemsMinWidth};
`;

const VisionGoalItems: NextPage<VisionGoalItemsType> = ({
  className = "",
  visionGoalItemsMinWidth,
  minhajVision,
  minhajVisionMargin,
  vision1,
}) => {
  return (
    <VisionGoalItemsRoot
      visionGoalItemsMinWidth={visionGoalItemsMinWidth}
      className={className}
    >
      <VisionGoalPair>
        <MinhajVision minhajVisionMargin={minhajVisionMargin}>
          {minhajVision}
        </MinhajVision>
        <Vision1Icon width={32} height={32} alt="" src={vision1} />
      </VisionGoalPair>
      <IAmMinhaj>
        I am Minhaj Sadik, a passionate Software Engineer and DevOps Specialist
        based in Sylhet, Bangladesh. With expertise in microservices, system
        design, and infrastructure automation,
      </IAmMinhaj>
    </VisionGoalItemsRoot>
  );
};

export default VisionGoalItems;
