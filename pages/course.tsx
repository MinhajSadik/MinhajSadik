import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Image from "next/image";
import styled from "styled-components";
import CTAContent from "../components/c-t-a-content";
import FrameComponent from "../components/frame-component";
import { useRouter } from "next/router";
import CheckmarkContainers from "../components/checkmark-containers";
import CourseModule from "../components/course-module";
import VisionGoalItems from "../components/vision-goal-items";

const CourseChild = styled.div`
  align-self: stretch;
  display: none;
  z-index: 0;
`;
const FrameChild = styled.div`
  height: 958px;
  width: 1px;
  position: relative;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  z-index: 2;
`;
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const PlayIcon = styled(Image)`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const ExploreButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 157px;
`;
const ContactMe = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 95px;
`;
const ButtonContactUs1 = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  border: 1px solid var(--color-slategray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-3xl);
`;
const ExploreButtonContainerParent = styled.div`
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
const GithubIcon = styled(Image)`
  height: 28px;
  width: 28px;
  position: relative;
`;
const Github = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 83px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Github1 = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) 43px;
  gap: var(--gap-3xs);
`;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  text-align: center;
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const SocialLinks = styled.div`
  width: 1316.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  font-size: var(--font-size-5xl);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const TitleParent = styled.div`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-71xl);
  max-width: 100%;
  z-index: 1;
  font-family: var(--font-archivo);
  @media screen and (max-width: 850px) {
    gap: var(--gap-26xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const FooterLogoIcon = styled(Image)`
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
const FooterLogoName = styled.div`
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
const ResumeButtonContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const ButtonContactUs2 = styled.div`
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
const IconPlay1 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini) var(--padding-lgi);
  color: var(--color-gray-100);
`;
const FooterButtons = styled.div`
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
const FooterContentChild = styled(Image)`
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
const FooterContent = styled.div`
  width: 1448px;
  margin: 0 !important;
  position: absolute;
  top: -44px;
  left: -1368px;
  border-radius: var(--br-sm);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs-9) var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-0);
  row-gap: 20px;
  z-index: 1;
`;
const Cancel01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const IconPlay2 = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-base);
  box-sizing: border-box;
  cursor: pointer;
  z-index: 6;
`;
const Footer1 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 44px;
  left: 1399px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const ContentDividerIcon = styled(Image)`
  align-self: stretch;
  height: 368px;
  position: relative;
  border-radius: var(--br-base);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const H = styled.h3`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-darkslategray-200);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const Peragraph = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 24px;
`;
const Peragraph1 = styled.div`
  position: relative;
  line-height: 24px;
`;
const CalendarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-sm);
`;
const Texts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  font-size: var(--font-size-5xl);
  color: var(--greyscale-400);
`;
const H1 = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const CheckmarkItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  min-height: 156px;
  max-width: 100%;
  gap: var(--gap-xl);
`;
const CheckmarkContent = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;
const Peragraph2 = styled.div`
  position: relative;
  line-height: 21px;
  font-weight: 500;
`;
const VideoContainers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const VideoContainers1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px 0px;
  gap: var(--gap-xs);
`;
const VideoItems = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 0px var(--padding-2xl) 0px 0px;
  gap: 30px 20px;
  font-size: var(--font-size-sm);
  color: var(--greyscale-400);
`;
const VideoContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;
const ContentContainer = styled.div`
  flex: 1;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-4xl);
  gap: var(--gap-5xl);
  max-width: calc(100% - 459px);
  @media screen and (max-width: 1482px) {
    display: none;
  }
  @media screen and (max-width: 1225px) {
    max-width: 100%;
  }
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const H2 = styled.a`
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  color: inherit;
`;
const H3Parent = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-700);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-base) var(--padding-5xl) var(--padding-sm);
  gap: var(--gap-xl);
`;
const Datepicker1 = styled(DatePicker)``;
const VideoPlayerContainers = styled.div`
  align-self: stretch;
`;
const H3 = styled.div`
  position: relative;
  text-transform: capitalize;
