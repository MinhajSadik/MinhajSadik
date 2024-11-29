import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import Fwatures from "./fwatures";

export type FrameComponent7Type = {
  className?: string;
};

const PricingPlans = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const ChooseThe = styled.span``;
const Plan = styled.span`
  color: var(--color-gray-100);
`;
const ChooseThePlanContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  color: var(--color-gray-500);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const PricingInnerContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;
const IconPlay = styled(Button)`
  height: 50px;
  width: 104px;
`;
const ButtonContactUs = styled(Button)`
  height: 50px;
  flex: 1;
`;
const ToggleContainer = styled.div`
  width: 217px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const IconStudentChild = styled(Image)`
  width: 20px;
  height: 18px;
  position: relative;
`;
const IconStudent = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lgi) var(--padding-lg);
`;
const Student = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const PerfectForStudents = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 22px;
`;
const PlanNames = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Placeholder = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const PerMonth = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 22px;
`;
const PriceContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: var(--font-size-41xl);
`;
const ButtonContactUs1 = styled(Button)`
  height: 56px;
  flex: 1;
  min-width: 206px;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ArrowUpLeft01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const PlanButtonContainers = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Features = styled.div`
  position: relative;
  line-height: 22px;
  font-weight: 500;
`;
const FeatureRows = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
`;
const FeatureLists = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-gray-600);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-78xl) 0px 0px;
  gap: var(--gap-13xl);
  font-size: var(--font-size-lg);
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const PlanItems = styled.div`
  flex: 1;
  border-radius: var(--br-5xl) var(--br-5xl) 0px 0px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  min-width: 274px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const CrownIcon = styled(Image)`
  width: 24px;
  height: 24px;
  position: relative;
`;
const IconStudent1 = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const FeaturesParent = styled.div`
  align-self: stretch;
  border-top: 1px solid var(--color-gray-400);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xl) var(--padding-135xl) 0px 0px;
  gap: var(--gap-13xl);
  font-size: var(--font-size-lg);
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const PlanItems1 = styled.div`
  flex: 1;
  border-radius: var(--br-5xl) var(--br-5xl) 0px 0px;
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  min-width: 274px;
  max-width: 100%;
  color: var(--color-gray-100);
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const PlanContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const PricingOptions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  color: var(--color-white);
  @media screen and (max-width: 450px) {
    gap: var(--gap-6xl);
  }
`;
const PricingContent = styled.div`
  width: 866px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-6xl);
  }
