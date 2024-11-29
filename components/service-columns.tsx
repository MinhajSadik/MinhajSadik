import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import CloudDetails from "./cloud-details";

export type ServiceColumnsType = {
  className?: string;
};

const Service = styled.div`
  position: relative;
  display: inline-block;
  min-width: 108px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const DevopsServices = styled.h1`
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
const IBuildCustom = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
`;
const DevOpsDetails = styled.div`
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
const Service2Parent = styled.div`
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
const ServiceColumnsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-111xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
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

const ServiceColumns: NextPage<ServiceColumnsType> = ({ className = "" }) => {
  return (
    <ServiceColumnsRoot className={className}>
      <Service2Parent>
        <Service>Service 2</Service>
        <DevopsServices>DevOps Services</DevopsServices>
        <IBuildCustom>
          I build custom software tailored to your needs. Whether you need a new
          app or want to improve your existing system, I’m here to help.
        </IBuildCustom>
        <DevOpsDetails>
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
        </DevOpsDetails>
      </Service2Parent>
      <ServiceColumnsChild
        loading="lazy"
        width={548}
        height={500}
        alt=""
        src="/rectangle-163-1@2x.png"
      />
    </ServiceColumnsRoot>
  );
};

export default ServiceColumns;
