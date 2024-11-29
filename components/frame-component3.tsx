import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponent3Type = {
  className?: string;
};

const WorkProcess = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const FromConceptTo = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-gray-800);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const Process = styled.div`
  width: 862px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-6xl);
  }
`;
const CompanyLogoIcon = styled(Image)`
  width: 70px;
  height: 70px;
  position: relative;
`;
const SupportingText = styled.div`
  width: 226px;
  position: relative;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const StartByUnderstanding = styled.span``;
const More = styled.span`
  font-weight: 500;
  color: var(--greyscale-500);
`;
const SupportingText1 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  color: var(--color-darkslategray-500);
`;
const Stage = styled.div`
  flex: 0.9474;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke-100);
  border-top: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-43xl) var(--padding-55xl) var(--padding-127xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: var(--padding-46xl) var(--padding-xl) var(--padding-76xl);
    box-sizing: border-box;
    flex: 1;
  }
`;
const SupportingText2 = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const SupportingText3 = styled.div`
  width: 288px;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  display: inline-block;
  color: var(--color-darkslategray-500);
`;
const Stage1 = styled.div`
  flex: 0.9934;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke-100);
  border-bottom: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-46xl) var(--padding-48xl) var(--padding-124xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-74xl);
    box-sizing: border-box;
    flex: 1;
  }
`;
const Stage2 = styled.div`
  flex: 1;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke-100);
  border-top: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-44xl) var(--padding-47xl) var(--padding-126xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-75xl);
    box-sizing: border-box;
  }
`;
const Stages = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  row-gap: 20px;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const ProcessParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-46xl) var(--padding-81xl);
  box-sizing: border-box;
  gap: var(--gap-41xl);
  max-width: 100%;
  z-index: 1;
  margin-top: -220px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
    padding-left: var(--padding-31xl);
    padding-right: var(--padding-31xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <ProcessParentRoot className={className}>
      <Process>
        <Description>
          <WorkProcess>Work Process</WorkProcess>
          <FromConceptTo>From Concept to Deployment</FromConceptTo>
        </Description>
      </Process>
      <Stages>
        <Stage>
          <CompanyLogoIcon
            width={70}
            height={70}
            alt=""
            src="/company-logo.svg"
          />
          <SupportingText>Requirement Gathering</SupportingText>
          <SupportingText1>
            <StartByUnderstanding>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</StartByUnderstanding>
            <More>More</More>
          </SupportingText1>
        </Stage>
        <Stage1>
          <CompanyLogoIcon
            loading="lazy"
            width={70}
            height={70}
            alt=""
            src="/company-logo.svg"
          />
          <SupportingText2>{`Planning & Architecture Design`}</SupportingText2>
          <SupportingText3>
            <StartByUnderstanding>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</StartByUnderstanding>
            <More>More</More>
          </SupportingText3>
        </Stage1>
        <Stage2>
          <CompanyLogoIcon
            loading="lazy"
            width={70}
            height={70}
            alt=""
            src="/company-logo.svg"
          />
          <SupportingText2>{`Development & Implementation`}</SupportingText2>
          <SupportingText3>
            <StartByUnderstanding>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</StartByUnderstanding>
            <More>More</More>
          </SupportingText3>
        </Stage2>
      </Stages>
    </ProcessParentRoot>
  );
};

export default FrameComponent3;