`;
const PricingContentWrapperRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <PricingContentWrapperRoot className={className}>
      <PricingContent>
        <PricingInnerContent>
          <PricingPlans>Pricing Plans</PricingPlans>
          <ChooseThePlanContainer>
            <ChooseThe>{`Choose the `}</ChooseThe>
            <Plan>Plan</Plan>
            <ChooseThe>{` That Fits Your `}</ChooseThe>
            <Plan>Needs</Plan>
          </ChooseThePlanContainer>
        </PricingInnerContent>
        <PricingOptions>
          <ToggleContainer>
            <IconPlay
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#212121",
                fontSize: "16",
                background: "#ffda58",
                borderRadius: "8px",
                "&:hover": { background: "#ffda58" },
                width: 104,
                height: 50,
              }}
            >
              Monthly
            </IconPlay>
            <ButtonContactUs
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#212121",
                fontSize: "16",
                background: "#f6f6f6",
                border: "#ffda58 solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#f6f6f6" },
                height: 50,
              }}
            >
              Annually
            </ButtonContactUs>
          </ToggleContainer>
          <PlanContainer>
            <PlanItems>
              <IconStudent>
                <IconStudentChild
                  width={20}
                  height={18}
                  alt=""
                  src="/group-469395.svg"
                />
              </IconStudent>
              <PlanNames>
                <Student>Student</Student>
                <PerfectForStudents>
                  Perfect for students exploring real-time coding and DevOps
                  experimentation.
                </PerfectForStudents>
              </PlanNames>
              <PriceContainers>
                <Placeholder>$1</Placeholder>
                <PerMonth>/per month</PerMonth>
              </PriceContainers>
              <PlanButtonContainers>
                <ButtonContactUs1
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#353535",
                    border: "#ffda58 solid 1px",
                    borderRadius: "12px",
                    "&:hover": { background: "#353535" },
                    height: 56,
                  }}
                >
                  Get Started
                </ButtonContactUs1>
                <IconPlay1>
                  <ArrowUpLeft01Icon
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/arrowupleft01.svg"
                  />
                </IconPlay1>
              </PlanButtonContainers>
              <FeatureLists>
                <Features>Features</Features>
                <FeatureRows>
                  <Fwatures
                    checkmarkCircle02="/checkmarkcircle02.svg"
                    sharedBandwidth="Shared bandwidth"
                  />
                  <Fwatures
                    checkmarkCircle02="/checkmarkcircle02.svg"
                    checkmarkCircle02IconMargin="unset"
                    sharedBandwidth="Secure student-only access"
                    sharedBandwidthWidth="185px"
                    sharedBandwidthDisplay="inline-block"
                    sharedBandwidthHeight="unset"
                    sharedBandwidthColor="rgba(255, 255, 255, 0.7)"
                  />
                  <Fwatures
                    checkmarkCircle02="/checkmarkcircle02.svg"
                    checkmarkCircle02IconMargin="unset"
                    sharedBandwidth="Essential tools for hands-on learning"
                    sharedBandwidthWidth="unset"
                    sharedBandwidthDisplay="inline-block"
                    sharedBandwidthHeight="22px"
                    sharedBandwidthColor="rgba(255, 255, 255, 0.7)"
                  />
                  <Fwatures
                    checkmarkCircle02="/checkmarkcircle02.svg"
                    checkmarkCircle02IconMargin="unset"
                    sharedBandwidth="24/7 basic support"
                    sharedBandwidthWidth="unset"
                    sharedBandwidthDisplay="unset"
                    sharedBandwidthHeight="unset"
                    sharedBandwidthColor="rgba(255, 255, 255, 0.7)"
                  />
                </FeatureRows>
              </FeatureLists>
            </PlanItems>
            <PlanItems1>
              <IconStudent1>
                <CrownIcon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/crown.svg"
                />
              </IconStudent1>
              <PlanNames>
                <Student>Regular</Student>
                <PerfectForStudents>
                  Perfect for students exploring real-time coding and DevOps
                  experimentation.
                </PerfectForStudents>
              </PlanNames>
              <PriceContainers>
                <Placeholder>$5</Placeholder>
                <PerMonth>/per month</PerMonth>
              </PriceContainers>
              <PlanButtonContainers>
                <ButtonContactUs1
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
                </ButtonContactUs1>
                <IconPlay1>
                  <ArrowUpLeft01Icon
                    width={24}
                    height={24}
                    alt=""
                    src="/arrowupleft01.svg"
                  />
                </IconPlay1>
              </PlanButtonContainers>
              <FeaturesParent>
                <Features>Features</Features>
                <PlanNames>
                  <Fwatures
                    checkmarkCircle02IconMargin="0"
                    sharedBandwidth="Shared bandwidth"
                    sharedBandwidthWidth="unset"
                    sharedBandwidthDisplay="unset"
                    sharedBandwidthHeight="unset"
                    sharedBandwidthColor="#212121"
                  />
                  <Fwatures
                    checkmarkCircle02IconMargin="0"
                    sharedBandwidth="Secure student-only access"
                    sharedBandwidthWidth="unset"
                    sharedBandwidthDisplay="inline-block"
                    sharedBandwidthHeight="22px"
                    sharedBandwidthColor="#212121"
                  />
                  <Fwatures
                    checkmarkCircle02IconMargin="0"
                    sharedBandwidth="Scalable storage options"
                    sharedBandwidthWidth="164px"
                    sharedBandwidthDisplay="inline-block"
                    sharedBandwidthHeight="unset"
                    sharedBandwidthColor="#212121"
                  />
                  <Fwatures
                    checkmarkCircle02IconMargin="0"
                    sharedBandwidth="24/7 basic support"
                    sharedBandwidthWidth="unset"
                    sharedBandwidthDisplay="unset"
                    sharedBandwidthHeight="unset"
                    sharedBandwidthColor="#212121"
                  />
                </PlanNames>
              </FeaturesParent>
            </PlanItems1>
          </PlanContainer>
        </PricingOptions>
      </PricingContent>
    </PricingContentWrapperRoot>
  );
};

export default FrameComponent7;
