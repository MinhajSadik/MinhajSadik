import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import LeftInner from "../components/LeftInner";
import HackerrankOne from "../components/HackerrankOne";
import Input1 from "../components/Input1";
import { useNavigate } from "react-router-dom";
import VisionMissionPair from "../components/VisionMissionPair";

const ContactPageChild = styled.div`
  position: absolute;
  top: 0px;
  left: 1px;
  width: 1510px;
  display: none;
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
const ItemsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Microservice = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 825px) {
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
const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  font-size: var(--font-size-61xl);
  font-family: var(--font-inter);
`;
const ClientServer = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 825px) {
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
const PrototypesInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-44xl) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Prototype = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  flex-shrink: 0;
  z-index: 1;
  margin-left: -87px;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Prototype1 = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  flex-shrink: 0;
  margin-left: -87px;
  @media screen and (max-width: 825px) {
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
const Items1 = styled.footer`
  position: absolute;
  top: 1521.3px;
  left: 32px;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke-200);
  width: 1448px;
  height: 90px;
  overflow: hidden;
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
  @media screen and (max-width: 1425px) {
    flex-wrap: wrap;
  }
`;
const Minhaj = styled.h1`
  margin: 0;
  position: absolute;
  top: 1016.3px;
  left: 97px;
  font-size: inherit;
  line-height: 198px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-117xl);
    line-height: 119px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-66xl);
    line-height: 79px;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 792px;
  left: 31px;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1450.9px;
  height: 1px;
  z-index: 2;
`;
const Content1 = styled.div`
  position: absolute;
  top: 57px;
  left: 1480px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1px;
  height: 926px;
  z-index: 3;
`;
const Content2 = styled.div`
  position: absolute;
  top: 53px;
  left: 32px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1px;
  height: 930px;
  z-index: 3;
`;
const Content3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1px;
  height: 958px;
  z-index: 2;
`;
const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(11px);
  background-color: var(--color-gray-400);
  width: 100%;
  height: 100%;
  z-index: 4;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 97px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 360.6px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 1;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 624.2px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 2;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 887.8px;
  border-radius: var(--br-5xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 3;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 1094.3px;
  left: 1151.4px;
  border-radius: var(--br-481xl);
  width: 263.6px;
  height: 263px;
  object-fit: cover;
  z-index: 4;
`;
const BackgroundIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1561.9px;
  height: 1101px;
  z-index: 5;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;
const Content4 = styled.div`
  position: absolute;
  top: 0px;
  left: 518px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1px;
  height: 991px;
  z-index: 7;
`;
const Content5 = styled.div`
  position: absolute;
  top: 0px;
  left: 995px;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1px;
  height: 991px;
  z-index: 7;
`;
const Content6 = styled.div`
  position: absolute;
  top: 109px;
  left: calc(50% - 756.1px);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1513.1px;
  height: 1px;
  z-index: 8;
`;
const Content7 = styled.div`
  position: absolute;
  top: 874px;
  left: calc(50% - 757.1px);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 1513.1px;
  height: 1px;
  z-index: 8;
`;
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
  @media screen and (max-width: 825px) {
    font-size: var(--font-size-35xl);
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-14xl);
  }
