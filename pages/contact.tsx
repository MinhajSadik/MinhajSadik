import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent from "../components/frame-component";
import Input1 from "../components/input1";
import { useRouter } from "next/router";
import VisionGoalItems from "../components/vision-goal-items";

const ContactChild = styled.div`
  align-self: stretch;
  display: none;
  z-index: 0;
`;
const Content = styled.div`
  height: 958px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 2;
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
const VectorParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-mini) var(--padding-2xs)
    var(--padding-base);
  gap: var(--gap-5xs);
`;
const LeftSide = styled.div`
  width: 519.5px;
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
  color: inherit;
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
`;
const MenuItems = styled.nav`
  margin: 0;
  width: 361px;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  @media screen and (max-width: 1482px) {
    display: none;
  }
`;
const Download = styled.input`
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
`;
const Resume = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 62px;
`;
const ResumeButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ButtonContactUs = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  border: 1px solid var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-4xl);
`;
const Contact1 = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 600;
  color: inherit;
`;
const IconPlay = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-lgi);
  color: var(--color-gray-100);
`;
const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const RightSide = styled.div`
  width: 519.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  max-width: 100%;
`;
const LeftContentChild = styled(Image)`
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
const LeftContent = styled.header`
  flex: 1;
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs-9) var(--padding-5xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  gap: var(--gap-0);
  row-gap: 20px;
  z-index: 1;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const LeftContentWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xl) var(--padding-6xs);
  box-sizing: border-box;
  top: 0;
  z-index: 99;
  position: sticky;
  max-width: 100%;
`;
const MinhajSadik1 = styled.b``;
const Span = styled.span`
  font-weight: 500;
`;
const MinhajSadik2 = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  display: inline-block;
  min-width: 432px;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-35xl);
    min-width: 100%;
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
  @media screen and (max-width: 850px) {
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
const BuildingScalableAnd = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  font-family: var(--font-inter);
  text-align: right;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const CtaContent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const ExploreMyWork = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
`;
const ButtonContactUs1 = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-goldenrod);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-3xl);
`;
const Vector = styled.input`
  margin: 0;
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
const ContactMe = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 95px;
`;
const ButtonContactUs2 = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  border: 1px solid var(--color-slategray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-3xl);
  color: var(--color-gray-100);
`;
const ButtonOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const ButtonDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-white);
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
const FollowMinhajOnlineContainer = styled.div`
  width: 156px;
  position: relative;
  letter-spacing: -0.08px;
  display: inline-block;
  flex-shrink: 0;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Github = styled(Button)`
  height: 65px;
  width: 212px;
`;
const GithubOne = styled.div`
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
const TitleInner = styled.div`
  position: absolute;
  top: 133px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-71xl);
  max-width: 100%;
  z-index: 1;
  @media screen and (max-width: 850px) {
    gap: var(--gap-26xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const GetInTouch = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 600;
  color: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const InputFields = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ButtonContactUs3 = styled(Button)`
  height: 56px;
  flex: 1;
`;
const SentIcon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const IconPlay2 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const ButtonContactUsParent = styled.div`
  width: 163px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Form = styled.form`
  margin: 0;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const ContactForm = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-19xl) 39px var(--padding-19xl) var(--padding-19xl);
  gap: var(--gap-base);
`;
const Github1 = styled(Button)`
  width: 153px;
`;
const HackerrankTwoChild = styled(Image)`
  height: 110.2px;
  width: 171.5px;
  border-radius: var(--br-81xl);
  object-fit: contain;
`;
const HackerrankLinkTwo = styled(Button)`
  height: 56px;
  flex: 1;
  z-index: 1;
  margin-left: -44px;
`;
const HackerrankTwo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  min-width: 216px;
  max-width: 100%;
  z-index: 1;
  margin-left: -10px;
  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;
const SocialLinksTwo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-end;
  padding: var(--padding-5xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  row-gap: 20px;
`;
const Mail01Icon = styled(Image)`
  height: 32px;
  width: 32px;
  position: relative;
`;
const SupportingText = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 19px;
  }
`;
const Experinced = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const SupportingText1 = styled.div`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 19px;
  }
`;
const Support = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const Spesility = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xl);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-44xl) var(--padding-5xl)
    var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const LinksTwo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  color: var(--color-white);
`;
const ContactFormParent = styled.div`
  position: absolute;
  top: 0px;
  left: 517px;
  width: 477px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 6;
  text-align: left;
  font-size: var(--font-size-5xl);
  font-family: var(--font-inter);
