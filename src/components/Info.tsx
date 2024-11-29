import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type InfoType = {
  className?: string;
};

const BrandingIcon = styled.img`
  height: 27.2px;
  width: 30.9px;
  position: relative;
  object-fit: contain;
`;
const MinhajSadik = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
const LeftSide = styled.div`
  width: 478.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Home = styled.div`
  flex: 1;
  position: relative;
`;
const NavigationItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
`;
const Services = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 67px;
`;
const NavigationItems1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
  box-sizing: border-box;
  min-width: 64px;
`;
const Hosting = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 60px;
`;
const MenuItems = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const GithubIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const IconSocialMedia = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-smi-5) var(--padding-xs);
`;
const IconSocialMediaParent = styled.div`
  width: 163px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const RightSide = styled.div`
  width: 478.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs-2);
  box-sizing: border-box;
  max-width: 100%;
`;
const LeftSideParent = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-100);
  border-bottom: 1px solid var(--color-gray-900);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px var(--padding-3xl);
  row-gap: 20px;
  max-width: 100%;
  gap: var(--gap-0);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
`;
const SupportingText = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  max-width: 100%;
`;
const SupportingText1 = styled.div`
  width: 136px;
  position: relative;
  line-height: 24px;
  display: inline-block;
  flex-shrink: 0;
`;
const SupportingText2 = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  min-width: 106px;
`;
const Links = styled.div`
  width: 282px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-23xl);
  @media screen and (max-width: 450px) {
    gap: var(--gap-2xl);
  }
`;
const Legal = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  max-width: 100%;
  text-align: left;
  color: var(--color-gray-1000);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const InfoRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;

const Info: FunctionComponent<InfoType> = memo(({ className = "" }) => {
  return (
    <InfoRoot className={className}>
      <LeftSideParent>
        <LeftSide>
          <Content>
            <BrandingIcon loading="lazy" alt="" src="/vector.svg" />
            <MinhajSadik>Minhaj Sadik</MinhajSadik>
          </Content>
        </LeftSide>
        <MenuItems>
          <NavigationItems>
            <Home>Home</Home>
          </NavigationItems>
          <NavigationItems1>
            <Services>Services</Services>
          </NavigationItems1>
          <NavigationItems1>
            <Home>Courses</Home>
          </NavigationItems1>
          <NavigationItems>
            <Hosting>Hosting</Hosting>
          </NavigationItems>
        </MenuItems>
        <RightSide>
          <IconSocialMediaParent>
            <IconSocialMedia>
              <GithubIcon loading="lazy" alt="" src="/github-1.svg" />
            </IconSocialMedia>
            <IconSocialMedia>
              <GithubIcon loading="lazy" alt="" src="/linkedin02.svg" />
            </IconSocialMedia>
            <IconSocialMedia>
              <GithubIcon loading="lazy" alt="" src="/hackerrank-1.svg" />
            </IconSocialMedia>
          </IconSocialMediaParent>
        </RightSide>
      </LeftSideParent>
      <Legal>
        <SupportingText>
          © 2024 Minhaj Sadik. All rights reserved. | Designed by Dipu Paul
        </SupportingText>
        <Links>
          <SupportingText1>Terms of services</SupportingText1>
          <SupportingText2>Privacy Policy</SupportingText2>
        </Links>
      </Legal>
    </InfoRoot>
  );
});

export default Info;