import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import TestimonialSection from "../components/testimonial-section";
import VideoSection from "../components/video-section";
import BlogsSection from "../components/blogs-section";
import Footer from "../components/footer";

const ColorShapeIcon = styled(Image)`
  position: absolute;
  top: 2801px;
  left: 744px;
  width: 757px;
  height: 797px;
  overflow: hidden;
`;
const B10f139403dfb6b5d46f5HeroGraIcon = styled(Image)`
  position: absolute;
  top: 742px;
  left: -4px;
  width: 557.5px;
  height: 849.3px;
  overflow: hidden;
  object-fit: contain;
`;
const LineBackgroundShapes = styled(Image)`
  position: absolute;
  height: 100%;
  top: 0px;
  bottom: 0px;
  left: 320px;
  max-height: 100%;
  width: 867px;
  z-index: 1;
`;
const B10f139403dfb6b5d46f5HeroGraIcon1 = styled(Image)`
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
const SkillItems = styled.div`
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
const SkillItems1 = styled.div`
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
const Prototype = styled.h1`
  margin: 0 !important;
  position: absolute;
  top: 0px;
  right: -204px;
  font-size: inherit;
  line-height: 90px;
  font-weight: 500;
  font-family: inherit;
  flex-shrink: 0;
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
  position: relative;
  gap: var(--gap-12xl-1);
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1482px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    gap: var(--gap-base);
    flex-wrap: wrap;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
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

const Homepage: NextPage = () => {
  return (
    <HomepageRoot>
      <ColorShapeParent>
        <ColorShapeIcon
          width={757}
          height={797}
          alt=""
          src="/color-shape.svg"
        />
        <B10f139403dfb6b5d46f5HeroGraIcon
          width={558}
          height={849}
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-2@2x.png"
        />
        <LineBackgroundShapes
          width={867}
          height={3864}
          alt=""
          src="/line-background-shapes1.svg"
        />
        <B10f139403dfb6b5d46f5HeroGraIcon1
          width={847}
          height={554}
          alt=""
          src="/650b10f139403dfb6b5d46f5-hero-gradient-1.svg"
        />
      </ColorShapeParent>
      <FrameComponent1 />
      <FrameComponent4 />
      <ItemsWrapper>
        <Items>
          <SkillItems>
            <ArchitectureLabel>
              <Architectures>Architectures</Architectures>
            </ArchitectureLabel>
          </SkillItems>
          <Microservice>Microservice</Microservice>
          <SkillItems1>
            <H>*</H>
          </SkillItems1>
          <Microservice>Monolithic</Microservice>
          <SkillItems1>
            <H>*</H>
          </SkillItems1>
          <ClientServer>Client-Server</ClientServer>
          <SkillItems1>
            <H>*</H>
          </SkillItems1>
          <ClientServer>System Design</ClientServer>
          <SkillItems>
            <ArchitectureLabel>
              <Architectures>Technologies</Architectures>
            </ArchitectureLabel>
          </SkillItems>
          <Microservice>Prototype</Microservice>
          <Prototype>Prototype</Prototype>
        </Items>
      </ItemsWrapper>
      <FeaturedWork>
        <FeaturedAndWorkProcessSect>
          <FrameComponent2 />
          <FrameComponent3 />
        </FeaturedAndWorkProcessSect>
        <TestimonialSection />
      </FeaturedWork>
      <VideoSection />
      <BlogsSection />
      <Footer />
    </HomepageRoot>
  );
};

export default Homepage;
