import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import Details from "./Details";

export type VideoSectionType = {
  className?: string;
};

const LearnWithMinhaj = styled.h1`
  margin: 0;
  width: 861px;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const ViewCourses = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 114px;
`;
const ButtonContactUs = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-goldenrod-100);
  padding: var(--padding-base) var(--padding-3xl);
  background-color: var(--color-gray-100);
  height: 56px;
  border-radius: var(--br-xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-dimgray-100);
    border: 1px solid var(--color-goldenrod-200);
    box-sizing: border-box;
  }
`;
const ArrowUpLeft01Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const VideoActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const VideoContent = styled.div`
  align-self: stretch;
  height: 146px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const VideoDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const VideoSectionRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-46xl) var(--padding-81xl);
  box-sizing: border-box;
  gap: var(--gap-35xl);
  max-width: 100%;
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-800);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-8xl);
    padding: var(--padding-23xl) var(--padding-31xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: var(--padding-8xl) var(--padding-xl);
    box-sizing: border-box;
  }
`;

const VideoSection: FunctionComponent<VideoSectionType> = memo(
  ({ className = "" }) => {
    return (
      <VideoSectionRoot className={className}>
        <VideoContent>
          <LearnWithMinhaj>
            Learn with Minhaj – Practical Skills, Real-World Knowledge
          </LearnWithMinhaj>
          <VideoActions>
            <ButtonContactUs>
              <ViewCourses>View courses</ViewCourses>
            </ButtonContactUs>
            <IconPlay>
              <ArrowUpLeft01Icon
                loading="lazy"
                alt=""
                src="/arrowupleft01.svg"
              />
            </IconPlay>
          </VideoActions>
        </VideoContent>
        <VideoDetails>
          <Details
            group469393="/group-469393-1.svg"
            h3="Mastering Microservices Architecture"
            peragraph1="Duration: 4 hours | Certification: $1"
          />
          <Details
            detailsWidth="unset"
            group469393="/rectangle-155@2x.png"
            groupIconBorderRadius="24px"
            h3={`Deploying with Docker & Kubernetes`}
            h3Height="58px"
            h3Display="inline-block"
            peragraph1="Duration: 5 hours | Certification: $1"
          />
          <Details
            detailsWidth="420px"
            group469393="/rectangle-155-1@2x.png"
            groupIconBorderRadius="24px"
            h3={`CI/CD Automation with Jenkins & GitLab CI`}
            h3Height="unset"
            h3Display="unset"
            peragraph1="Duration: 3 hours | Certification: $1"
          />
        </VideoDetails>
      </VideoSectionRoot>
    );
  }
);

export default VideoSection;