`;
const NameChild = styled.img`
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
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 825px) {
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
const ButtonContactUs = styled.div`
  height: 56px;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-goldenrod-100);
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
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl-5) var(--padding-2xl);
`;
const ExploreButton = styled.div`
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
  color: var(--color-gray-100);
`;
const ButtonOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 825px) {
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
const Github = styled.input`
  margin: 0;
  height: 28px;
  width: 28px;
  position: relative;
`;
const Github1 = styled.div`
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
const Github2 = styled.button`
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
const GithubOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  row-gap: 20px;
  max-width: 100%;
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 1200px) {
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
  @media screen and (max-width: 825px) {
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
const Submit = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 60px;
`;
const ButtonContactUs2 = styled.button`
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
const SentIcon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
`;
const IconPlay1 = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
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
const GithubIcon = styled.img`
  height: 18px;
  width: 18px;
  position: relative;
`;
const Hackerrank = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  font-weight: 500;
  font-family: var(--font-inter);
  color: var(--color-gray-100);
  text-align: center;
`;
const Github3 = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-gray-100);
  padding: var(--padding-2xs) var(--padding-10xl);
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
const HackerrankTwoChild = styled.img`
  height: 110.2px;
  width: 171.5px;
  border-radius: var(--br-81xl);
  object-fit: contain;
`;
const HackerrankIcon = styled.img`
  height: 28px;
  width: 28px;
  position: relative;
`;
const HackerrankLinkTwo = styled.button`
  cursor: pointer;
  border: 2px solid var(--color-gray-100);
  padding: var(--padding-2xs) var(--padding-10xl);
  background-color: var(--color-white);
  flex: 1;
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
const Mail01Icon = styled.img`
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
  flex-shrink: 0;
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
const IconPlay2 = styled.div`
  position: absolute;
  top: 16px;
  left: 1010px;
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
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
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 825px) {
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
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;
const AboutInnerOne = styled.div`
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
  flex-shrink: 0;
  max-width: 100%;
  @media screen and (max-width: 1425px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 1200px) {
    height: auto;
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
const LeftInnerParent = styled.div`
  position: absolute;
  top: 32px;
  left: 1px;
  width: 100%;
  height: 950px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 30.7px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-90xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
  @media screen and (max-width: 825px) {
    height: auto;
  }
`;
const ContactPageRoot = styled.div`
  width: 100%;
  height: 982px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-320xl);
  color: var(--color-gray-300);
  font-family: var(--font-inter);
  @media screen and (max-width: 1425px) {
    height: auto;
    min-height: 982;
  }
`;

const ContactPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconPlayContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <ContactPageRoot>
      <ContactPageChild />
      <Items1>
        <ItemsInner>
          <ArchitecturesWrapper>
            <Architectures>Architectures</Architectures>
          </ArchitecturesWrapper>
        </ItemsInner>
        <Microservice>Microservice</Microservice>
        <Items>
          <ItemDetails>*</ItemDetails>
        </Items>
        <Microservice>Monolithic</Microservice>
        <Items>
          <ItemDetails>*</ItemDetails>
        </Items>
        <ClientServer>Client-Server</ClientServer>
        <Items>
          <ItemDetails>*</ItemDetails>
        </Items>
        <ClientServer>System Design</ClientServer>
        <Prototypes>
          <PrototypesInner>
            <TechnologiesWrapper>
              <Architectures>Technologies</Architectures>
            </TechnologiesWrapper>
          </PrototypesInner>
          <Prototype>Prototype</Prototype>
          <Prototype1>Prototype</Prototype1>
        </Prototypes>
      </Items1>
      <Minhaj>Minhaj</Minhaj>
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Bg />
      <RectangleParent>
        <FrameChild alt="" src="/rectangle-158@2x.png" />
        <FrameItem alt="" src="/rectangle-159@2x.png" />
        <FrameInner alt="" src="/rectangle-160@2x.png" />
        <RectangleIcon alt="" src="/rectangle-161@2x.png" />
        <FrameChild1 alt="" src="/rectangle-162@2x.png" />
        <BackgroundIcon alt="" src="/background1.svg" />
      </RectangleParent>
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <LeftInnerParent>
        <LeftInner />
        <TitleInnerParent>
          <TitleInner>
            <Title>
              <CtaContent1>
                <Name1>
                  <MinhajSadik1>
                    <MinhajSadik>Minhaj Sadik</MinhajSadik>
                    <Span>{` `}</Span>
                  </MinhajSadik1>
                  <NameChild loading="lazy" alt="" src="/rectangle-1@2x.png" />
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
                  <ExploreButton>
                    <ButtonContactUs>
                      <ExploreMyWork>Explore My Work</ExploreMyWork>
                    </ButtonContactUs>
                    <IconPlay>
                      <Vector type="checkbox" />
                    </IconPlay>
                  </ExploreButton>
                  <ButtonContactUs1>
                    <ContactMe>Contact Me</ContactMe>
                  </ButtonContactUs1>
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
                <Github2>
                  <Github type="checkbox" />
                  <Github1>GitHub</Github1>
                </Github2>
                <HackerrankOne frame4="/frame-41@2x.png" />
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
                <ExploreButton>
                  <ButtonContactUs2>
                    <Submit>Submit</Submit>
                  </ButtonContactUs2>
                  <IconPlay1>
                    <SentIcon loading="lazy" alt="" src="/sent.svg" />
                  </IconPlay1>
                </ExploreButton>
              </Form>
            </ContactForm>
            <LinksTwo>
              <SocialLinksTwo>
                <Github3>
                  <GithubIcon alt="" src="/github-11.svg" />
                  <Hackerrank>GitHub</Hackerrank>
                </Github3>
                <HackerrankTwo>
                  <HackerrankTwoChild alt="" src="/frame-4-1@2x.png" />
                  <HackerrankLinkTwo>
                    <HackerrankIcon alt="" src="/hackerrank-11.svg" />
                    <Hackerrank>HackerRank</Hackerrank>
                  </HackerrankLinkTwo>
                </HackerrankTwo>
              </SocialLinksTwo>
              <Spesility>
                <Experinced>
                  <Mail01Icon alt="" src="/mail011.svg" />
                  <SupportingText>+8801781583107</SupportingText>
                </Experinced>
                <Support>
                  <Mail01Icon alt="" src="/smartphone011.svg" />
                  <SupportingText1>
                    minhaj@littleprogrammers.org
                  </SupportingText1>
                </Support>
              </Spesility>
            </LinksTwo>
          </ContactFormParent>
          <IconPlay2 onClick={onIconPlayContainerClick}>
            <SentIcon loading="lazy" alt="" src="/cancel01.svg" />
          </IconPlay2>
        </TitleInnerParent>
        <ContentAboutUsWrapper>
          <ContentAboutUs>
            <AboutInnerOne>
              <CtaContent1>
                <AboutInnerTwoChild />
                <VisionGoalParent>
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
                </VisionGoalParent>
              </CtaContent1>
            </AboutInnerOne>
          </ContentAboutUs>
        </ContentAboutUsWrapper>
      </LeftInnerParent>
    </ContactPageRoot>
  );
};

export default ContactPage;