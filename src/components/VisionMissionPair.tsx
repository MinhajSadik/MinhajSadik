import { FunctionComponent, memo, type CSSProperties } from "react";
import styled from "styled-components";

export type VisionMissionPairType = {
  className?: string;
  minhajVision?: string;
  vision1?: string;

  /** Style props */
  visionMissionPairMinWidth?: CSSProperties["minWidth"];
};

const MinhajVision = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const Vision1Icon = styled.img`
  height: 32px;
  width: 32px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const VisionGoal = styled.div`
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
const VisionMissionPairRoot = styled.div<{
  visionMissionPairMinWidth?: CSSProperties["minWidth"];
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
  min-width: 485px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-7xl);
  color: var(--color-gray-400);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  min-width: ${(p) => p.visionMissionPairMinWidth};
`;

const VisionMissionPair: FunctionComponent<VisionMissionPairType> = memo(
  ({ className = "", visionMissionPairMinWidth, minhajVision, vision1 }) => {
    return (
      <VisionMissionPairRoot
        visionMissionPairMinWidth={visionMissionPairMinWidth}
        className={className}
      >
        <VisionGoal>
          <MinhajVision>{minhajVision}</MinhajVision>
          <Vision1Icon loading="lazy" alt="" src={vision1} />
        </VisionGoal>
        <IAmMinhaj>
          I am Minhaj Sadik, a passionate Software Engineer and DevOps
          Specialist based in Sylhet, Bangladesh. With expertise in
          microservices, system design, and infrastructure automation,
        </IAmMinhaj>
      </VisionMissionPairRoot>
    );
  }
);

export default VisionMissionPair;