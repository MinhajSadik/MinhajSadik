import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import VisionGoalItems from "./vision-goal-items";

export type FrameComponent4Type = {
  className?: string;
};

const Minhaj = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 198px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-117xl);
    line-height: 119px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-66xl);
    line-height: 79px;
  }
`;
const ExperienceIconList = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-481xl);
  object-fit: cover;
`;
const ExperienceIconList1 = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
`;
const ExperienceIconList2 = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
  z-index: 1;
`;
const ExperienceIcons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  row-gap: 20px;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const VisionMission = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  z-index: 2;
  margin-top: -17px;
`;
const Experience = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 1;
  margin-top: -120px;
`;
const NameDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const ContentAboutUs = styled.div`
  flex: 1;
  border-radius: var(--br-5xl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-46xl);
  box-sizing: border-box;
  background-image: url("/content-about-us@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1225px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const ContentAboutUsWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl) var(--padding-base);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-320xl);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
`;

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <ContentAboutUsWrapperRoot className={className}>
      <ContentAboutUs>
        <NameDescription>
          <Minhaj>Minhaj</Minhaj>
          <Experience>
            <ExperienceIcons>
              <ExperienceIconList
                loading="lazy"
                width={264}
                height={263}
                alt=""
                src="/rectangle-158@2x.png"
              />
              <ExperienceIconList1
                loading="lazy"
                width={264}
                height={263}
                alt=""
                src="/rectangle-159@2x.png"
              />
              <ExperienceIconList
                loading="lazy"
                width={264}
                height={263}
                alt=""
                src="/rectangle-160@2x.png"
              />
              <ExperienceIconList2
                loading="lazy"
                width={264}
                height={263}
                alt=""
                src="/rectangle-161@2x.png"
              />
              <ExperienceIconList
                loading="lazy"
                width={264}
                height={263}
                alt=""
                src="/rectangle-162@2x.png"
              />
            </ExperienceIcons>
            <VisionMission>
              <VisionGoalItems
                visionGoalItemsMinWidth="485px"
                minhajVision="Minhaj Vision"
                minhajVisionMargin="0"
                vision1="/vision-1.svg"
              />
              <VisionGoalItems
                visionGoalItemsMinWidth="485px"
                minhajVision="Minhaj Goal"
                minhajVisionMargin="0"
                vision1="/targeticon-1.svg"
              />
            </VisionMission>
          </Experience>
        </NameDescription>
      </ContentAboutUs>
    </ContentAboutUsWrapperRoot>
  );
};

export default FrameComponent4;
