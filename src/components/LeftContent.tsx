import { FunctionComponent, memo, type CSSProperties } from "react";
import styled from "styled-components";

export type LeftContentType = {
  className?: string;

  /** Style props */
  leftContentFlex?: CSSProperties["flex"];
  leftContentPosition?: CSSProperties["position"];
  leftContentWidth?: CSSProperties["width"];
  leftContentMargin?: CSSProperties["margin"];
  leftContentTop?: CSSProperties["top"];
  leftContentLeft?: CSSProperties["left"];
};

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
  @media screen and (max-width: 1425px) {
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
  border: 1px solid var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-4xl);
`;
const Contact = styled.a`
  text-decoration: none;
  flex: 1;
  position: relative;
  font-weight: 600;
  color: inherit;
`;
const IconPlay = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-goldenrod-100);
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
const LeftContentChild = styled.img`
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
const LeftContentRoot = styled.header<{
  leftContentFlex?: CSSProperties["flex"];
  leftContentPosition?: CSSProperties["position"];
  leftContentWidth?: CSSProperties["width"];
  leftContentMargin?: CSSProperties["margin"];
  leftContentTop?: CSSProperties["top"];
  leftContentLeft?: CSSProperties["left"];
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
  flex-shrink: 0;
  max-width: 100%;
  gap: var(--gap-0);
  row-gap: 20px;
  z-index: 1;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
  flex: ${(p) => p.leftContentFlex}
  position: ${(p) => p.leftContentPosition}
  width: ${(p) => p.leftContentWidth}
  margin: ${(p) => p.leftContentMargin}
  top: ${(p) => p.leftContentTop}
  left: ${(p) => p.leftContentLeft}
`;

const LeftContent: FunctionComponent<LeftContentType> = memo(
  ({
    className = "",
    leftContentFlex,
    leftContentPosition,
    leftContentWidth,
    leftContentMargin,
    leftContentTop,
    leftContentLeft,
  }) => {
    return (
      <LeftContentRoot
        leftContentFlex={leftContentFlex}
        leftContentPosition={leftContentPosition}
        leftContentWidth={leftContentWidth}
        leftContentMargin={leftContentMargin}
        leftContentTop={leftContentTop}
        leftContentLeft={leftContentLeft}
        className={className}
      >
        <LeftSide>
          <VectorParent>
            <VectorIcon alt="" src="/vector.svg" />
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
              <Contact>Contact</Contact>
            </IconPlay>
          </RightContent>
        </RightSide>
        <LeftContentChild alt="" src="/frame-1000011793@2x.png" />
      </LeftContentRoot>
    );
  }
);

export default LeftContent;