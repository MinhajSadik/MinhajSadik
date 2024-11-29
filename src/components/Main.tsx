import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type MainType = {
  className?: string;
};

const ReadyToElevate = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  background: linear-gradient(180deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-15xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-6xl);
  }
`;
const Mail01Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const SupportingText = styled.div`
  position: relative;
  line-height: 24px;
`;
const Experinced = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Spesility = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  font-size: var(--font-size-base);
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const CallToAction = styled.div`
  width: 655px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    flex: 1;
    min-width: 100%;
  }
`;
const SupportingText1 = styled.div`
  position: relative;
  line-height: 24px;
  background: linear-gradient(180deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ContactMinhaj = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 124px;
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
const ContactButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Copyright = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  min-width: 346px;
  max-width: 100%;
  font-size: var(--font-size-base);
  @media screen and (max-width: 850px) {
    min-width: 100%;
  }
`;
const MainRoot = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-darkslategray-600);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-63xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-23xl);
  color: var(--color-gray-1000);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-22xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;

const Main: FunctionComponent<MainType> = memo(({ className = "" }) => {
  return (
    <MainRoot className={className}>
      <CallToAction>
        <ReadyToElevate>
          Ready to Elevate Your Skills or Start a Project?
        </ReadyToElevate>
        <Spesility>
          <Experinced>
            <Mail01Icon loading="lazy" alt="" src="/mail01.svg" />
            <SupportingText>+8801781583107</SupportingText>
          </Experinced>
          <Experinced>
            <Mail01Icon loading="lazy" alt="" src="/smartphone01.svg" />
            <SupportingText>minhaj@littleprogrammers.org</SupportingText>
          </Experinced>
        </Spesility>
      </CallToAction>
      <Copyright>
        <SupportingText1>
          Whether you want to learn new skills or need help with a project,
          Minhaj is here to support you. Check out his courses or reach out for
          a chat about your next project!
        </SupportingText1>
        <ContactButton>
          <ButtonContactUs>
            <ContactMinhaj>Contact Minhaj</ContactMinhaj>
          </ButtonContactUs>
          <IconPlay>
            <ArrowUpLeft01Icon loading="lazy" alt="" src="/arrowupleft01.svg" />
          </IconPlay>
        </ContactButton>
      </Copyright>
    </MainRoot>
  );
});

export default Main;