import { FunctionComponent, memo, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CTAContent from "./CTAContent";

export type FrameComponentType = {
  className?: string;
};

const BackgroundIcon = styled.img`
  height: 1013.4px;
  width: 1473.9px;
  position: absolute;
  margin: 0 !important;
  bottom: -62.1px;
  left: -1px;
`;
const FrameChild = styled.img`
  height: 957px;
  width: 1449.9px;
  position: absolute;
  margin: 0 !important;
  right: 29.1px;
  bottom: -70.7px;
  z-index: 1;
`;
const VectorIcon = styled.img`
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
const LogoName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
const LeftSide = styled.div`
  width: 509px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Home = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 600;
  color: inherit;
  display: inline-block;
  min-width: 47px;
`;
const NavigationItems = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) var(--padding-mini);
  color: var(--color-goldenrod-100);
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
`;
const Courses = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
`;
const MenuItems = styled.div`
  width: 382px;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  max-width: 100%;
  @media screen and (max-width: 1482px) {
    display: none;
  }
`;
const Download02Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Resume = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-size: var(--font-size-base);
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: right;
  display: inline-block;
  min-width: 62px;
`;
const ResumeDownload = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ButtonContactUs = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-goldenrod-100);
  padding: var(--padding-3xs) var(--padding-4xl);
  background-color: var(--color-darkslategray-100);
  flex: 1;
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Contact = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: right;
`;
const IconPlay = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-lgi);
  background-color: var(--color-goldenrod-100);
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-goldenrod-200);
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const RightSide = styled.div`
  width: 509px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
`;
const FrameItem = styled.img`
  height: 26.9px;
  width: 34.9px;
  margin: 0 !important;
  position: absolute;
  top: 5px;
  left: 876px;
  border-radius: var(--br-9xs);
  object-fit: contain;
  z-index: 1;
`;
const LeftSideParent = styled.header`
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs-9) var(--padding-5xl);
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 99;
  gap: var(--gap-0);
  row-gap: 20px;
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    width: calc(100% - 40px);
  }
`;
const ExploreMyWork = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
`;
const ButtonContactUs1 = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-goldenrod-100);
  padding: var(--padding-base) var(--padding-3xl);
  background-color: var(--color-gray-100);
  height: 56px;
  flex: 1;
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
const VectorIcon1 = styled.img`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const ButtonContactUsParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 157px;
`;
const ContactMe = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-gray-100);
  text-align: left;
  display: inline-block;
  min-width: 95px;
`;
const ButtonContactUs2 = styled.button`
  cursor: pointer;
  border: 1px solid var(--gray);
  padding: var(--padding-base) var(--padding-3xl);
  background-color: transparent;
  height: 56px;
  border-radius: var(--br-xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-lightslategray-200);
    border: 1px solid var(--color-lightslategray-100);
    box-sizing: border-box;
  }
`;
const FrameGroup = styled.div`
  width: 408px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const ButtonDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
`;
const Title = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-81xl);
  box-sizing: border-box;
  gap: var(--gap-29xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-5xl);
    padding-left: var(--padding-31xl);
    padding-right: var(--padding-31xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Follow = styled.span``;
const Minhaj = styled.span`
  font-weight: 500;
`;
const FollowMinhajOnlineContainer = styled.h3`
  margin: 0;
  height: 58px;
  width: 156px;
  position: relative;
  font-size: inherit;
  display: inline-block;
  flex-shrink: 0;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const GithubIcon = styled.img`
  height: 28px;
  width: 28px;
  position: relative;
`;
const Github = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: center;
  display: inline-block;
  min-width: 83px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Github1 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-gray-100);
  padding: var(--padding-mini) var(--padding-24xl);
  background-color: var(--color-white);
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  &:hover {
    background-color: var(--color-gainsboro);
    border: 2px solid var(--color-dimgray-100);
    box-sizing: border-box;
  }
