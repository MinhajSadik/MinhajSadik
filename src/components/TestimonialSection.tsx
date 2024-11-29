import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type TestimonialSectionType = {
  className?: string;
};

const Testimonials = styled.h3`
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
const WhatClients = styled.h1`
  margin: 0;
  height: 146px;
  position: relative;
  font-size: var(--font-size-41xl);
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xs);
  max-width: 100%;
`;
const TestimonialHeader = styled.div`
  width: 862px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: var(--gap-6xl);
  }
`;
const ClientImageIcon = styled.img`
  height: 293.7px;
  width: 423.3px;
  border-radius: var(--br-base);
  object-fit: contain;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    flex: 1;
  }
`;
const QuotationMarksIcon = styled.img`
  border: none;
  background-color: transparent;
  height: 303.2px;
  width: 428.4px;
  outline: none;
  border-radius: var(--br-base);
  object-fit: contain;
  max-width: 100%;
  z-index: 1;
  margin-left: -83px;
  @media screen and (max-width: 850px) {
    flex: 1;
    margin-left: 0;
  }
`;
const Quote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  min-width: 768.7px;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 1482px) {
    flex: 1;
  }
  @media screen and (max-width: 1225px) {
    flex: 1;
    min-width: 100%;
  }
  @media screen and (max-width: 850px) {
    flex: 1;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const SupportingText = styled.blockquote`
  margin: 0;
  position: relative;
  line-height: 24px;
`;
const ProfilePictureIcon = styled.img`
  height: 48px;
  width: 48px;
  position: relative;
  border-radius: var(--br-5xl);
  object-fit: cover;
`;
const SupportingText1 = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const SupportingText2 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  color: var(--greyscale-300);
`;
const Details1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const Info1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Client = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Content = styled.div`
  border-radius: var(--br-base);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-23xl);
  min-width: 458px;
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    flex: 1;
  }
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-2xl);
  }
`;
const NextIcon = styled.img`
  height: 303.2px;
  width: 428.4px;
  border-radius: var(--br-base);
  object-fit: contain;
  max-width: 100%;
  z-index: 1;
  margin-left: -83px;
  @media screen and (max-width: 850px) {
    flex: 1;
    margin-left: 0;
  }
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.4;
  min-width: 768.7px;
  row-gap: 20px;
  max-width: 100%;
  z-index: 1;
  margin-left: -54px;
  @media screen and (max-width: 1225px) {
    flex: 1;
    min-width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const Feedback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  max-width: 100%;
  z-index: 2;
  margin-left: -50px;
  @media screen and (max-width: 1482px) {
    flex: 1;
    min-width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 1225px) {
    flex: 1;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const Quotes = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 0px;
  box-sizing: border-box;
  row-gap: 20px;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-base);
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
const Content1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-25xl);
  background-image: url("/content@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-3xl);
    padding-top: var(--padding-151xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const TestimonialSectionRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
  margin-top: -150px;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const TestimonialSection: FunctionComponent<TestimonialSectionType> = memo(
  ({ className = "" }) => {
    return (
      <TestimonialSectionRoot className={className}>
        <Content1>
          <TestimonialHeader>
            <Header>
              <Testimonials>Testimonials</Testimonials>
              <WhatClients>{`What Clients & Colleagues Say`}</WhatClients>
            </Header>
          </TestimonialHeader>
          <Quotes>
            <Quote>
              <ClientImageIcon alt="" src="/client-image@2x.png" />
              <QuotationMarksIcon
                rows={15}
                cols={21}
                alt=""
                src="/quotation-marks@2x.png"
              />
            </Quote>
            <Feedback>
              <Content>
                <SupportingText>
                  “ Working with Minhaj has been a game-changer for our project.
                  His expertise in DevOps and microservices architecture allowed
                  us to scale efficiently and deliver releases much faster. His
                  proactive approach and attention to detail have been
                  invaluable to our team “
                </SupportingText>
                <Client>
                  <Info1>
                    <ProfilePictureIcon
                      loading="lazy"
                      alt=""
                      src="/rectangle-144@2x.png"
                    />
                    <Details1>
                      <SupportingText1>Dipu paul</SupportingText1>
                      <SupportingText2>UI UX Designer</SupportingText2>
                    </Details1>
                  </Info1>
                </Client>
              </Content>
              <Navigation>
                <ClientImageIcon alt="" src="/frame-1000011759-1@2x.png" />
                <NextIcon
                  loading="lazy"
                  alt=""
                  src="/frame-1000011760-1@2x.png"
                />
              </Navigation>
            </Feedback>
          </Quotes>
        </Content1>
      </TestimonialSectionRoot>
    );
  }
);

export default TestimonialSection;