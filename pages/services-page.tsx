import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent3 from "../components/frame-component3";
import styled from "styled-components";
import CloudDetails from "../components/cloud-details";
import ServiceColumns from "../components/service-columns";
import FrameComponent4 from "../components/frame-component4";
import Footer from "../components/footer";

const ServiceColumnsChild = styled(Image)`
  width: 548px;
  position: relative;
  border-radius: var(--br-5xl);
  max-height: 100%;
  object-fit: cover;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
`;
const Service = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const SoftwareDevelopment = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-gray-500);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const IBuildCustom = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
`;
const ServiceDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const Service1Parent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  min-width: 401px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
`;
const ServiceColumns1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-111xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-46xl);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-13xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const Service1 = styled.div`
  position: relative;
  display: inline-block;
  min-width: 109px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const CloudSolutions = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-41xl);
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-gray-500);
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const ServiceColumnsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 80px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: 40px;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const ServicesPageInner = styled.section`
  width: 1451px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 78px 121px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-20xl);
    padding-right: var(--padding-20xl);
    padding-bottom: 51px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-14xl);
    box-sizing: border-box;
  }
`;
const ServicesPageRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 32.5px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const ServicesPage: NextPage = () => {
  return (
    <ServicesPageRoot>
      <FrameComponent3 />
      <ServicesPageInner>
        <ServiceColumnsParent>
          <ServiceColumns1>
            <ServiceColumnsChild
              loading="lazy"
              width={548}
              height={500}
              alt=""
              src="/rectangle-163@2x.png"
            />
            <Service1Parent>
              <Service>Service 1</Service>
              <SoftwareDevelopment>Software Development</SoftwareDevelopment>
              <IBuildCustom>
                I build custom software tailored to your needs. Whether you need
                a new app or want to improve your existing system, I’m here to
                help.
              </IBuildCustom>
              <ServiceDetails>
                <CloudDetails
                  customApps="Custom Apps"
                  letsBuildAnAppThatFitsYour="Let’s build an app that fits your business perfectly."
                />
                <CloudDetails
                  frameDivWidth="unset"
                  frameDivPadding="unset"
                  customApps="Microservices"
                  customAppsMinWidth="121px"
                  letsBuildAnAppThatFitsYour="Break your software into smaller, more manageable parts for better performance."
                />
                <CloudDetails
                  frameDivWidth="151px"
                  frameDivPadding="0px 0px 0px 0px"
                  customApps="System Design"
                  customAppsMinWidth="129px"
                  letsBuildAnAppThatFitsYour="Break your software into smaller, more manageable parts for better performance."
                />
              </ServiceDetails>
            </Service1Parent>
          </ServiceColumns1>
          <ServiceColumns />
          <ServiceColumns1>
            <ServiceColumnsChild
              loading="lazy"
              width={548}
              height={500}
              alt=""
              src="/rectangle-164@2x.png"
            />
            <Service1Parent>
              <Service1>Service 3</Service1>
              <CloudSolutions>Cloud Solutions</CloudSolutions>
              <IBuildCustom>
                I build custom software tailored to your needs. Whether you need
                a new app or want to improve your existing system, I’m here to
                help.
              </IBuildCustom>
              <ServiceDetails>
                <CloudDetails
                  frameDivWidth="unset"
                  frameDivPadding="unset"
                  customApps="Custom Apps"
                  customAppsMinWidth="116px"
                  letsBuildAnAppThatFitsYour="Let’s build an app that fits your business perfectly."
                />
                <CloudDetails
                  frameDivWidth="unset"
                  frameDivPadding="unset"
                  customApps="Microservices"
                  customAppsMinWidth="121px"
                  letsBuildAnAppThatFitsYour="Break your software into smaller, more manageable parts for better performance."
                />
                <CloudDetails
                  frameDivWidth="151px"
                  frameDivPadding="0px 0px 0px 0px"
                  customApps="System Design"
                  customAppsMinWidth="129px"
                  letsBuildAnAppThatFitsYour="Break your software into smaller, more manageable parts for better performance."
                />
              </ServiceDetails>
            </Service1Parent>
          </ServiceColumns1>
        </ServiceColumnsParent>
      </ServicesPageInner>
      <FrameComponent4 />
      <Footer
        footerAlignSelf="stretch"
        footerPosition="unset"
        footerTop="unset"
        footerLeft="unset"
        menuItemsOverflowX="auto"
        menuItemsRowGap="unset"
        navigationItemsFlex="unset"
        navigationItemsMinWidth="unset"
        servicesTextDecoration="unset"
        navigationItemsFlex1="unset"
        navigationItemsMinWidth1="unset"
        coursesDisplay="inline-block"
        coursesMinWidth="64px"
        navigationItemsFlex2="unset"
        navigationItemsMinWidth2="unset"
        hostingDisplay="inline-block"
        hostingMinWidth="60px"
        hostingTextDecoration="unset"
      />
    </ServicesPageRoot>
  );
};

export default ServicesPage;
