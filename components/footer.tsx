import type { NextPage } from "next";
import { type CSSProperties } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export type FooterType = {
  className?: string;

  /** Style props */
  menuItemsRowGap?: CSSProperties["rowGap"];
  menuItemsOverflowX?: CSSProperties["overflowX"];
  navigationItemsFlex?: CSSProperties["flex"];
  navigationItemsMinWidth?: CSSProperties["minWidth"];
  servicesTextDecoration?: CSSProperties["textDecoration"];
  navigationItemsFlex1?: CSSProperties["flex"];
  navigationItemsMinWidth1?: CSSProperties["minWidth"];
  coursesDisplay?: CSSProperties["display"];
  coursesMinWidth?: CSSProperties["minWidth"];
  navigationItemsFlex2?: CSSProperties["flex"];
  navigationItemsMinWidth2?: CSSProperties["minWidth"];
  hostingTextDecoration?: CSSProperties["textDecoration"];
  hostingDisplay?: CSSProperties["display"];
  hostingMinWidth?: CSSProperties["minWidth"];
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
const Mail01Icon = styled(Image)`
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
const ButtonContactUs = styled(Button)`
  height: 56px;
  flex: 1;
`;
const ArrowUpLeft01Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const ContactButton = styled.div`
  width: 227px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
const Main1 = styled.div`
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
const BrandingIcon = styled(Image)`
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
const Services1 = styled.a<{
  servicesTextDecoration?: CSSProperties["textDecoration"];
}>`
  text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 67px;
  text-decoration: ${(p) => p.servicesTextDecoration};
`;
const NavigationItems1 = styled.div<{
  navigationItemsFlex?: CSSProperties["flex"];
  navigationItemsMinWidth?: CSSProperties["minWidth"];
}>`flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
  box-sizing: border-box;
  min-width: 64px;
  flex: ${(p) => p.navigationItemsFlex}
  min-width: ${(p) => p.navigationItemsMinWidth}
`;
const Home1 = styled.div<{
  coursesDisplay?: CSSProperties["display"];
  coursesMinWidth?: CSSProperties["minWidth"];
}>`flex: 1;
  position: relative;
  display: ${(p) => p.coursesDisplay}
  min-width: ${(p) => p.coursesMinWidth}
`;
const NavigationItems2 = styled.div<{
  navigationItemsFlex1?: CSSProperties["flex"];
  navigationItemsMinWidth1?: CSSProperties["minWidth"];
}>`flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
  box-sizing: border-box;
  min-width: 64px;
  flex: ${(p) => p.navigationItemsFlex1}
  min-width: ${(p) => p.navigationItemsMinWidth1}
`;
const Hosting1 = styled.a<{
  hostingTextDecoration?: CSSProperties["textDecoration"];
  hostingDisplay?: CSSProperties["display"];
  hostingMinWidth?: CSSProperties["minWidth"];
}>`text-decoration: none;
  flex: 1;
  position: relative;
  color: inherit;
  text-decoration: ${(p) => p.hostingTextDecoration}
  display: ${(p) => p.hostingDisplay}
  min-width: ${(p) => p.hostingMinWidth}
`;
const NavigationItems3 = styled.div<{
  navigationItemsFlex2?: CSSProperties["flex"];
  navigationItemsMinWidth2?: CSSProperties["minWidth"];
}>`flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-mini);
  box-sizing: border-box;
  min-width: 59px;
  flex: ${(p) => p.navigationItemsFlex2}
  min-width: ${(p) => p.navigationItemsMinWidth2}
`;
const MenuItems = styled.div<{
  menuItemsRowGap?: CSSProperties["rowGap"];
  menuItemsOverflowX?: CSSProperties["overflowX"];
}>`border-radius: var(--br-5xs);
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
  row-gap: ${(p) => p.menuItemsRowGap}
  overflow-x: ${(p) => p.menuItemsOverflowX}
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
const SupportingText2 = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  max-width: 100%;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-23xl);
  @media screen and (max-width: 450px) {
    gap: var(--gap-2xl);
    flex-wrap: wrap;
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
const Info = styled.div`
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
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;
const Content1 = styled.footer`
  align-self: stretch;
  border-radius: var(--br-13xl);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-46xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-23xl);
  color: var(--color-gray-1000);
  font-family: var(--font-inter);
  @media screen and (max-width: 1225px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-2xl);
    padding-bottom: var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const FooterRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 4;
`;

const Footer: NextPage<FooterType> = ({
  className = "",
  menuItemsRowGap,
  menuItemsOverflowX,
  navigationItemsFlex,
  navigationItemsMinWidth,
  servicesTextDecoration,
  navigationItemsFlex1,
  navigationItemsMinWidth1,
  coursesDisplay,
  coursesMinWidth,
  navigationItemsFlex2,
  navigationItemsMinWidth2,
  hostingTextDecoration,
  hostingDisplay,
  hostingMinWidth,
}) => {
  return (
    <FooterRoot className={className}>
      <Content1>
        <Main1>
          <CallToAction>
            <ReadyToElevate>
              Ready to Elevate Your Skills or Start a Project?
            </ReadyToElevate>
            <Spesility>
              <Experinced>
                <Mail01Icon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/mail01.svg"
                />
                <SupportingText>+8801781583107</SupportingText>
              </Experinced>
              <Experinced>
                <Mail01Icon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/smartphone01.svg"
                />
                <SupportingText>minhaj@littleprogrammers.org</SupportingText>
              </Experinced>
            </Spesility>
          </CallToAction>
          <Copyright>
            <SupportingText1>
              Whether you want to learn new skills or need help with a project,
              Minhaj is here to support you. Check out his courses or reach out
              for a chat about your next project!
            </SupportingText1>
            <ContactButton>
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
                Contact Minhaj
              </ButtonContactUs>
              <IconPlay>
                <ArrowUpLeft01Icon
                  loading="lazy"
                  width={24}
                  height={24}
                  alt=""
                  src="/arrowupleft01.svg"
                />
              </IconPlay>
            </ContactButton>
          </Copyright>
        </Main1>
        <Info>
          <LeftSideParent>
            <LeftSide>
              <Content>
                <BrandingIcon
                  loading="lazy"
                  width={31}
                  height={27}
                  alt=""
                  src="/vector.svg"
                />
                <MinhajSadik>Minhaj Sadik</MinhajSadik>
              </Content>
            </LeftSide>
            <MenuItems
              menuItemsRowGap={menuItemsRowGap}
              menuItemsOverflowX={menuItemsOverflowX}
            >
              <NavigationItems>
                <Home>Home</Home>
              </NavigationItems>
              <NavigationItems1
                navigationItemsFlex={navigationItemsFlex}
                navigationItemsMinWidth={navigationItemsMinWidth}
              >
                <Services1 servicesTextDecoration={servicesTextDecoration}>
                  Services
                </Services1>
              </NavigationItems1>
              <NavigationItems2
                navigationItemsFlex1={navigationItemsFlex1}
                navigationItemsMinWidth1={navigationItemsMinWidth1}
              >
                <Home1
                  coursesDisplay={coursesDisplay}
                  coursesMinWidth={coursesMinWidth}
                >
                  Courses
                </Home1>
              </NavigationItems2>
              <NavigationItems3
                navigationItemsFlex2={navigationItemsFlex2}
                navigationItemsMinWidth2={navigationItemsMinWidth2}
              >
                <Hosting1
                  hostingTextDecoration={hostingTextDecoration}
                  hostingDisplay={hostingDisplay}
                  hostingMinWidth={hostingMinWidth}
                >
                  Hosting
                </Hosting1>
              </NavigationItems3>
            </MenuItems>
            <RightSide>
              <IconSocialMediaParent>
                <IconSocialMedia>
                  <Mail01Icon
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/github.svg"
                  />
                </IconSocialMedia>
                <IconSocialMedia>
                  <Mail01Icon
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/linkedin02.svg"
                  />
                </IconSocialMedia>
                <IconSocialMedia>
                  <Mail01Icon
                    loading="lazy"
                    width={24}
                    height={24}
                    alt=""
                    src="/hackerrank.svg"
                  />
                </IconSocialMedia>
              </IconSocialMediaParent>
            </RightSide>
          </LeftSideParent>
          <Legal>
            <SupportingText2>
              © 2024 Minhaj Sadik. All rights reserved. | Designed by Dipu Paul
            </SupportingText2>
            <Links>
              <SupportingText>Terms of services</SupportingText>
              <SupportingText>Privacy Policy</SupportingText>
            </Links>
          </Legal>
        </Info>
      </Content1>
    </FooterRoot>
  );
};

export default Footer;
