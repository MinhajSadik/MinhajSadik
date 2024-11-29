import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent11 from "../components/frame-component11";
import CourseItem from "../components/course-item";
import CardItems2 from "../components/card-items2";
import Footer from "../components/footer";

const ContentChild = styled.div`
  width: 1px;
  flex: 1;
  position: relative;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const Content = styled.div`
  height: 589px;
  width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) 0px 0px;
  box-sizing: border-box;
`;
const FooterTopChild = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const EmptyContainerIcon = styled(Image)`
  height: 489.9px;
  width: 470px;
  border-radius: var(--br-13xl);
  object-fit: contain;
  max-width: 100%;
`;
const Cards = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  min-height: 1422px;
  gap: -3.3499999999994543px;
  max-width: 100%;
`;
const FooterContentInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  max-width: 100%;
`;
const FooterContent = styled.div`
  width: 1406px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
`;
const FooterTop = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-6xl);
  }
`;
const TopRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-91xl);
  max-width: 100%;
  margin-left: -1px;
  @media screen and (max-width: 850px) {
    gap: var(--gap-36xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-8xl);
  }
`;
const Top1 = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const Main = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl) 0px var(--padding-12xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const ViewBlogsRoot = styled.div`
  width: 100%;
  height: 2765px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 585.1px;
  box-sizing: border-box;
  gap: 96.1px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1200px) {
    height: auto;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-29xl);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-5xl);
  }
`;

const ViewBlogs: NextPage = () => {
  return (
    <ViewBlogsRoot>
      <Main>
        <Top1>
          <Content>
            <ContentChild />
          </Content>
          <TopRight>
            <FrameComponent10 />
            <FrameComponent11
              learnGrowAndEarnCertificates={`Insights & Updates in Tech and DevOps`}
              learnGrowAndHeight="130px"
              learnGrowAndDisplay="inline-block"
              boostYourSkillsWithEngaging="Explore articles, tips, and industry trends to stay ahead in software development, DevOps, and beyond."
              rectangle158="/rectangle-1581@2x.png"
              rectangle159="/rectangle-1592@2x.png"
            />
            <FooterTop>
              <FooterTopChild />
              <FooterContent>
                <FooterContentInner>
                  <CourseItem
                    courses="Blogs"
                    coursesDisplay="inline-block"
                    coursesMinWidth="112px"
                  />
                  <Cards>
                    <CardItems2
                      cardShapes="/rectangle-151@2x.png"
                      supportingText="Optimizing CI/CD Pipelines: Best Practices for Faster Delivery"
                    />
                    <EmptyContainerIcon
                      loading="lazy"
                      width={470}
                      height={490}
                      alt=""
                      src="/frame-10000117531@2x.png"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-1@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                    <CardItems2
                      cardShapes="/rectangle-151-2@2x.png"
                      supportingText="The Power of Infrastructure as Code with Terraform"
                    />
                  </Cards>
                </FooterContentInner>
              </FooterContent>
            </FooterTop>
          </TopRight>
        </Top1>
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
        footerPadding="32px"
      />
    </ViewBlogsRoot>
  );
};

export default ViewBlogs;