`;
const PlayCircleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const H4 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 40px;
`;
const H3Wrapper = styled.div`
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-4xs);
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-200);
`;
const VideoPlayerContainers1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-9xs) 0px;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const PlayCircle = styled.input`
  cursor: pointer;
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
`;
const H5 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 60px;
`;
const H6 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 39px;
`;
const ModuleVideoPlayers = styled.div`
  align-self: stretch;
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-5xl);
`;
const CourseModules = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-400);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Heading = styled(Button)`
  width: 411px;
  height: 56px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const CourseModuleContainer = styled.div`
  height: 884px;
  width: 459px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-5xl) 0px;
  box-sizing: border-box;
  max-width: calc(100% - 778px);
  @media screen and (max-width: 1482px) {
    max-width: 100%;
  }
  @media screen and (max-width: 1225px) {
    display: none;
  }
  @media screen and (max-width: 850px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const PageContent = styled.div`
  align-self: stretch;
  height: 884px;
  border-radius: var(--br-13xl);
  border: 1px solid var(--color-gray-700);
  box-sizing: border-box;
  overflow-y: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 6;
  color: var(--color-darkslategray-200);
  @media screen and (max-width: 450px) {
    height: auto;
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 17px 136px 18.3px 137px;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    padding-left: var(--padding-49xl);
    padding-right: var(--padding-49xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Placeholder = styled.div`
  align-self: stretch;
  height: 263px;
`;
const VisionGoal = styled.div`
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
const InnerAboutContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
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
  @media screen and (max-width: 1225px) {
    height: auto;
  }
`;
const LineParent = styled.div`
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
const Minhaj1 = styled.h1`
  margin: 0 !important;
  position: absolute;
  right: 90px;
  bottom: -232.3px;
  font-size: var(--font-size-320xl);
  line-height: 198px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-gray-300);
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
const ShapeCollectionIcon = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 97px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon1 = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 360.6px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon2 = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 624.2px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon3 = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 887.8px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon4 = styled(Image)`
  position: absolute;
  top: 1094.3px;
  left: 1151.4px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const Divider = styled.div`
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
const FrameItem = styled.div`
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
const FrameInner = styled.div`
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
const DividerParent = styled.main`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1561.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ShapesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
const Architectures = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const ItemPair = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl) var(--padding-7xl)
    var(--padding-5xl);
`;
const ItemCollection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Microservice = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const H7 = styled.h1`
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
const ItemCollection1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  font-size: var(--font-size-61xl);
  font-family: var(--font-inter);
`;
const ClientServer = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Prototype = styled.h1`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: -204px;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  flex-shrink: 0;
  z-index: 1;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Items = styled.footer`
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
  position: relative;
  gap: var(--gap-12xl-1);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-600);
  font-family: var(--font-archivo);
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ItemsContainer = styled.div`
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
const CourseRoot = styled.div`
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
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    height: auto;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-251xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-116xl);
  }
`;

