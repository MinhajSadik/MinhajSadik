import { FunctionComponent } from "react";
import styled from "styled-components";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Info from "../components/Info";
import Main from "../components/Main";
import TestimonialSection from "../components/TestimonialSection";
import VideoSection from "../components/VideoSection";
import BlogsContent from "../components/BlogsContent";
import BlogPosts from "../components/blog-posts";
import Main from "../components/Main";
import Info from "../components/Info";

const ColorShapeIcon = styled.img`
  position: absolute;
  top: 2801px;
  left: 744px;
  width: 757px;
  height: 797px;
  overflow: hidden;
`;
const B10f139403dfb6b5d46f5HeroGraIcon = styled.img`
  position: absolute;
  top: 742px;
  left: -4px;
  width: 557.5px;
  height: 849.3px;
  overflow: hidden;
  object-fit: contain;
`;
const LineBackgroundShapes = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 320px;
  max-height: 100%;
  width: 867px;
  z-index: 1;
`;
const B10f139403dfb6b5d46f5HeroGraIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 665px;
  width: 847px;
  height: 554px;
  overflow: hidden;
  z-index: 2;
`;
const ColorShapeParent = styled.section`
  width: 100%;
  height: 3864px;
  position: absolute;
  margin: 0 !important;
  right: 0px;
  bottom: 415px;
  left: 0px;
`;
const Architectures = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
const ArchitectureLabel = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl) var(--padding-7xl)
    var(--padding-5xl);
`;
const ArchitectureTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Microservice = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const H = styled.h1`
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
const ArchitectureTypes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  font-size: var(--font-size-61xl);
  font-family: var(--font-inter);
`;
const ClientServer = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const TechnologiesTitle = styled.div`
  position: absolute;
  top: 6px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-4xl) var(--padding-7xl)
    var(--padding-5xl);
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
`;
const Prototype = styled.h1`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 225px;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const Prototype1 = styled.h1`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 170px;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-7xl);
    line-height: 72px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 54px;
  }
`;
const TechnologiesTitleParent = styled.div`
  height: 90px;
  width: 140px;
  position: relative;
`;
const Items = styled.div`
  align-self: stretch;
  width: 1448px;
  border-radius: var(--br-xs);
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-5xl);
  box-sizing: border-box;
  gap: var(--gap-12xl-1);
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
  }
`;
const ItemsWrapper = styled.section`
  align-self: stretch;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-13xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--color-gray-600);
  font-family: var(--font-archivo);
`;
const FeaturedAndWorkProcessSect = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const FeaturedWork = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  z-index: 3;
`;
const BlogsSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-35xl);
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1225px) {
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-8xl);
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
`;
const Content = styled.footer`
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
const Footer = styled.section`
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
const HomepageRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 33.4px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
`;

const Homepage: FunctionComponent = () => {
  return (
    <HomepageRoot>
      <ColorShapeParent>
        <ColorShapeIcon alt="" src="/color-shape.svg" />
        <B10f139403dfb6b5d46f5HeroGraIcon
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-2@2x.png"
        />
        <LineBackgroundShapes alt="" src="/line-background-shapes.svg" />
        <B10f139403dfb6b5d46f5HeroGraIcon1
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-1.svg"
        />
      </ColorShapeParent>
      <FrameComponent />
      <FrameComponent3 />
      <ItemsWrapper>
        <Items>
          <ArchitectureTitle>
            <ArchitectureLabel>
              <Architectures>Architectures</Architectures>
            </ArchitectureLabel>
          </ArchitectureTitle>
          <Microservice>Microservice</Microservice>
          <ArchitectureTypes>
            <H>*</H>
          </ArchitectureTypes>
          <Microservice>Monolithic</Microservice>
          <ArchitectureTypes>
            <H>*</H>
          </ArchitectureTypes>
          <ClientServer>Client-Server</ClientServer>
          <ArchitectureTypes>
            <H>*</H>
          </ArchitectureTypes>
          <ClientServer>System Design</ClientServer>
          <TechnologiesTitleParent>
            <TechnologiesTitle>
              <Architectures>Technologies</Architectures>
            </TechnologiesTitle>
            <Prototype>Prototype</Prototype>
            <Prototype1>Prototype</Prototype1>
          </TechnologiesTitleParent>
        </Items>
      </ItemsWrapper>
      <FeaturedWork>
        <FeaturedAndWorkProcessSect>
          <FrameComponent1 />
          <FrameComponent2 />
        </FeaturedAndWorkProcessSect>
        <TestimonialSection />
      </FeaturedWork>
      <VideoSection />
      <BlogsSection>
        <BlogsContent />
        <BlogPosts />
      </BlogsSection>
      <Footer>
        <Content>
          <Main />
          <Info />
        </Content>
      </Footer>
    </HomepageRoot>
  );
};

export default Homepage;