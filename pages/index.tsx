import type { NextPage } from "next";
import styled from "styled-components";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent11 from "../components/frame-component11";
import CourseItem from "../components/course-item";
import CardItems1 from "../components/card-items1";
import Footer from "../components/footer";

const TopSpacingChild = styled.div`
  width: 1px;
  flex: 1;
  position: relative;
  border-right: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const TopSpacing = styled.div`
  height: 589px;
  width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xl) 0px 0px;
  box-sizing: border-box;
`;
const PreviewDivider = styled.div`
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
`;
const CourseList = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const CardList = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  min-height: 1574px;
  gap: var(--gap-xl);
  max-width: 100%;
`;
const CourseCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
`;
const CoursesPreview = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-31xl);
  max-width: 100%;
  @media screen and (max-width: 850px) {
    gap: var(--gap-6xl);
  }
`;
const Navigation = styled.div`
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
const TopSpacingParent = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const ViewCoursesInner = styled.main`
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
const ViewCoursesRoot = styled.div`
  width: 100%;
  height: 2941px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 586px;
  box-sizing: border-box;
  gap: 97px;
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

const ViewCourses: NextPage = () => {
  return (
    <ViewCoursesRoot>
      <ViewCoursesInner>
        <TopSpacingParent>
          <TopSpacing>
            <TopSpacingChild />
          </TopSpacing>
          <Navigation>
            <FrameComponent10 />
            <FrameComponent11
              learnGrowAndEarnCertificates="Learn, Grow, and Earn Certificates"
              boostYourSkillsWithEngaging="Boost your skills with engaging, hands-on courses designed to help you succeed in the real world and gain certifications that enhance your career."
              rectangle158="/rectangle-1581@2x.png"
              rectangle159="/rectangle-1592@2x.png"
            />
            <CoursesPreview>
              <PreviewDivider />
              <CourseList>
                <CourseItem courses="Courses" />
              </CourseList>
              <CourseCards>
                <CardList>
                  <CardItems1
                    group469393="/group-469393.svg"
                    h3="Mastering Microservices Architecture"
                    peragraph1="Duration: 4 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="unset"
                    group469393="/rectangle-1551@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`Deploying with Docker & Kubernetes`}
                    h3Height="58px"
                    h3Display="inline-block"
                    peragraph1="Duration: 5 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-1@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-2@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-3@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-4@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-5@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-6@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                  <CardItems1
                    cardItemsWidth="420px"
                    group469393="/rectangle-155-7@2x.png"
                    groupIconBorderRadius="24px"
                    h3={`CI/CD Automation with Jenkins & GitLab CI`}
                    h3Height="unset"
                    h3Display="unset"
                    peragraph1="Duration: 3 hours | Certification: $1"
                  />
                </CardList>
              </CourseCards>
            </CoursesPreview>
          </Navigation>
        </TopSpacingParent>
      </ViewCoursesInner>
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
    </ViewCoursesRoot>
  );
};

export default ViewCourses;