`;
const IconPlay3 = styled.div`
  position: absolute;
  top: 16px;
  left: 1010px;
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-base);
  box-sizing: border-box;
  cursor: pointer;
  z-index: 6;
`;
const TitleInnerParent = styled.div`
  align-self: stretch;
  height: 843.3px;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    height: auto;
    min-height: 843.3;
  }
`;
const AboutInnerTwoChild = styled.div`
  align-self: stretch;
  height: 263px;
`;
const VisionGoalParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  z-index: 1;
  margin-top: -17px;
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  flex-shrink: 0;
`;
const ContentAboutUs = styled.div`
  height: 30.7px;
  flex: 1;
  border-radius: var(--br-5xl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-46xl) var(--padding-46xl) 0px;
  box-sizing: border-box;
  background-image: url("/content-about-us1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    height: auto;
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const ContentAboutUsWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xl);
  box-sizing: border-box;
  min-height: 554px;
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  height: 957px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    height: auto;
  }
`;
const ContentParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-6xl);
  box-sizing: border-box;
  gap: var(--gap-12xs);
  flex-shrink: 0;
  max-width: 100%;
`;
const Minhaj = styled.h1`
  margin: 0 !important;
  position: absolute;
  right: 90px;
  bottom: -232.3px;
  font-size: var(--font-size-320xl);
  line-height: 198px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-gray-300);
  text-align: left;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-117xl);
    line-height: 119px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-66xl);
    line-height: 79px;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  backdrop-filter: blur(11px);
  background-color: var(--color-gray-400);
  z-index: 4;
`;
const FrameChild = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 97px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const FrameItem = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 360.6px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 2;
`;
const FrameInner = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 624.2px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const RectangleIcon = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 887.8px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 2;
`;
const FrameChild1 = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 1151.4px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const Content1 = styled.div`
  height: 1px;
  width: 1450.9px;
  position: absolute;
  margin: 0 !important;
  bottom: 308px;
  left: 31px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 2;
`;
const Content2 = styled.div`
  height: 926px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: 57px;
  right: 80.9px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 3;
`;
const Content3 = styled.div`
  height: 930px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: 53px;
  left: 32px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 3;
`;
const BackgroundIcon = styled(Image)`
  height: 1101px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  z-index: 5;
`;
const Content4 = styled.div`
  height: 991px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 518px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 7;
`;
const Content5 = styled.div`
  height: 991px;
  width: 1px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 565.9px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 7;
`;
const Content6 = styled.div`
  height: 1px;
  width: 1513.1px;
  position: absolute;
  margin: 0 !important;
  top: 109px;
  left: -0.1px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 8;
`;
const Content7 = styled.div`
  height: 1px;
  width: 1513.1px;
  position: absolute;
  margin: 0 !important;
  bottom: 226px;
  left: -1.1px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 8;
`;
const ContentGroup = styled.main`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1561.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RectangleParent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Architectures = styled.div`
  position: relative;
  font-weight: 500;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const ArchitecturesWrapper = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl) var(--padding-7xl)
    var(--padding-5xl);
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Microservice = styled.div`
  position: relative;
  line-height: 90px;
  font-weight: 500;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const ItemDetails = styled.h1`
  margin: 0;
  width: 42px;
  height: 77px;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  display: inline-block;
  flex-shrink: 0;
`;
const ArchitectureTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  font-size: var(--font-size-61xl);
  font-family: var(--font-inter);
`;
const ClientServer = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 90px;
  font-weight: 500;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const TechnologiesWrapper = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl) var(--padding-7xl)
    var(--padding-5xl);
  flex-shrink: 0;
`;
const Items1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-44xl) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Prototype = styled.div`
  position: relative;
  line-height: 90px;
  font-weight: 500;
  flex-shrink: 0;
  z-index: 1;
  margin-left: -87px;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Prototype1 = styled.div`
  position: relative;
  line-height: 90px;
  font-weight: 500;
  flex-shrink: 0;
  margin-left: -87px;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Prototypes = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
`;
const Items2 = styled.footer`
  align-self: stretch;
  width: 1448px;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-12xl-1);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-600);
  font-family: var(--font-archivo);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;