`;
const HackerrankLinkChild = styled.img`
  height: 130.3px;
  width: 239.9px;
  border-radius: var(--br-81xl);
  object-fit: contain;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const Hackerrank = styled.div`
  width: 140px;
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: center;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const HackerrankInner = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-gray-100);
  padding: var(--padding-mini) var(--padding-26xl);
  background-color: var(--color-white);
  border-radius: var(--br-81xl);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-3xs);
  z-index: 1;
  margin-left: -44px;
  &:hover {
    background-color: var(--color-gainsboro);
    border: 2px solid var(--color-dimgray-100);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
    margin-left: 0;
  }
`;
const HackerrankLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  row-gap: 20px;
  max-width: 100%;
  z-index: 1;
  margin-left: -10px;
  @media screen and (max-width: 850px) {
    flex: 1;
    min-width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const FollowMinhajOnlineParent = styled.div`
  width: 1316.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const TitleParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-71xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-26xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-121xl);
  max-width: 100%;
  z-index: 2;
  @media screen and (max-width: 850px) {
    gap: var(--gap-51xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-16xl);
  }
`;
const BackgroundParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
`;
const HomepageInnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-90xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
`;

const FrameComponent: FunctionComponent<FrameComponentType> = memo(
  ({ className = "" }) => {
    const navigate = useNavigate();

    const onIconPlayClick = useCallback(() => {
      navigate("/contact-page");
    }, [navigate]);

    return (
      <HomepageInnerRoot className={className}>
        <BackgroundParent>
          <BackgroundIcon alt="" src="/background.svg" />
          <FrameChild alt="" src="/group-469388.svg" />
          <FrameParent>
            <LeftSideParent>
              <LeftSide>
                <LogoName>
                  <VectorIcon alt="" src="/vector.svg" />
                  <MinhajSadik>Minhaj Sadik</MinhajSadik>
                </LogoName>
              </LeftSide>
              <MenuItems>
                <NavigationItems>
                  <Home>Home</Home>
                </NavigationItems>
                <NavigationItems1>
                  <Services>Services</Services>
                </NavigationItems1>
                <NavigationItems1>
                  <Courses>Courses</Courses>
                </NavigationItems1>
                <NavigationItems1>
                  <Courses>Hosting</Courses>
                </NavigationItems1>
              </MenuItems>
              <RightSide>
                <Buttons>
                  <ButtonContactUs>
                    <ResumeDownload>
                      <Download02Icon alt="" src="/download02.svg" />
                      <Resume>Resume</Resume>
                    </ResumeDownload>
                  </ButtonContactUs>
                  <IconPlay onClick={onIconPlayClick}>
                    <Contact>Contact</Contact>
                  </IconPlay>
                </Buttons>
              </RightSide>
              <FrameItem loading="lazy" alt="" src="/frame-1000011793@2x.png" />
            </LeftSideParent>
            <TitleParent>
              <Title>
                <CTAContent rectangle1="/rectangle-1@2x.png" />
                <ButtonDiv>
                  <FrameGroup>
                    <ButtonContactUsParent>
                      <ButtonContactUs1>
                        <ExploreMyWork>Explore My Work</ExploreMyWork>
                      </ButtonContactUs1>
                      <IconPlay1>
                        <VectorIcon1 alt="" src="/vector-1.svg" />
                      </IconPlay1>
                    </ButtonContactUsParent>
                    <ButtonContactUs2>
                      <ContactMe>Contact Me</ContactMe>
                    </ButtonContactUs2>
                  </FrameGroup>
                </ButtonDiv>
              </Title>
              <FollowMinhajOnlineParent>
                <FollowMinhajOnlineContainer>
                  <Follow>{`Follow `}</Follow>
                  <Minhaj>Minhaj</Minhaj>
                  <Follow> online -</Follow>
                </FollowMinhajOnlineContainer>
                <SocialMedia>
                  <Github1>
                    <GithubIcon alt="" src="/github.svg" />
                    <Github>GitHub</Github>
                  </Github1>
                  <HackerrankLink>
                    <HackerrankLinkChild
                      loading="lazy"
                      alt=""
                      src="/frame-4@2x.png"
                    />
                    <HackerrankInner>
                      <GithubIcon alt="" src="/hackerrank.svg" />
                      <Hackerrank>HackerRank</Hackerrank>
                    </HackerrankInner>
                  </HackerrankLink>
                </SocialMedia>
              </FollowMinhajOnlineParent>
            </TitleParent>
          </FrameParent>
        </BackgroundParent>
      </HomepageInnerRoot>
    );
  }
);

export default FrameComponent;