const Course: NextPage = () => {
  const [videoPlayerContainersValue, setVideoPlayerContainersValue] =
    useState(null);
  const [videoPlayerContainers1Value, setVideoPlayerContainers1Value] =
    useState(null);
  const router = useRouter();

  const onIconPlayContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CourseRoot>
        <CourseChild />
        <LineParent>
          <FrameChild />
          <FrameWrapper>
            <FrameParent>
              <FrameGroup>
                <TitleParent>
                  <Title>
                    <CTAContent rectangle1="/rectangle-11@2x.png" />
                    <ButtonDiv>
                      <ExploreButtonContainerParent>
                        <ExploreButtonContainer>
                          <ButtonContactUs
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
                          </ButtonContactUs>
                          <IconPlay>
                            <PlayIcon
                              loading="lazy"
                              width={14}
                              height={15}
                              alt=""
                              src="/vector-1.svg"
                            />
                          </IconPlay>
                        </ExploreButtonContainer>
                        <ButtonContactUs1>
                          <ContactMe>Contact Me</ContactMe>
                        </ButtonContactUs1>
                      </ExploreButtonContainerParent>
                    </ButtonDiv>
                  </Title>
                  <SocialLinks>
                    <FollowMinhajOnlineContainer>
                      <Follow>{`Follow `}</Follow>
                      <Minhaj>Minhaj</Minhaj>
                      <Follow> online -</Follow>
                    </FollowMinhajOnlineContainer>
                    <SocialIcons>
                      <Github1>
                        <GithubIcon
                          width={28}
                          height={28}
                          alt=""
                          src="/github1.svg"
                        />
                        <Github>GitHub</Github>
                      </Github1>
                      <FrameComponent frame4="/frame-41@2x.png" />
                    </SocialIcons>
                  </SocialLinks>
                </TitleParent>
                <Footer1>
                  <FooterContent>
                    <LeftSide>
                      <FooterLogoName>
                        <FooterLogoIcon
                          width={31}
                          height={27}
                          alt=""
                          src="/vector.svg"
                        />
                        <MinhajSadik>Minhaj Sadik</MinhajSadik>
                      </FooterLogoName>
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
                      <FooterButtons>
                        <ButtonContactUs2>
                          <ResumeButtonContent>
                            <Download type="checkbox" />
                            <Resume>Resume</Resume>
                          </ResumeButtonContent>
                        </ButtonContactUs2>
                        <IconPlay1>
                          <Contact1>Contact</Contact1>
                        </IconPlay1>
                      </FooterButtons>
                    </RightSide>
                    <FooterContentChild
                      width={35}
                      height={27}
                      alt=""
                      src="/frame-1000011793@2x.png"
                    />
                  </FooterContent>
                  <IconPlay2 onClick={onIconPlayContainerClick}>
                    <Cancel01Icon
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/cancel01.svg"
                    />
                  </IconPlay2>
                </Footer1>
                <PageContent>
                  <ContentContainer>
                    <ContentDividerIcon
                      width={730}
                      height={368}
                      alt=""
                      src="/content-divider@2x.png"
                    />
                    <Texts>
                      <H>The Complete 2024 Web Development Bootcamp</H>
                      <Peragraph>
                        Become a Full-Stack Web Developer with just ONE course.
                        HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and
                        DApps
                      </Peragraph>
                      <CalendarContent>
                        <Cancel01Icon
                          loading="lazy"
                          width={24}
                          height={24}
                          alt=""
                          src="/calendar03.svg"
                        />
                        <Peragraph1>Last updated 8/2024</Peragraph1>
                      </CalendarContent>
                    </Texts>
                    <CheckmarkContent>
                      <H1>What you'll learn</H1>
                      <CheckmarkItems>
                        <CheckmarkContainers />
                        <CheckmarkContainers tick02BackgroundColor="unset" />
                        <CheckmarkContainers tick02BackgroundColor="#fff" />
                        <CheckmarkContainers tick02BackgroundColor="#fff" />
                      </CheckmarkItems>
                    </CheckmarkContent>
                    <VideoContent>
                      <H1>This course includes:</H1>
                      <VideoItems>
                        <VideoContainers>
                          <Download type="checkbox" />
                          <Peragraph2>61 hours on-demand video</Peragraph2>
                        </VideoContainers>
                        <VideoContainers>
                          <Download type="checkbox" />
                          <Peragraph2>194 downloadable resources</Peragraph2>
                        </VideoContainers>
                        <VideoContainers1>
                          <Download type="checkbox" />
                          <Peragraph2>Certificate of completion</Peragraph2>
                        </VideoContainers1>
                        <VideoContainers>
                          <Cancel01Icon
                            width={24}
                            height={24}
                            alt=""
                            src="/fileempty01.svg"
                          />
                          <Peragraph2>65 articles</Peragraph2>
                        </VideoContainers>
                      </VideoItems>
                    </VideoContent>
                  </ContentContainer>
                  <CourseModuleContainer>
                    <FrameContainer>
                      <H3Parent>
                        <H2>course module</H2>
                        <Cancel01Icon
                          width={24}
                          height={24}
                          alt=""
                          src="/download04.svg"
                        />
                      </H3Parent>
                      <CourseModules>
                        <CourseModule
                          aroowUp="/aroow-up.svg"
                          h3="introduction"
                          showModuleDurationHeader
                          h31="Free"
                          h32="4lac"
                        />
                        <ModuleVideoPlayers>
                          <VideoPlayerContainers>
                            <Datepicker1
                              value={videoPlayerContainersValue}
                              onChange={(newValue: any) => {
                                setVideoPlayerContainersValue(newValue);
                              }}
                              sx={{
                                fieldset: {
                                  borderColor: "transparent",
                                  borderTopWidth: 1,
                                  borderRightWidth: 1,
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                },
                                "&:hover": {
                                  fieldset: { borderColor: "transparent" },
                                  ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                },
                                "& input::placeholder": {
                                  textColor: "#242f3e",
                                  fontSize: 14,
                                },
                                input: {
                                  color: "#242f3e",
                                  fontSize: 14,
                                  paddingLeft: 0,
                                  textAlign: "left",
                                  fontWeight: "400",
                                },
                                "& .MuiInputBase-root": {
                                  height: 45,
                                  gap: "8px",
                                  flexDirection: {
                                    flexDirection: "row-reverse",
                                  },
                                },
                              }}
                              slotProps={{
                                textField: {
                                  size: "medium",
                                  fullWidth: true,
                                  required: false,
                                  autoFocus: false,
                                  error: false,
                                  placeholder: "09:40",
                                },
                                openPickerIcon: {
                                  component: () => (
                                    <img
                                      width="24px"
                                      height="24px"
                                      src="/playcircle.svg"
                                    />
                                  ),
                                },
                              }}
                            />
                          </VideoPlayerContainers>
                          <VideoPlayerContainers>
                            <Datepicker1
                              value={videoPlayerContainers1Value}
                              onChange={(newValue: any) => {
                                setVideoPlayerContainers1Value(newValue);
                              }}
                              sx={{
                                fieldset: {
                                  borderColor: "transparent",
                                  borderTopWidth: 1,
                                  borderRightWidth: 1,
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                },
                                "&:hover": {
                                  fieldset: { borderColor: "transparent" },
                                  ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                  },
                                },
                                "& input::placeholder": {
                                  textColor: "#242f3e",
                                  fontSize: 14,
                                },
                                input: {
                                  color: "#242f3e",
                                  fontSize: 14,
                                  paddingLeft: 0,
                                  textAlign: "left",
                                  fontWeight: "400",
                                },
                                "& .MuiInputBase-root": {
                                  height: 45,
                                  gap: "8px",
                                  flexDirection: {
                                    flexDirection: "row-reverse",
                                  },
                                },
                              }}
                              slotProps={{
                                textField: {
                                  size: "medium",
                                  fullWidth: true,
                                  required: false,
                                  autoFocus: false,
                                  error: false,
                                  placeholder: "02:10",
                                },
                                openPickerIcon: {
                                  component: () => (
                                    <img
                                      width="24px"
                                      height="24px"
                                      src="/playcircle-1.svg"
                                    />
                                  ),
                                },
                              }}
                            />
                          </VideoPlayerContainers>
                          <VideoPlayerContainers1>
                            <PlayCircleParent>
                              <Cancel01Icon
                                loading="lazy"
                                width={24}
                                height={24}
                                alt=""
                                src="/playcircle-2.svg"
                              />
                              <H3>Video 2</H3>
                            </PlayCircleParent>
                            <H3Wrapper>
                              <H4>20:20</H4>
                            </H3Wrapper>
                          </VideoPlayerContainers1>
                          <VideoPlayerContainers1>
                            <PlayCircleParent>
                              <PlayCircle type="radio" />
                              <H5>Video 3</H5>
                            </PlayCircleParent>
                            <H3Wrapper>
                              <H6>27:50</H6>
                            </H3Wrapper>
                          </VideoPlayerContainers1>
                        </ModuleVideoPlayers>
                        <CourseModule
                          courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                          aroowUp="/arrowdown01.svg"
                          h3="Course content"
                          h3TextDecoration="unset"
                          showModuleDurationHeader={false}
                          h31="9lac"
                          h3TextDecoration1="unset"
                          h3Color="#242f3e"
                          h3Width="28px"
                          h32="9lac"
                        />
                        <CourseModule
                          courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                          aroowUp="/arrowdown01.svg"
                          h3="Course content"
                          h3TextDecoration="unset"
                          showModuleDurationHeader={false}
                          h31="9lac"
                          h3TextDecoration1="unset"
                          h3Color="#242f3e"
                          h3Width="28px"
                          h32="9lac"
                        />
                        <CourseModule
                          courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                          aroowUp="/arrowdown01.svg"
                          h3="Course content"
                          h3TextDecoration="unset"
                          showModuleDurationHeader={false}
                          h31="9lac"
                          h3TextDecoration1="unset"
                          h3Color="#242f3e"
                          h3Width="28px"
                          h32="9lac"
                        />
                        <CourseModule
                          courseModuleBorderBottom="unset"
                          aroowUp="/arrowdown01.svg"
                          h3="Course content"
                          h3TextDecoration="unset"
                          showModuleDurationHeader={false}
                          h31="9lac"
                          h3TextDecoration1="unset"
                          h3Color="#242f3e"
                          h3Width="28px"
                          h32="9lac"
                        />
                      </CourseModules>
                    </FrameContainer>
                    <Heading
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#242f3e",
                        fontSize: "18",
                        background: "#ffda58",
                        borderRadius: "50px",
                        "&:hover": { background: "#ffda58" },
                        width: 411,
                        height: 56,
                      }}
                    >
                      Buy now - $1
                    </Heading>
                  </CourseModuleContainer>
                </PageContent>
              </FrameGroup>
              <ContentAboutUsWrapper>
                <ContentAboutUs>
                  <FrameParent>
                    <InnerAboutContainer>
                      <Placeholder />
                      <VisionGoal>
                        <VisionGoalItems
                          minhajVision="Minhaj Vision"
                          vision1="/vision-1.svg"
                        />
                        <VisionGoalItems
                          visionGoalItemsMinWidth="unset"
                          minhajVision="Minhaj Goal"
                          minhajVisionMargin="0"
                          vision1="/targeticon-1.svg"
                        />
                      </VisionGoal>
                    </InnerAboutContainer>
                  </FrameParent>
                </ContentAboutUs>
              </ContentAboutUsWrapper>
            </FrameParent>
          </FrameWrapper>
        </LineParent>
        <Minhaj1>Minhaj</Minhaj1>
        <Bg />
        <ShapesContainer>
          <ShapeCollectionIcon
            width={264}
            height={263}
            alt=""
            src="/rectangle-158@2x.png"
          />
          <ShapeCollectionIcon1
            width={264}
            height={263}
            alt=""
            src="/shape-collection@2x.png"
          />
          <ShapeCollectionIcon2
            width={264}
            height={263}
            alt=""
            src="/rectangle-160@2x.png"
          />
          <ShapeCollectionIcon3
            width={264}
            height={263}
            alt=""
            src="/rectangle-161@2x.png"
          />
          <ShapeCollectionIcon4
            width={264}
            height={263}
            alt=""
            src="/rectangle-162@2x.png"
          />
          <DividerParent>
            <Divider />
            <FrameItem />
            <FrameInner />
            <BackgroundIcon
              width={1562}
              height={1101}
              alt=""
              src="/background1.svg"
            />
          </DividerParent>
        </ShapesContainer>
        <ItemsContainer>
          <Items>
            <ItemCollection>
              <ItemPair>
                <Architectures>Architectures</Architectures>
              </ItemPair>
            </ItemCollection>
            <Microservice>Microservice</Microservice>
            <ItemCollection1>
              <H7>*</H7>
            </ItemCollection1>
            <Microservice>Monolithic</Microservice>
            <ItemCollection1>
              <H7>*</H7>
            </ItemCollection1>
            <ClientServer>Client-Server</ClientServer>
            <ItemCollection1>
              <H7>*</H7>
            </ItemCollection1>
            <ClientServer>System Design</ClientServer>
            <ItemCollection>
              <ItemPair>
                <Architectures>Technologies</Architectures>
              </ItemPair>
            </ItemCollection>
            <Microservice>Prototype</Microservice>
            <Prototype>Prototype</Prototype>
          </Items>
        </ItemsContainer>
      </CourseRoot>
    </LocalizationProvider>
  );
};

export default Course;
