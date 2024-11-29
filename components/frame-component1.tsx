import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type FrameComponent1Type = {
  className?: string;
  emptyRight: string;

  /** Style props */
  frameHeaderFlex?: CSSProperties["flex"];
  frameHeaderPosition?: CSSProperties["position"];
  frameHeaderAlignSelf?: CSSProperties["alignSelf"];
  frameHeaderTop?: CSSProperties["top"];
};

const LogoIcon = styled(Image)`
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
const LeftContent = styled.div`
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
const ButtonContactUs = styled(Button)`
  height: 48px;
  flex: 1;
`;
const IconPlay = styled(Button)`
  height: 49px;
  width: 102px;
`;
const RightContent = styled.div`
  width: 245px;
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
const EmptyRightIcon = styled(Image)`
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
const LeftSideParentRoot = styled.header<{
  frameHeaderFlex?: CSSProperties["flex"];
  frameHeaderPosition?: CSSProperties["position"];
  frameHeaderAlignSelf?: CSSProperties["alignSelf"];
  frameHeaderTop?: CSSProperties["top"];
}>`flex: 1;
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
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  flex: ${(p) => p.frameHeaderFlex}
  position: ${(p) => p.frameHeaderPosition}
  align-self: ${(p) => p.frameHeaderAlignSelf}
  top: ${(p) => p.frameHeaderTop}
`;

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  frameHeaderFlex,
  frameHeaderPosition,
  frameHeaderAlignSelf,
  frameHeaderTop,
  emptyRight,
}) => {
  return (
    <LeftSideParentRoot
      frameHeaderFlex={frameHeaderFlex}
      frameHeaderPosition={frameHeaderPosition}
      frameHeaderAlignSelf={frameHeaderAlignSelf}
      frameHeaderTop={frameHeaderTop}
      className={className}
    >
      <LeftSide>
        <LeftContent>
          <LogoIcon
            loading="lazy"
            width={31}
            height={27}
            alt=""
            src="/vector.svg"
          />
          <MinhajSadik>Minhaj Sadik</MinhajSadik>
        </LeftContent>
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
          <ButtonContactUs
            startIcon={<img width="24px" height="24px" src="/download02.svg" />}
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
          >
            Contact
          </IconPlay>
        </RightContent>
      </RightSide>
      <EmptyRightIcon
        loading="lazy"
        width={35}
        height={27}
        alt=""
        src={emptyRight}
      />
    </LeftSideParentRoot>
  );
};

export default FrameComponent1;