const ItemsWrapper = styled.div`
  align-self: stretch;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-12xl) 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const ContactRoot = styled.div`
  width: 100%;
  height: 982px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-520xl-3);
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: var(--font-size-90xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
  @media screen and (max-width: 850px) {
    height: auto;
    gap: var(--gap-251xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-116xl);
  }
`;

const Contact: NextPage = () => {
  const router = useRouter();

  const onIconPlayContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <ContactRoot>
      <ContactChild />
      <ContentParent>
        <Content />
        <FrameWrapper>
          <FrameParent>
            <LeftContentWrapper>
              <LeftContent>
                <LeftSide>
                  <VectorParent>
                    <VectorIcon
                      width={31}
                      height={27}
                      alt=""
                      src="/vector.svg"
                    />
                    <MinhajSadik>Minhaj Sadik</MinhajSadik>
                  </VectorParent>
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
                  <NavigationItems1>
                    <Home>Hosting</Home>
                  </NavigationItems1>
                </MenuItems>
                <RightSide>
                  <RightContent>
                    <ButtonContactUs>
                      <ResumeButton>
                        <Download type="checkbox" />
                        <Resume>Resume</Resume>
                      </ResumeButton>
                    </ButtonContactUs>
                    <IconPlay>
                      <Contact1>Contact</Contact1>
                    </IconPlay>
                  </RightContent>
                </RightSide>
                <LeftContentChild
                  width={35}
                  height={27}
                  alt=""
                  src="/frame-1000011793@2x.png"
                />
              </LeftContent>
            </LeftContentWrapper>
            <TitleInnerParent>
              <TitleInner>
                <Title>
                  <CtaContent1>
                    <Name1>
                      <MinhajSadik2>
                        <MinhajSadik1>Minhaj Sadik</MinhajSadik1>
                        <Span>{` `}</Span>
                      </MinhajSadik2>
                      <NameChild
                        loading="lazy"
                        width={119}
                        height={119}
                        alt=""
                        src="/rectangle-11@2x.png"
                      />
                      <H>-</H>
                    </Name1>
                    <SoftwareEngineer>{`Software Engineer &`}</SoftwareEngineer>
                    <DevopsSpecialist>DevOps Specialist</DevopsSpecialist>
                    <BuildingScalableAnd>
                      Building scalable and secure architectures for modern
                      applications.
                    </BuildingScalableAnd>
                  </CtaContent1>
                  <ButtonDiv>
                    <ButtonOne>
                      <RightContent>
                        <ButtonContactUs1>
                          <ExploreMyWork>Explore My Work</ExploreMyWork>
                        </ButtonContactUs1>
                        <IconPlay1>
                          <Vector type="checkbox" />
                        </IconPlay1>
                      </RightContent>
                      <ButtonContactUs2>
                        <ContactMe>Contact Me</ContactMe>
                      </ButtonContactUs2>
                    </ButtonOne>
                  </ButtonDiv>
                </Title>
                <FollowMinhajOnlineParent>
                  <FollowMinhajOnlineContainer>
                    <Follow>{`Follow `}</Follow>
                    <Span>Minhaj</Span>
                    <Follow> online -</Follow>
                  </FollowMinhajOnlineContainer>
                  <GithubOne>
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
                    <FrameComponent frame4="/frame-42@2x.png" />
                  </GithubOne>
                </FollowMinhajOnlineParent>
              </TitleInner>
              <ContactFormParent>
                <ContactForm>
                  <GetInTouch>Get in Touch</GetInTouch>
                  <Form>
                    <InputFields>
                      <Input1 email="Full Name" />
                      <Input1 email="Email" emailTextDecoration="none" />
                      <Input1 email="Phone" emailTextDecoration="unset" />
                      <Input1 email="Subject" emailTextDecoration="unset" />
                      <Input1 email="Message" emailTextDecoration="unset" />
                    </InputFields>
                    <ButtonContactUsParent>
                      <ButtonContactUs3
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
                        Submit
                      </ButtonContactUs3>
                      <IconPlay2>
                        <SentIcon
                          loading="lazy"
                          width={24}
                          height={24}
                          alt=""
                          src="/sent.svg"
                        />
                      </IconPlay2>
                    </ButtonContactUsParent>
                  </Form>
                </ContactForm>
                <LinksTwo>
                  <SocialLinksTwo>
                    <Github1
                      startIcon={
                        <img width="18px" height="18px" src="/github-1.svg" />
                      }
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#212121",
                        fontSize: "18",
                        background: "#fff",
                        border: "#212121 solid 2px",
                        borderRadius: "100px",
                        "&:hover": { background: "#fff" },
                        width: 153,
                      }}
                    >
                      GitHub
                    </Github1>
                    <HackerrankTwo>
                      <HackerrankTwoChild
                        width={172}
                        height={110}
                        alt=""
                        src="/frame-4-1@2x.png"
                      />
                      <HackerrankLinkTwo
                        startIcon={
                          <img
                            width="28px"
                            height="28px"
                            src="/hackerrank-1.svg"
                          />
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#212121",
                          fontSize: "18",
                          background: "#fff",
                          border: "#212121 solid 2px",
                          borderRadius: "100px",
                          "&:hover": { background: "#fff" },
                          height: 56,
                        }}
                      >
                        HackerRank
                      </HackerrankLinkTwo>
                    </HackerrankTwo>
                  </SocialLinksTwo>
                  <Spesility>
                    <Experinced>
                      <Mail01Icon
                        width={32}
                        height={32}
                        alt=""
                        src="/mail011.svg"
                      />
                      <SupportingText>+8801781583107</SupportingText>
                    </Experinced>
                    <Support>
                      <Mail01Icon
                        width={32}
                        height={32}
                        alt=""
                        src="/smartphone011.svg"
                      />
                      <SupportingText1>
                        minhaj@littleprogrammers.org
                      </SupportingText1>
                    </Support>
                  </Spesility>
                </LinksTwo>
              </ContactFormParent>
              <IconPlay3 onClick={onIconPlayContainerClick}>
                <SentIcon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/cancel01.svg"
                />
              </IconPlay3>
            </TitleInnerParent>
            <ContentAboutUsWrapper>
              <ContentAboutUs>
                <FrameParent>
                  <CtaContent1>
                    <AboutInnerTwoChild />
                    <VisionGoalParent>
                      <VisionGoalItems
                        visionGoalItemsMinWidth="unset"
                        minhajVision="Minhaj Vision"
                        minhajVisionMargin="unset"
                        vision1="/vision-1.svg"
                      />
                      <VisionGoalItems
                        visionGoalItemsMinWidth="unset"
                        minhajVision="Minhaj Goal"
                        minhajVisionMargin="unset"
                        vision1="/targeticon-1.svg"
                      />
                    </VisionGoalParent>
                  </CtaContent1>
                </FrameParent>
              </ContentAboutUs>
            </ContentAboutUsWrapper>
          </FrameParent>
        </FrameWrapper>
      </ContentParent>
      <Minhaj>Minhaj</Minhaj>
      <Bg />
      <RectangleParent>
        <FrameChild
          width={264}
          height={263}
          alt=""
          src="/rectangle-158@2x.png"
        />
        <FrameItem
          width={264}
          height={263}
          alt=""
          src="/shape-collection@2x.png"
        />
        <FrameInner
          width={264}
          height={263}
          alt=""
          src="/rectangle-160@2x.png"
        />
        <RectangleIcon
          width={264}
          height={263}
          alt=""
          src="/rectangle-161@2x.png"
        />
        <FrameChild1
          width={264}
          height={263}
          alt=""
          src="/rectangle-162@2x.png"
        />
        <ContentGroup>
          <Content1 />
          <Content2 />
          <Content3 />
          <BackgroundIcon
            width={1562}
            height={1101}
            alt=""
            src="/background1.svg"
          />
          <Content4 />
          <Content5 />
          <Content6 />
          <Content7 />
        </ContentGroup>
      </RectangleParent>
      <ItemsWrapper>
        <Items2>
          <Items>
            <ArchitecturesWrapper>
              <Architectures>Architectures</Architectures>
            </ArchitecturesWrapper>
          </Items>
          <Microservice>Microservice</Microservice>
          <ArchitectureTypes>
            <ItemDetails>*</ItemDetails>
          </ArchitectureTypes>
          <Microservice>Monolithic</Microservice>
          <ArchitectureTypes>
            <ItemDetails>*</ItemDetails>
          </ArchitectureTypes>
          <ClientServer>Client-Server</ClientServer>
          <ArchitectureTypes>
            <ItemDetails>*</ItemDetails>
          </ArchitectureTypes>
          <ClientServer>System Design</ClientServer>
          <Prototypes>
            <Items1>
              <TechnologiesWrapper>
                <Architectures>Technologies</Architectures>
              </TechnologiesWrapper>
            </Items1>
            <Prototype>Prototype</Prototype>
            <Prototype1>Prototype</Prototype1>
          </Prototypes>
        </Items2>
      </ItemsWrapper>
    </ContactRoot>
  );
};

export default Contact;
