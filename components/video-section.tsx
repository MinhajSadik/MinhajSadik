import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Details from "./details";

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
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const ArrowUpLeft01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const VideoActions = styled.div`
  width: 217px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const VideoContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
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

const VideoSection: NextPage<VideoSectionType> = ({ className = "" }) => {
  return (
    <VideoSectionRoot className={className}>
      <VideoContent>
        <LearnWithMinhaj>
          Learn with Minhaj – Practical Skills, Real-World Knowledge
        </LearnWithMinhaj>
        <VideoActions>
          <ButtonContactUs
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#212121",
              border: "#ffda58 solid 1px",
              borderRadius: "12px",
              "&:hover": { background: "#212121" },
              height: 56,
            }}
          >
            View courses
          </ButtonContactUs>
          <IconPlay>
            <ArrowUpLeft01Icon
              loading="lazy"
              width={24}
              height={24}
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
          group469393="/rectangle-1551@2x.png"
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
};

export default VideoSection;
