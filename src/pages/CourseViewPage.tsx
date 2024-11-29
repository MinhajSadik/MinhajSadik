import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import CTAContent from "../components/CTAContent";
import HackerrankOne from "../components/HackerrankOne";
import LeftContent from "../components/LeftContent";
import { useNavigate } from "react-router-dom";
import CheckmarkContainers from "../components/CheckmarkContainers";
import CourseModule from "../components/CourseModule";
import VisionMissionPair from "../components/VisionMissionPair";

const CourseViewPageChild = styled.div`
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
const ExploreMyWork = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
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
const PlayIcon = styled.img`
  height: 15px;
  width: 14px;
  position: relative;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const ExploreButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  border: 1px solid var(--gray);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-3xl);
`;
const ExploreButtonContainerParent = styled.div`
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
const FollowMinhajOnlineContainer = styled.h2`
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
  padding: var(--padding-mini) var(--padding-24xl);
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
  @media screen and (max-width: 850px) {
    gap: var(--gap-26xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-3xl);
  }
`;
const Cancel01Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const IconPlay1 = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-base);
  box-sizing: border-box;
  cursor: pointer;
  z-index: 6;
`;
const Footer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 44px;
  left: 1399px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ContentDividerIcon = styled.img`
  align-self: stretch;
  height: 368px;
  position: relative;
  border-radius: var(--br-base);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const H = styled.h2`
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
  gap: 14px;
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
const Video = styled.input`
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
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
  padding: var(--padding-base) var(--padding-5xl) 14px;
  gap: var(--gap-xl);
`;
const H3 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 119px;
`;
const VideoPlayerButtons = styled.div`
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
  min-width: 41px;
`;
const VideoPlayerProgress = styled.div`
  background-color: var(--color-whitesmoke-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-4xs);
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-200);
`;
const VideoPlayerContainers = styled.div`
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
const H5 = styled.a`
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  color: inherit;
  display: inline-block;
  min-width: 57px;
`;
const H6 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 38px;
`;
const H7 = styled.div`
  position: relative;
  text-transform: capitalize;
`;
const H8 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 40px;
`;
const PlayCircle = styled.input`
  cursor: pointer;
  margin: 0;
  height: 24px;
  width: 24px;
  position: relative;
`;
const H9 = styled.div`
  position: relative;
  text-transform: capitalize;
  display: inline-block;
  min-width: 60px;
`;
const H10 = styled.div`
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
const H11 = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--color-darkslategray-200);
  text-align: left;
  display: inline-block;
  min-width: 116px;
`;
const Heading = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) 147px;
  background-color: var(--color-goldenrod-100);
  border-radius: var(--br-31xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  &:hover {
    background-color: var(--color-goldenrod-200);
  }
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
  font-family: var(--font-inter);
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
  padding: var(--padding-mid) 136px 18.3px 137px;
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
  padding: 0px 0px 25px;
  box-sizing: border-box;
  gap: 1px;
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
  font-family: var(--font-inter);
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
const ShapeCollectionIcon = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 97px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon1 = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 360.6px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon2 = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 624.2px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const ShapeCollectionIcon3 = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 887.8px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 2;
`;
const ShapeCollectionIcon4 = styled.img`
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
const BackgroundIcon = styled.img`
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
const Architectures = styled.h2`
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
const H12 = styled.h1`
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
const CourseViewPageRoot = styled.div`
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
  gap: 539.3px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
  @media screen and (max-width: 1225px) {
    height: auto;
  }
  @media screen and (max-width: 850px) {
    gap: 270px;
  }
  @media screen and (max-width: 450px) {
    gap: 135px;
  }
`;

const CourseViewPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconPlayContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <CourseViewPageRoot>
      <CourseViewPageChild />
      <LineParent>
        <FrameChild />
        <FrameWrapper>
          <FrameParent>
            <FrameGroup>
              <TitleParent>
                <Title>
                  <CTAContent rectangle1="/rectangle-1@2x.png" />
                  <ButtonDiv>
                    <ExploreButtonContainerParent>
                      <ExploreButtonContainer>
                        <ButtonContactUs>
                          <ExploreMyWork>Explore My Work</ExploreMyWork>
                        </ButtonContactUs>
                        <IconPlay>
                          <PlayIcon loading="lazy" alt="" src="/vector-1.svg" />
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
                      <GithubIcon alt="" src="/github.svg" />
                      <Github>GitHub</Github>
                    </Github1>
                    <HackerrankOne frame4="/frame-4@2x.png" />
                  </SocialIcons>
                </SocialLinks>
              </TitleParent>
              <Footer>
                <LeftContent
                  leftContentFlex="unset"
                  leftContentPosition="absolute"
                  leftContentWidth="1448px"
                  leftContentMargin="0 !important"
                  leftContentTop="-44px"
                  leftContentLeft="-1368px"
                />
                <IconPlay1 onClick={onIconPlayContainerClick}>
                  <Cancel01Icon loading="lazy" alt="" src="/cancel01.svg" />
                </IconPlay1>
              </Footer>
              <PageContent>
                <ContentContainer>
                  <ContentDividerIcon alt="" src="/content-divider@2x.png" />
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
                        <Video type="checkbox" />
                        <Peragraph2>61 hours on-demand video</Peragraph2>
                      </VideoContainers>
                      <VideoContainers>
                        <Video type="checkbox" />
                        <Peragraph2>194 downloadable resources</Peragraph2>
                      </VideoContainers>
                      <VideoContainers1>
                        <Video type="checkbox" />
                        <Peragraph2>Certificate of completion</Peragraph2>
                      </VideoContainers1>
                      <VideoContainers>
                        <Cancel01Icon alt="" src="/fileempty01.svg" />
                        <Peragraph2>65 articles</Peragraph2>
                      </VideoContainers>
                    </VideoItems>
                  </VideoContent>
                </ContentContainer>
                <CourseModuleContainer>
                  <FrameContainer>
                    <H3Parent>
                      <H2>course module</H2>
                      <Cancel01Icon alt="" src="/download04.svg" />
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
                          <VideoPlayerButtons>
                            <Cancel01Icon alt="" src="/playcircle.svg" />
                            <H3>Welcome video</H3>
                          </VideoPlayerButtons>
                          <VideoPlayerProgress>
                            <H4>09:40</H4>
                          </VideoPlayerProgress>
                        </VideoPlayerContainers>
                        <VideoPlayerContainers>
                          <VideoPlayerButtons>
                            <Cancel01Icon alt="" src="/playcircle.svg" />
                            <H5>Video 1</H5>
                          </VideoPlayerButtons>
                          <VideoPlayerProgress>
                            <H6>02:10</H6>
                          </VideoPlayerProgress>
                        </VideoPlayerContainers>
                        <VideoPlayerContainers>
                          <VideoPlayerButtons>
                            <Cancel01Icon
                              loading="lazy"
                              alt=""
                              src="/playcircle.svg"
                            />
                            <H7>Video 2</H7>
                          </VideoPlayerButtons>
                          <VideoPlayerProgress>
                            <H8>20:20</H8>
                          </VideoPlayerProgress>
                        </VideoPlayerContainers>
                        <VideoPlayerContainers>
                          <VideoPlayerButtons>
                            <PlayCircle type="radio" />
                            <H9>Video 3</H9>
                          </VideoPlayerButtons>
                          <VideoPlayerProgress>
                            <H10>27:50</H10>
                          </VideoPlayerProgress>
                        </VideoPlayerContainers>
                      </ModuleVideoPlayers>
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                      <CourseModule
                        courseModuleBorderBottom="unset"
                        aroowUp="/arrowdown01.svg"
                        h3="Course content"
                        h3TextDecoration="unset"
                        showModuleDurationHeader={false}
                        h31="9lac"
                        h32="9lac"
                      />
                    </CourseModules>
                  </FrameContainer>
                  <Heading>
                    <H11>Buy now - $1</H11>
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
                      <VisionMissionPair
                        visionMissionPairMinWidth="unset"
                        minhajVision="Minhaj Vision"
                        vision1="/vision-1.svg"
                      />
                      <VisionMissionPair
                        visionMissionPairMinWidth="unset"
                        minhajVision="Minhaj Goal"
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
        <ShapeCollectionIcon alt="" src="/rectangle-158@2x.png" />
        <ShapeCollectionIcon1 alt="" src="/rectangle-159@2x.png" />
        <ShapeCollectionIcon2 alt="" src="/rectangle-160@2x.png" />
        <ShapeCollectionIcon3 alt="" src="/rectangle-161@2x.png" />
        <ShapeCollectionIcon4 alt="" src="/rectangle-162@2x.png" />
        <DividerParent>
          <Divider />
          <FrameItem />
          <FrameInner />
          <BackgroundIcon alt="" src="/background1.svg" />
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
            <H12>*</H12>
          </ItemCollection1>
          <Microservice>Monolithic</Microservice>
          <ItemCollection1>
            <H12>*</H12>
          </ItemCollection1>
          <ClientServer>Client-Server</ClientServer>
          <ItemCollection1>
            <H12>*</H12>
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
    </CourseViewPageRoot>
  );
};

export default CourseViewPage;