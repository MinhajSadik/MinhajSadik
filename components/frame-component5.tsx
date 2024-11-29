import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import styled from "styled-components";

export type FrameComponent5Type = {
  className?: string;
};

const UnlockRealWorld = styled.span``;
const Experience = styled.span`
  color: var(--color-gray-100);
`;
const UnlockRealWorldExperienceContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const ImMinhajSadik = styled.div`
  flex: 1;
  position: relative;
  display: inline-block;
  max-width: 100%;
`;
const SubheadingContainer = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
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
const ButtonContactUsParent = styled.div`
  width: 197px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 488px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
`;
const ImageComponentsIcon = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-481xl);
  object-fit: cover;
`;
const ImageComponentsIcon1 = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1482px) {
    flex: 1;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const ContentParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-35xl);
  box-sizing: border-box;
  gap: var(--gap-42xl);
  max-width: 100%;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
    padding-top: var(--padding-16xl);
    padding-bottom: var(--padding-16xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const HostingInnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl) var(--padding-85xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
  @media screen and (max-width: 850px) {
    padding-bottom: var(--padding-49xl);
    box-sizing: border-box;
  }
`;

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <HostingInnerRoot className={className}>
      <FrameParent>
        <FrameComponent1
          frameHeaderFlex="unset"
          frameHeaderPosition="sticky"
          frameHeaderAlignSelf="stretch"
          frameHeaderTop="0"
          emptyRight="/frame-1000011793@2x.png"
        />
        <ContentParent>
          <Content>
            <UnlockRealWorldExperienceContainer>
              <UnlockRealWorld>{`Unlock Real-World `}</UnlockRealWorld>
              <Experience>Experience</Experience>
              <UnlockRealWorld> with Exclusive Student Hosting</UnlockRealWorld>
            </UnlockRealWorldExperienceContainer>
            <SubheadingContainer>
              <ImMinhajSadik>
                I’m Minhaj Sadik, and I specialize in software development and
                DevOps. My goal is to help businesses like yours create
                reliable, efficient, and scalable software. Here’s what I can do
                for you:
              </ImMinhajSadik>
            </SubheadingContainer>
            <ButtonContactUsParent>
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
                Get Started
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
            </ButtonContactUsParent>
          </Content>
          <ImageContainer>
            <ImageComponentsIcon
              loading="lazy"
              width={264}
              height={263}
              alt=""
              src="/rectangle-158@2x.png"
            />
            <ImageComponentsIcon1
              loading="lazy"
              width={264}
              height={263}
              alt=""
              src="/rectangle-159@2x.png"
            />
          </ImageContainer>
        </ContentParent>
      </FrameParent>
    </HostingInnerRoot>
  );
};

export default FrameComponent5;
