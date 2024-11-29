import { FunctionComponent, memo } from "react";
import styled from "styled-components";

export type FrameComponent1Type = {
  className?: string;
};

const FeaturedProjects = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    font-size: var(--font-size-29xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-17xl);
  }
`;
const ViewWorks = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-archivo);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 96px;
`;
const ButtonContactUs = styled.button`
  cursor: pointer;
  border: 1px solid var(--color-goldenrod-100);
  padding: var(--padding-base) var(--padding-3xl);
  background-color: var(--color-gray-100);
  height: 56px;
  flex: 1;
  border-radius: var(--br-xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--color-dimgray-100);
    border: 1px solid var(--color-goldenrod-200);
    box-sizing: border-box;
  }
`;
const ArrowUpLeft01Icon = styled.img`
  height: 24px;
  width: 24px;
  position: relative;
  object-fit: contain;
`;
const IconPlay = styled.div`
  border-radius: var(--br-xs);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
`;
const ViewWorksButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const FeaturedProjectTitle = styled.div`
  width: 1312px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;
const ProjectHoverChild = styled.img`
  height: 368px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  min-width: 273px;
`;
const ProjectHoverCardChild = styled.img`
  align-self: stretch;
  height: 516.4px;
  position: relative;
  border-radius: var(--br-5xl);
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
`;
const SupportingText = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 600;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Hover = styled.div`
  border-radius: var(--br-5xl);
  background-color: var(--color-goldenrod-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-398xl) var(--padding-174xl) var(--padding-5xl)
    var(--padding-4xl);
  z-index: 1;
  margin-top: -440px;
  @media screen and (max-width: 850px) {
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const ProjectHoverCard = styled.div`
  height: 368px;
  width: 426px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const HoverBackgroundIcon = styled.img`
  height: 568px;
  flex: 1;
  position: relative;
  border-radius: var(--br-5xl);
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 276px;
`;
const ProjectHover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
  font-size: var(--font-size-3xl);
  color: var(--greyscale-500);
  @media screen and (max-width: 1225px) {
    flex-wrap: wrap;
  }
`;
const FeaturedProjectTitleParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-46xl) var(--padding-xl);
  box-sizing: border-box;
  gap: var(--gap-42xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--color-gray-800);
  font-family: var(--font-inter);
  @media screen and (max-width: 850px) {
    gap: var(--gap-11xl);
    padding-top: var(--padding-23xl);
    padding-bottom: var(--padding-23xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-mini);
    padding-top: var(--padding-8xl);
    padding-bottom: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const FrameComponent1: FunctionComponent<FrameComponent1Type> = memo(
  ({ className = "" }) => {
    return (
      <FeaturedProjectTitleParentRoot className={className}>
        <FeaturedProjectTitle>
          <FeaturedProjects>Featured Projects</FeaturedProjects>
          <ViewWorksButton>
            <ButtonContactUs>
              <ViewWorks>View Works</ViewWorks>
            </ButtonContactUs>
            <IconPlay>
              <ArrowUpLeft01Icon
                loading="lazy"
                alt=""
                src="/arrowupleft01.svg"
              />
            </IconPlay>
          </ViewWorksButton>
        </FeaturedProjectTitle>
        <ProjectHover>
          <ProjectHoverChild alt="" src="/group-469393.svg" />
          <ProjectHoverCard>
            <ProjectHoverCardChild alt="" src="/rectangle-157@2x.png" />
            <Hover>
              <SupportingText>Real Estate website</SupportingText>
            </Hover>
          </ProjectHoverCard>
          <HoverBackgroundIcon
            loading="lazy"
            alt=""
            src="/rectangle-157-1@2x.png"
          />
        </ProjectHover>
      </FeaturedProjectTitleParentRoot>
    );
  }
);

export default FrameComponent1;