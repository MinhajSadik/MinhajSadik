import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent1 from "./frame-component1";

export type FrameComponent3Type = {
  className?: string;
};

const FrameChild = styled.div`
  width: 1px;
  flex: 1;
  position: relative;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const LineWrapper = styled.div`
  height: 567px;
  width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
`;
const FrameItem = styled.div`
  height: 567px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  right: 1px;
  bottom: -521px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const LineParent = styled.header`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const HelpingYou = styled.span`
  font-weight: 500;
`;
const Build = styled.span`
  font-weight: 600;
  color: var(--color-gray-100);
`;
const HelpingYouBuildContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
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
const ImMinhajSadikAndISpeciaWrapper = styled.div`
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
const VectorIcon = styled(Image)`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const ButtonContactUsParent = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const HelpingYouBuildBetterSoftwParent = styled.div`
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
const FrameInner = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-481xl);
  object-fit: cover;
`;
const RectangleIcon = styled(Image)`
  height: 263px;
  width: 263.6px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
`;
const RectangleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-42xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
  }
`;
const FrameContainer = styled.div`
  width: 1433.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
`;
const LineDiv = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  gap: var(--gap-91xl);
  max-width: 100%;
  margin-left: -1px;
  @media screen and (max-width: 850px) {
    gap: var(--gap-36xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-8xl);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
`;
const ServicesPageInnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl) var(--padding-72xl) var(--padding-12xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-500);
  font-family: var(--font-archivo);
  @media screen and (max-width: 850px) {
    padding-bottom: var(--padding-40xl);
    box-sizing: border-box;
  }
`;

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <ServicesPageInnerRoot className={className}>
      <FrameParent>
        <LineWrapper>
          <FrameChild />
        </LineWrapper>
        <FrameGroup>
          <FrameWrapper>
            <LineParent>
              <FrameItem />
              <FrameComponent1
                frameHeaderFlex="1"
                frameHeaderPosition="relative"
                frameHeaderAlignSelf="unset"
                frameHeaderTop="unset"
                emptyRight="/frame-10000117931@2x.png"
              />
            </LineParent>
          </FrameWrapper>
          <FrameContainer>
            <FrameDiv>
              <HelpingYouBuildBetterSoftwParent>
                <HelpingYouBuildContainer>
                  <HelpingYou>{`Helping You `}</HelpingYou>
                  <Build>Build</Build>
                  <HelpingYou> Better Software and Systems</HelpingYou>
                </HelpingYouBuildContainer>
                <ImMinhajSadikAndISpeciaWrapper>
                  <ImMinhajSadik>
                    I’m Minhaj Sadik, and I specialize in software development
                    and DevOps. My goal is to help businesses like yours create
                    reliable, efficient, and scalable software. Here’s what I
                    can do for you:
                  </ImMinhajSadik>
                </ImMinhajSadikAndISpeciaWrapper>
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
                    Explore My Services
                  </ButtonContactUs>
                  <IconPlay>
                    <VectorIcon
                      loading="lazy"
                      width={14}
                      height={15}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </IconPlay>
                </ButtonContactUsParent>
              </HelpingYouBuildBetterSoftwParent>
              <RectangleParent>
                <FrameInner
                  loading="lazy"
                  width={264}
                  height={263}
                  alt=""
                  src="/rectangle-1581@2x.png"
                />
                <RectangleIcon
                  loading="lazy"
                  width={264}
                  height={263}
                  alt=""
                  src="/rectangle-1591@2x.png"
                />
              </RectangleParent>
            </FrameDiv>
          </FrameContainer>
          <LineDiv />
        </FrameGroup>
      </FrameParent>
    </ServicesPageInnerRoot>
  );
};

export default FrameComponent3;
