import type { NextPage } from "next";
import Page from "../components/page";
import Suggestions from "../components/suggestions";
import styled from "styled-components";
import Footer from "../components/footer";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-41xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
  }
`;
const Main = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const DomainSearchResultRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 32.8px;
  box-sizing: border-box;
  gap: 120px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 850px) {
    gap: var(--gap-41xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-11xl);
  }
`;

const DomainSearchResult: NextPage = () => {
  return (
    <DomainSearchResultRoot>
      <Main>
        <Content>
          <Page />
          <Suggestions />
        </Content>
      </Main>
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
    </DomainSearchResultRoot>
  );
};

export default DomainSearchResult;
