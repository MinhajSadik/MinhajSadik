import type { NextPage } from "next";
import { Button } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent from "./frame-component";
import CourseModule from "./course-module";

export type RootType = {
  className?: string;
};

const PageHeadingChild = styled(Image)`
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
const VectorIcon = styled(Image)`
  width: 14px;
  height: 11px;
  position: relative;
`;
const Tick = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-goldenrod);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs) var(--padding-8xs);
`;
const Peragraph1 = styled.div`
  position: relative;
  line-height: 24px;
`;
const TickDescription = styled.div`
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
const TickPeragraph = styled.div`
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
const H3Parent = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-whitesmoke);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 975px) {
    gap: var(--gap-base);
  }
`;
const Video02Icon = styled(Image)`
  height: 24px;
  width: 24px;
  position: relative;
`;
const Peragraph2 = styled.div`
  position: relative;
  line-height: 21px;
  font-weight: 500;
`;
const Video02Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Certificate01Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px 0px;
  gap: var(--gap-xs);
`;
const IconPeragraph = styled.div`
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
const IconDescription = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  @media screen and (max-width: 975px) {
    gap: var(--gap-base);
  }
`;
const PageHeading = styled.section`
  flex: 1;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-4xl);
  gap: var(--gap-5xl);
  max-width: calc(100% - 459px);
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
  @media screen and (max-width: 1000px) {
    display: none;
  }
  @media screen and (max-width: 975px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const H2 = styled.a`
  text-decoration: none;
  position: relative;
  text-transform: capitalize;
  font-weight: 600;
  color: inherit;
`;
const DownloadButton = styled.div`
  align-self: stretch;
  border-bottom: 1px solid var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-base) var(--padding-5xl) var(--padding-sm);
  gap: var(--gap-xl);
`;
const ModuleContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameChild = styled(Button)`
  width: 411px;
  height: 56px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
    width: calc(100% - 40px);
  }
`;
const ModuleContentParent = styled.div`
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
  @media screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media screen and (max-width: 975px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Root1 = styled.div`
  width: 1237px;
  height: 884px;
  border-radius: var(--br-13xl);
  border: 1px solid var(--color-gray-400);
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
  @media screen and (max-width: 1000px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    height: auto;
  }
`;

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <Root1 className={className}>
      <PageHeading>
        <PageHeadingChild
          width={730}
          height={368}
          alt=""
          src="/rectangle-15511@2x.png"
        />
        <Texts>
          <H>The Complete 2024 Web Development Bootcamp</H>
          <Peragraph>
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, PostgreSQL, Web3 and DApps
          </Peragraph>
          <TickDescription>
            <Tick>
              <VectorIcon
                loading="lazy"
                width={14}
                height={11}
                alt=""
                src="/vector1.svg"
              />
            </Tick>
            <Peragraph1>Last updated 8/2024</Peragraph1>
          </TickDescription>
        </Texts>
        <H3Parent>
          <H1>What you'll learn</H1>
          <TickPeragraph>
            <FrameComponent />
            <FrameComponent tick02BackgroundColor="unset" />
            <FrameComponent tick02BackgroundColor="#fff" />
            <FrameComponent tick02BackgroundColor="#fff" />
          </TickPeragraph>
        </H3Parent>
        <IconDescription>
          <H1>This course includes:</H1>
          <IconPeragraph>
            <Video02Parent>
              <Video02Icon width={24} height={24} alt="" src="/video02.svg" />
              <Peragraph2>61 hours on-demand video</Peragraph2>
            </Video02Parent>
            <Video02Parent>
              <Video02Icon
                width={24}
                height={24}
                alt=""
                src="/download02.svg"
              />
              <Peragraph2>194 downloadable resources</Peragraph2>
            </Video02Parent>
            <Certificate01Parent>
              <Video02Icon
                width={24}
                height={24}
                alt=""
                src="/certificate01.svg"
              />
              <Peragraph2>Certificate of completion</Peragraph2>
            </Certificate01Parent>
            <Video02Parent>
              <Video02Icon
                width={24}
                height={24}
                alt=""
                src="/fileempty01.svg"
              />
              <Peragraph2>65 articles</Peragraph2>
            </Video02Parent>
          </IconPeragraph>
        </IconDescription>
      </PageHeading>
      <ModuleContentParent>
        <ModuleContent>
          <DownloadButton>
            <H2>course module</H2>
            <Video02Icon
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/download04.svg"
            />
          </DownloadButton>
          <ModuleContent>
            <CourseModule h3="introduction" />
            <CourseModule
              courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
              h3="Course content"
              h3TextDecoration="unset"
            />
            <CourseModule
              courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
              h3="Course content"
              h3TextDecoration="unset"
            />
            <CourseModule
              courseModuleBorderBottom="1px solid rgba(33, 33, 33, 0.2)"
              h3="Course content"
              h3TextDecoration="unset"
            />
            <CourseModule
              courseModuleBorderBottom="unset"
              h3="Course content"
              h3TextDecoration="unset"
            />
          </ModuleContent>
        </ModuleContent>
        <FrameChild
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#242f3e",
            fontSize: "18",
            background: "#ffda58",
            borderRadius: "50px",
            "&:hover": { background: "#ffda58" },
            width: 411,
            height: 56,
          }}
        >
          Buy now - $1
        </FrameChild>
      </ModuleContentParent>
    </Root1>
  );
};

export default Root;
