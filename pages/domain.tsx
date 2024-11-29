import type { NextPage } from "next";
import FrameComponent9 from "../components/frame-component9";
import FeaturesContent from "../components/features-content";
import styled from "styled-components";
import Footer from "../components/footer";

const FeaturesContentWrapper = styled.section`
  width: 1496px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 332px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-bottom: 216px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    padding-bottom: 140px;
    box-sizing: border-box;
  }
`;
const DomainRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 38.8px;
  box-sizing: border-box;
  gap: 104px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 850px) {
    gap: 52px;
  }
  @media screen and (max-width: 450px) {
    gap: 26px;
  }
`;

const Domain: NextPage = () => {
  return (
    <DomainRoot>
      <FrameComponent9 />
      <FeaturesContentWrapper>
        <FeaturesContent />
      </FeaturesContentWrapper>
      <Footer
        footerAlignSelf="stretch"
        footerPosition="unset"
        footerTop="unset"
        footerLeft="unset"
        menuItemsOverflowX="auto"
        menuItemsRowGap="unset"
        navigationItemsFlex="unset"
        navigationItemsMinWidth="unset"
        servicesTextDecoration="unset"
        navigationItemsFlex1="unset"
        navigationItemsMinWidth1="unset"
        coursesDisplay="inline-block"
        coursesMinWidth="64px"
        navigationItemsFlex2="unset"
        navigationItemsMinWidth2="unset"
        hostingDisplay="inline-block"
        hostingMinWidth="60px"
        hostingTextDecoration="unset"
        footerPadding="0px 32px"
      />
    </DomainRoot>
  );
};

export default Domain;
