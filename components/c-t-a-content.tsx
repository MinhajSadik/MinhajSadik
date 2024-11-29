import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

export type CTAContentType = {
  className?: string;
  rectangle1: string;
};

const MinhajSadik = styled.b``;
const Span = styled.span`
  font-weight: 500;
`;
const MinhajSadik1 = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  display: inline-block;
  min-width: 432px;
  font-family: inherit;
  @media screen and (max-width: 1225px) {
    min-width: 100%;
  }
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-35xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const NameChild = styled(Image)`
  height: 119px;
  width: 119px;
  position: relative;
  border-radius: var(--br-40xl-5);
  object-fit: cover;
`;
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: inline-block;
  min-width: 38px;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-35xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const Name1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const SoftwareEngineer = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-gray-800);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-35xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const DevopsSpecialist = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-gray-800);
  text-align: right;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-35xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const BuildingScalableAnd = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 400;
  font-family: var(--font-inter);
  text-align: right;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const CtaContentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-90xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
`;

const CTAContent: NextPage<CTAContentType> = ({
  className = "",
  rectangle1,
}) => {
  return (
    <CtaContentRoot className={className}>
      <Name1>
        <MinhajSadik1>
          <MinhajSadik>Minhaj Sadik</MinhajSadik>
          <Span>{` `}</Span>
        </MinhajSadik1>
        <NameChild
          loading="lazy"
          width={119}
          height={119}
          alt=""
          src={rectangle1}
        />
        <H>-</H>
      </Name1>
      <SoftwareEngineer>{`Software Engineer &`}</SoftwareEngineer>
      <DevopsSpecialist>DevOps Specialist</DevopsSpecialist>
      <BuildingScalableAnd>
        Building scalable and secure architectures for modern applications.
      </BuildingScalableAnd>
    </CtaContentRoot>
  );
};

export default CTAContent;
