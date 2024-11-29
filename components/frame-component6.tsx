import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import TestimonialRow from "./testimonial-row";

export type FrameComponent6Type = {
  className?: string;
};

const HostingFeatures = styled.h3`
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
const HostingFeaturesFor = styled.span``;
const HandsOn = styled.span`
  color: var(--color-gray-100);
`;
const HostingFeaturesForContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-gray-500);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const FeatureHeadingContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Hosting1 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--color-goldenrod);
  text-align: right;
  display: inline-block;
  min-width: 62px;
`;
const NavigationItems = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  background-color: var(--color-gray-100);
  flex: 1;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  &:hover {
    background-color: var(--color-dimgray-100);
  }
`;
const Domain1 = styled.div`
  align-self: stretch;
  position: relative;
  display: inline-block;
  min-width: 59px;
`;
const DomainNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) 0px 0px;
`;
const BottomNavigationBar = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-base) var(--padding-9xs) 0px;
  gap: var(--gap-base);
`;
const BottomNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-81xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FeatureInnermostContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const FeatureInnerContent = styled.div`
  width: 970px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-35xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
`;
const CompanyLogoIcon = styled(Image)`
  height: 70px;
  width: 70px;
  position: relative;
`;
const CompanyLogoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-12xs) 0px 0px;
`;
const SupportingText = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const More = styled.span`
  font-weight: 500;
  color: var(--greyscale-500);
`;
const SupportingText1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 20px;
`;
const SupportingTextWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs) 0px var(--padding-11xs);
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-300);
`;
const TestimonialRow1 = styled.div`
  flex: 1;
  border-radius: var(--br-481xl);
  background-color: var(--color-whitesmoke);
  border-top: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-44xl) var(--padding-52xl) var(--padding-126xl);
  gap: var(--gap-base);
  min-width: 327px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: var(--padding-22xl) var(--padding-xl) var(--padding-75xl);
    box-sizing: border-box;
  }
`;
const TestimonialGrid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  row-gap: 20px;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const TestimonialContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-50xl) 0px var(--padding-51xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-16xl);
    padding-right: var(--padding-15xl);
    box-sizing: border-box;
  }
`;
const Experience = styled.span`
  color: var(--color-white);
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
  width: 684px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  max-width: 114%;
`;
const LowerSubheadingContainer = styled.div`
  width: 605px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-gray-700);
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
const LowerContentInner = styled.div`
  width: 917px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const LowerContent = styled.div`
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 1;
  margin-top: -95px;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-300);
  font-family: var(--font-archivo);
  @media screen and (max-width: 1200px) {
    gap: var(--gap-11xl);
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-mini);
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const TestimonialContentParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--greyscale-500);
`;
const FeatureContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  max-width: 100%;
`;
const FeatureContentWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-14xl) var(--padding-61xl) var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1200px) {
    padding-bottom: var(--padding-33xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    padding-bottom: var(--padding-15xl);
    box-sizing: border-box;
  }
`;

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <FeatureContentWrapperRoot className={className}>
      <FeatureContent>
        <FeatureInnerContent>
          <FeatureInnermostContent>
            <FeatureHeadingContainer>
              <HostingFeatures>Hosting Features</HostingFeatures>
              <HostingFeaturesForContainer>
                <HostingFeaturesFor>{`Hosting Features for `}</HostingFeaturesFor>
                <HandsOn>Hands-On</HandsOn>
                <HostingFeaturesFor> Learning</HostingFeaturesFor>
              </HostingFeaturesForContainer>
            </FeatureHeadingContainer>
            <BottomNavigationContainer>
              <BottomNavigationBar>
                <NavigationItems>
                  <Hosting1>Hosting</Hosting1>
                </NavigationItems>
                <DomainNavItem>
                  <Domain1>Domain</Domain1>
                </DomainNavItem>
              </BottomNavigationBar>
            </BottomNavigationContainer>
          </FeatureInnermostContent>
        </FeatureInnerContent>
        <TestimonialContentParent>
          <TestimonialContent>
            <TestimonialGrid>
              <TestimonialRow supportingText="Real-Time Experimentation" />
              <TestimonialRow
                testimonialRowBorderTop="unset"
                testimonialRowBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                testimonialRowFlex="0.9796"
                supportingText="Student Access Control"
              />
              <TestimonialRow1>
                <CompanyLogoWrapper>
                  <CompanyLogoIcon
                    loading="lazy"
                    width={70}
                    height={70}
                    alt=""
                    src="/company-logo.svg"
                  />
                </CompanyLogoWrapper>
                <SupportingText>Essential Tools and Resources</SupportingText>
                <SupportingTextWrapper>
                  <SupportingText1>
                    <HostingFeaturesFor>{`Start by understanding client needs and project goals, ensuring a clear vision for the project. This includes meetings, research, and establishing objectives to align on a successful outcome. `}</HostingFeaturesFor>
                    <More>More</More>
                  </SupportingText1>
                </SupportingTextWrapper>
              </TestimonialRow1>
            </TestimonialGrid>
          </TestimonialContent>
          <LowerContent>
            <LowerContentInner>
              <UnlockRealWorldExperienceContainer>
                <HostingFeaturesFor>{`Unlock Real-World `}</HostingFeaturesFor>
                <Experience>Experience</Experience>
                <HostingFeaturesFor>
                  {" "}
                  with Exclusive Student Hosting
                </HostingFeaturesFor>
              </UnlockRealWorldExperienceContainer>
              <LowerSubheadingContainer>
                <ImMinhajSadik>
                  I’m Minhaj Sadik, and I specialize in software development and
                  DevOps. My goal is to help businesses like yours create
                  reliable, efficient, and scalable software. Here’s what I can
                  do for you:
                </ImMinhajSadik>
              </LowerSubheadingContainer>
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
            </LowerContentInner>
          </LowerContent>
        </TestimonialContentParent>
      </FeatureContent>
    </FeatureContentWrapperRoot>
  );
};

export default FrameComponent6;
