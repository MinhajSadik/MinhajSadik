import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import CTAContent from "./c-t-a-content";

export type FrameComponent1Type = {
  className?: string;
};

const BackgroundIcon = styled(Image)`
  height: 1013.4px;
  width: 1473.9px;
  position: absolute;
  margin: 0 !important;
  bottom: -62.1px;
  left: -1px;
`;
const FrameChild = styled(Image)`
  height: 957px;
  width: 1449.9px;
  position: absolute;
  margin: 0 !important;
  right: 29.1px;
  bottom: -70.7px;
  z-index: 1;
`;
const VectorIcon = styled(Image)`
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
  color: var(--color-goldenrod);
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
const ButtonContactUs = styled(Button)`
  height: 48px;
  flex: 1;
`;
const IconPlay = styled(Button)`
  height: 49px;
  width: 102px;
  cursor: pointer;
`;
const Buttons = styled.div`
  width: 245px;
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
const FrameItem = styled(Image)`
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
const ButtonContactUs1 = styled(Button)`
  height: 56px;
  flex: 1;
`;
const VectorIcon1 = styled(Image)`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
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
const ButtonContactUs2 = styled(Button)`
  height: 56px;
  width: 142px;
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
const Github = styled(Button)`
  height: 65px;
  width: 212px;
`;
const HackerrankLinkChild = styled(Image)`
  height: 130.3px;
  width: 239.9px;
  border-radius: var(--br-81xl);
  object-fit: contain;
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const HackerrankInner = styled(Button)`
  height: 65px;
  flex: 1;
  min-width: 177px;
  z-index: 1;
  margin-left: -44px;
  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const HackerrankLink = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  min-width: 305px;
  max-width: 100%;
  row-gap: 20px;
  z-index: 1;
  margin-left: -10px;
  @media screen and (max-width: 850px) {
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SocialMedia = styled.div`
  width: 670.9px;
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
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onIconPlayClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  return (
    <HomepageInnerRoot className={className}>
      <BackgroundParent>
        <BackgroundIcon
          width={1474}
          height={1013}
          alt=""
          src="/background.svg"
        />
        <FrameChild width={1450} height={957} alt="" src="/group-469388.svg" />
        <FrameParent>
          <LeftSideParent>
            <LeftSide>
              <LogoName>
                <VectorIcon width={31} height={27} alt="" src="/vector.svg" />
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
                <ButtonContactUs
                  startIcon={
                    <img width="24px" height="24px" src="/download02.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#353535",
                    border: "#ffda58 solid 1px",
                    borderRadius: "8px",
                    "&:hover": { background: "#353535" },
                    height: 48,
                  }}
                >
                  Resume
                </ButtonContactUs>
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
                    width: 102,
                    height: 49,
                  }}
                  onClick={onIconPlayClick}
                >
                  Contact
                </IconPlay>
              </Buttons>
            </RightSide>
            <FrameItem
              loading="lazy"
              width={35}
              height={27}
              alt=""
              src="/frame-1000011793@2x.png"
            />
          </LeftSideParent>
          <TitleParent>
            <Title>
              <CTAContent rectangle1="/rectangle-1@2x.png" />
              <ButtonDiv>
                <FrameGroup>
                  <ButtonContactUsParent>
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
                      Explore My Work
                    </ButtonContactUs1>
                    <IconPlay1>
                      <VectorIcon1
                        width={14}
                        height={15}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </IconPlay1>
                  </ButtonContactUsParent>
                  <ButtonContactUs2
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#212121",
                      fontSize: "18",
                      borderColor: "#6c757d",
                      borderRadius: "12px",
                      "&:hover": { borderColor: "#6c757d" },
                      width: 142,
                      height: 56,
                    }}
                  >
                    Contact Me
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
                <Github
                  startIcon={
                    <img width="28px" height="28px" src="/github.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#212121",
                    fontSize: "24",
                    background: "#fff",
                    border: "#212121 solid 2px",
                    borderRadius: "100px",
                    "&:hover": { background: "#fff" },
                    width: 212,
                    height: 65,
                  }}
                >
                  GitHub
                </Github>
                <HackerrankLink>
                  <HackerrankLinkChild
                    loading="lazy"
                    width={240}
                    height={130}
                    alt=""
                    src="/frame-4@2x.png"
                  />
                  <HackerrankInner
                    startIcon={
                      <img width="28px" height="28px" src="/hackerrank.svg" />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#212121",
                      fontSize: "24",
                      background: "#fff",
                      border: "#212121 solid 2px",
                      borderRadius: "100px",
                      "&:hover": { background: "#fff" },
                      height: 65,
                    }}
                  >
                    HackerRank
                  </HackerrankInner>
                </HackerrankLink>
              </SocialMedia>
            </FollowMinhajOnlineParent>
          </TitleParent>
        </FrameParent>
      </BackgroundParent>
    </HomepageInnerRoot>
  );
};

export default FrameComponent1;
