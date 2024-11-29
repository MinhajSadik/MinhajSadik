import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent2 from "../components/frame-component2";
import BlogPost from "../components/blog-post";
import BlogCards from "../components/blog-cards";
import Footer from "../components/footer";

const LineBackgroundShapes = styled(Image)`
  width: 867px;
  position: relative;
  max-height: 100%;
  display: none;
  max-width: 100%;
`;
const Calendar03Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Peragraph = styled.div`
  position: relative;
  line-height: 24px;
  display: inline-block;
  min-width: 119px;
`;
const Calendar03Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const H = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-23xl);
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  color: var(--color-darkslategray-200);
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-15xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-6xl);
  }
`;
const BottomContent = styled.div`
  width: 958px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
`;
const DividerIcon = styled(Image)`
  width: 1194px;
  position: relative;
  border-radius: var(--br-base);
  max-height: 100%;
  object-fit: cover;
  max-width: 100%;
`;
const Peragraph1 = styled.h3`
  margin: 0;
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 36px;
  font-weight: 400;
  font-family: inherit;
  color: var(--color-gray-100);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 29px;
  }
`;
const H1 = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
`;
const Peragraph2 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 24px;
  color: var(--greyscale-400);
`;
const IntroHeadings = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const H2 = styled.div`
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  max-width: 100%;
`;
const IntroHeadings1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const BlogIntro = styled.div`
  width: 958px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-23xl);
  max-width: 100%;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  @media screen and (max-width: 850px) {
    gap: var(--gap-2xl);
  }
`;
const BottomContentParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-46xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--greyscale-400);
  font-family: var(--font-inter);
  @media screen and (max-width: 1200px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-13xl);
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-base);
  }
`;
const ListDivider = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  max-width: 100%;
`;
const BlogListHeader = styled.div`
  align-self: stretch;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xl) 0px var(--padding-12xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const BlogsSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: 54px;
  max-width: 100%;
  margin-top: -1px;
  @media screen and (max-width: 850px) {
    gap: var(--gap-8xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
`;
const BlogList = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const BlogViewPageRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px 30.9px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const BlogViewPage: NextPage = () => {
  return (
    <BlogViewPageRoot>
      <LineBackgroundShapes
        width={867}
        height={2653}
        alt=""
        src="/line-background-shapes.svg"
      />
      <FrameComponent2 />
      <BottomContentParent>
        <BottomContent>
          <Calendar03Parent>
            <Calendar03Icon
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/calendar03.svg"
            />
            <Peragraph>October 20, 2024</Peragraph>
          </Calendar03Parent>
          <H>
            Optimizing CI/CD Pipelines: A Guide to Faster, Efficient Delivery
          </H>
        </BottomContent>
        <DividerIcon
          loading="lazy"
          width={1194}
          height={491}
          alt=""
          src="/rectangle-155@2x.png"
        />
        <BlogIntro>
          <Peragraph1>{`In today’s fast-paced development world, Continuous Integration and Continuous Delivery (CI/CD) pipelines are essential for speeding up deployments, improving code quality, and ensuring reliable releases. For many teams, the challenge lies in `}</Peragraph1>
          <IntroHeadings>
            <H1>1 Choose the Right CI/CD Tools</H1>
            <Peragraph2>
              The first step in optimization is selecting tools that align with
              your project’s needs. Popular tools include Jenkins, GitLab CI,
              and CircleCI. Each offers unique features, so take time to explore
              their configurations. Jenkins, for example, allows extensive
              customization and plugin support, while GitLab CI integrates
              directly with your repository, simplifying setup.
            </Peragraph2>
          </IntroHeadings>
          <IntroHeadings1>
            <H2>2. Automate Testing and Reduce Build Times</H2>
            <Peragraph2>
              Automated tests ensure code quality, but extensive test suites can
              slow down your pipeline. Break down tests into smaller units,
              focusing on high-priority tests that cover critical
              functionalities. Also, consider running tests in parallel.
              Parallelizing tests, a feature supported by tools like Jenkins and
              CircleCI, can cut testing time significantly and speed up the
              feedback loop.
            </Peragraph2>
          </IntroHeadings1>
          <IntroHeadings>
            <H1>1 Choose the Right CI/CD Tools</H1>
            <Peragraph2>
              The first step in optimization is selecting tools that align with
              your project’s needs. Popular tools include Jenkins, GitLab CI,
              and CircleCI. Each offers unique features, so take time to explore
              their configurations. Jenkins, for example, allows extensive
              customization and plugin support, while GitLab CI integrates
              directly with your repository, simplifying setup.
            </Peragraph2>
          </IntroHeadings>
        </BlogIntro>
      </BottomContentParent>
      <BlogList>
        <BlogListHeader>
          <ListDivider />
        </BlogListHeader>
        <BlogsSection>
          <BlogPost />
          <BlogCards />
        </BlogsSection>
      </BlogList>
      <Footer />
    </BlogViewPageRoot>
  );
};

export default BlogViewPage;
